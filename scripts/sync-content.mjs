#!/usr/bin/env node
/**
 * 把 content/ 里的人工录入 JSON 编译成小程序可直接 import 的静态数据。
 *
 * 为什么需要这一步：微信小程序运行时不能遍历目录、也不能读取包内 JSON，
 * 所有展示数据必须编译进 JS。content/ 是编辑态，generated.ts 是产物。
 *
 * 用法：yarn content:sync（node scripts/sync-content.mjs）
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT = path.join(ROOT, 'content')
const OUT = path.join(ROOT, 'src', 'services', 'mock', 'generated.ts')

/** 与 src/services/mock/covers.ts 中的 COLOR_BLOCKS 保持一致 */
const COLOR_KEYS = new Set([
  'warm-orange', 'tomato-red', 'sage', 'leaf-green',
  'wheat-gold', 'terracotta', 'chili', 'oat',
])
const MEAL_TYPES = new Set(['早餐', '午餐', '晚餐'])
const DIFFICULTIES = new Set(['简单', '中等'])
const MEAL_FIELDS = [
  'id', 'date', 'mealType', 'weekday', 'title', 'subtitle', 'coverKey',
  'totalMinutes', 'servings', 'tags', 'note', 'dishIds', 'likeCount',
]
const DISH_FIELDS = [
  'id', 'title', 'description', 'subtitle', 'coverKey', 'images', 'category',
  'tags', 'duration', 'difficulty', 'servings', 'date', 'story', 'ingredients',
  'steps', 'likeCount',
]

const problems = []
const fail = (file, message) => problems.push(`${file} → ${message}`)

function readJson(rel) {
  const abs = path.join(CONTENT, rel)
  let raw
  try {
    raw = fs.readFileSync(abs, 'utf8')
  } catch {
    fail(rel, '文件不存在')
    return null
  }
  try {
    return JSON.parse(raw)
  } catch (error) {
    fail(rel, `JSON 语法错误（注意不能有尾随逗号、不能用注释）：${error.message}`)
    return null
  }
}

/** 只收 *.json，跳过下划线开头的模板与说明文件 */
function listFiles(dir) {
  const abs = path.join(CONTENT, dir)
  if (!fs.existsSync(abs)) return []
  return fs.readdirSync(abs)
    .filter((name) => name.endsWith('.json') && !name.startsWith('_'))
    .sort()
    .map((name) => `${dir}/${name}`)
}

/** 去掉说明字段和 feed 覆盖块，只留实体本身 */
function cleanEntity(entity) {
  const out = {}
  Object.entries(entity).forEach(([key, value]) => {
    if (key === 'feed' || key.startsWith('_')) return
    out[key] = value
  })
  // 默认空字符串：generated.ts 里始终带该字段，空值即不展示线上图片
  if (typeof out.coverImgUrl !== 'string') out.coverImgUrl = ''
  return out
}

function cleanFeedOverride(feed) {
  if (!feed || typeof feed !== 'object') return {}
  const out = {}
  Object.entries(feed).forEach(([key, value]) => {
    if (key.startsWith('_')) return
    out[key] = value
  })
  return out
}

function validate(rel, kind, entity) {
  const id = entity.id
  const stem = path.basename(rel, '.json')
  if (typeof id !== 'string') return fail(rel, '缺少字符串 id')
  if (id !== stem) fail(rel, `文件名与 id 不一致（文件名 ${stem}，id ${id}）`)

  if (kind === 'meal' && !/^\d{9,10}$/.test(id)) {
    fail(rel, `一餐 id 必须是 9~10 位日期戳，如 202611131（当前 ${id}）`)
  }
  if (kind === 'dish' && !/^d\d{3}$/.test(id)) {
    fail(rel, `菜品 id 必须是 d + 3 位数字，如 d012（当前 ${id}）`)
  }

  const required = kind === 'meal' ? MEAL_FIELDS : DISH_FIELDS
  required.forEach((key) => {
    if (entity[key] === undefined) fail(rel, `缺少必填字段 ${key}`)
  })

  if (!/^\d{4}\.\d{2}\.\d{2}$/.test(entity.date || '')) {
    fail(rel, `date 必须是 YYYY.MM.DD（当前 ${entity.date}）`)
  }
  if (!COLOR_KEYS.has(entity.coverKey)) {
    fail(rel, `coverKey 非法：${entity.coverKey}（可用：${[...COLOR_KEYS].join(' / ')}）`)
  }
  if (typeof entity.likeCount !== 'number') fail(rel, 'likeCount 必须是数字')
  if (entity.coverImgUrl !== undefined) {
    if (typeof entity.coverImgUrl !== 'string') {
      fail(rel, 'coverImgUrl 必须是字符串（https 线上图片链接，或留空字符串）')
    } else if (entity.coverImgUrl && !/^https:\/\//.test(entity.coverImgUrl)) {
      fail(rel, 'coverImgUrl 必须以 https:// 开头；留空字符串则不展示图片')
    }
  }

  const arrayFields = kind === 'meal'
    ? { tags: 'string[]', note: 'string[]', dishIds: 'string[]' }
    : {
      tags: 'string[]', story: 'string[]', images: 'string[]',
      ingredients: 'object[]', steps: 'object[]',
    }
  Object.keys(arrayFields).forEach((key) => {
    if (entity[key] !== undefined && !Array.isArray(entity[key])) {
      fail(rel, `${key} 必须是数组`)
    }
  })

  if (kind === 'meal') {
    if (!MEAL_TYPES.has(entity.mealType)) fail(rel, `mealType 只能是 早餐 / 午餐 / 晚餐（当前 ${entity.mealType}）`)
  } else {
    if (!DIFFICULTIES.has(entity.difficulty)) fail(rel, `difficulty 只能是 简单 / 中等（当前 ${entity.difficulty}）`)
    ;(entity.images || []).forEach((key) => {
      if (!COLOR_KEYS.has(key)) fail(rel, `images 里的色块名非法：${key}`)
    })
    ;(entity.steps || []).forEach((step, index) => {
      if (step.index !== index + 1) fail(rel, `steps 第 ${index + 1} 项的 index 应为 ${index + 1}`)
    })
  }

  const override = cleanFeedOverride(entity.feed)
  if (override.coverHeight !== undefined && typeof override.coverHeight !== 'number') {
    fail(rel, 'feed.coverHeight 必须是数字（rpx，建议 260~380）')
  }
}

/** 由实体自动推导首页卡片；feed 覆盖块里的字段优先 */
function toFeed(rel, kind, entity) {
  const override = cleanFeedOverride(entity.feed)
  const shortDate = (entity.date || '').replace(/^\d{4}\./, '')
  const auto = kind === 'meal'
    ? {
      subtitle: entity.subtitle,
      meta: `${shortDate} · ${entity.mealType} · ${(entity.dishIds || []).length} 道菜`,
      coverHeight: 330,
    }
    : {
      subtitle: entity.subtitle || entity.description,
      meta: `${entity.duration} 分钟 · ${entity.difficulty}`,
      coverHeight: 300,
    }
  const item = {
    id: `f-u-${entity.id}`,
    type: kind === 'meal' ? 'meal' : 'dish',
    refId: entity.id,
    title: override.title ?? entity.title,
    subtitle: override.subtitle ?? auto.subtitle,
    coverKey: entity.coverKey,
    date: entity.date,
    meta: override.meta ?? auto.meta,
    tags: override.tags ?? (entity.tags || []).slice(0, 2),
    coverHeight: override.coverHeight ?? auto.coverHeight,
    coverImgUrl: entity.coverImgUrl || '',
  }
  if (!item.title || !item.subtitle) fail(rel, '首页卡片缺少 title / subtitle')
  return item
}

const manifest = readJson('manifest.json') || { pinned: [], excludeFromFeed: [] }
const pinned = Array.isArray(manifest.pinned) ? manifest.pinned : []
const excluded = new Set(
  Array.isArray(manifest.excludeFromFeed) ? manifest.excludeFromFeed : [],
)

const sources = [
  ...listFiles('entries').map((rel) => ({ rel, kind: 'meal' })),
  ...listFiles('dishes').map((rel) => ({ rel, kind: 'dish' })),
]

const records = []
sources.forEach(({ rel, kind }) => {
  const raw = readJson(rel)
  if (!raw) return
  validate(rel, kind, raw)
  records.push({ rel, kind, entity: cleanEntity(raw), feed: toFeed(rel, kind, raw) })
})

// 首页顺序：manifest.pinned 最前 → 其余按 date / id 倒序 → 内置数据由 feed.ts 追加
const byRel = new Map(records.map((record) => [record.rel, record]))
const pinnedSet = new Set(pinned)
const ordered = []
pinned.forEach((rel) => {
  const record = byRel.get(rel)
  if (!record) return fail(rel, 'manifest.pinned 指向的文件不存在')
  if (!excluded.has(rel)) ordered.push(record)
})
records
  .filter((record) => !pinnedSet.has(record.rel) && !excluded.has(record.rel))
  .sort((a, b) => (
    String(b.entity.date).localeCompare(String(a.entity.date))
    || String(b.entity.id).localeCompare(String(a.entity.id))
  ))
  .forEach((record) => ordered.push(record))

const userContents = records.filter((r) => r.kind === 'meal').map((r) => r.entity)
const userDishes = records.filter((r) => r.kind === 'dish').map((r) => r.entity)
const userFeed = ordered.map((r) => r.feed)

if (problems.length > 0) {
  console.error('[content:sync] 录入数据有误，未生成文件：')
  problems.forEach((message) => console.error(`  ✗ ${message}`))
  console.error('  录入说明见 content/README.md')
  process.exit(1)
}

const header = `/**
 * 本文件由 yarn content:sync 自动生成，请勿手动修改。
 * 数据源：content/（录入手册见 content/README.md）
 * 顺序由 content/manifest.json 的 pinned 决定，第一项即首页 Banner 第一张。
 */
import type { ContentItem, Dish, FeedItem } from '../../types/content'

`
const output = header
  + `export const userContents: ContentItem[] = ${JSON.stringify(userContents, null, 2)}\n\n`
  + `export const userDishes: Dish[] = ${JSON.stringify(userDishes, null, 2)}\n\n`
  + `export const userFeed: FeedItem[] = ${JSON.stringify(userFeed, null, 2)}\n`

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, output, 'utf8')

console.log(`[content:sync] ✓ 录入文件 ${records.length} 个 → ${userContents.length} 条一餐 / ${userDishes.length} 道菜 / ${userFeed.length} 张首页卡片`)
if (userFeed.length > 0) {
  console.log(`[content:sync] Banner 第 1 张：${ordered[0].rel} → ${userFeed[0].title}`)
} else {
  console.log('[content:sync] 没有录入内容，首页使用内置的 13 条精选')
}
console.log(`[content:sync] 已写入 ${path.relative(ROOT, OUT)}`)
