import { isColorKey } from './covers'
import { contents } from './contents'
import { dishes } from './dishes'
import { feed } from './feed'
import type { ContentItem, Dish } from '../../types/content'

export { COLOR_BLOCKS, gradientOf, isColorKey } from './covers'
export { contents } from './contents'
export { dishes } from './dishes'
export { feed, bannerItems, waterfallItems, BANNER_SIZE, SITE_META } from './feed'

/** 按 id 反查实体；查不到返回 undefined（点赞里失效的 id 静默跳过） */
export function findContent(id: string): ContentItem | undefined {
  return contents.find((item) => item.id === id)
}
export function findDish(id: string): Dish | undefined {
  return dishes.find((item) => item.id === id)
}

/** 内容列表：必须按数值降序，9 位与 10 位 id 混排时字符串比较会错位（PRD §5.3） */
export function sortedContents(): ContentItem[] {
  return [...contents].sort((a, b) => Number(b.id) - Number(a.id))
}

/** 用已喜欢的 id 反查实体，保持 id 倒序，取不到的静默跳过 */
export function resolveLikedContents(ids: string[]): ContentItem[] {
  return [...ids]
    .sort((a, b) => Number(b) - Number(a))
    .map(findContent)
    .filter((item): item is ContentItem => Boolean(item))
}

export function resolveLikedDishes(ids: string[]): Dish[] {
  return ids.map(findDish).filter((item): item is Dish => Boolean(item))
}

/** 生成日期戳 id（供后续新增内容使用），见 PRD §5.3 */
export function makeContentId(date: Date, seq: number): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}${m}${d}${seq}`
}

/**
 * 本地数据一致性自检（PRD §5.7）。开发态调用，只 warn 不抛错。
 */
export function validateMockData(): string[] {
  const problems: string[] = []
  const checkCoverUrl = (id: string, url?: string) => {
    if (url && !/^https:\/\//.test(url)) problems.push(`${id} 的 coverImgUrl 必须是 https 链接`)
  }
  contents.forEach((c) => checkCoverUrl(c.id, c.coverImgUrl))
  dishes.forEach((d) => checkCoverUrl(d.id, d.coverImgUrl))
  feed.forEach((f) => checkCoverUrl(f.id, f.coverImgUrl))
  const contentIds = new Set(contents.map((c) => c.id))
  const dishIds = new Set(dishes.map((d) => d.id))

  if (contentIds.size !== contents.length) problems.push('contents 存在重复 id')
  if (dishIds.size !== dishes.length) problems.push('dishes 存在重复 id')
  if (new Set(feed.map((f) => f.id)).size !== feed.length) problems.push('feed 存在重复 id')

  contents.forEach((c) => {
    if (!/^\d{9,10}$/.test(c.id)) problems.push(`内容 id 格式不合法: ${c.id}`)
    c.dishIds.forEach((id) => {
      if (!dishIds.has(id)) problems.push(`${c.id} 引用了不存在的菜品 ${id}`)
    })
  })

  feed.forEach((f) => {
    const target = f.type === 'meal' ? contentIds : dishIds
    if (!target.has(f.refId)) problems.push(`${f.id} 的 refId ${f.refId} 未命中实体`)
    if (!isColorKey(f.coverKey)) problems.push(`${f.id} 的 coverKey 非法`)
  })

  dishes.forEach((d) => {
    if (!isColorKey(d.coverKey)) problems.push(`${d.id} 的 coverKey 非法`)
    d.images.forEach((k) => {
      if (!isColorKey(k)) problems.push(`${d.id} 图集 coverKey 非法: ${k}`)
    })
    d.steps.forEach((s, i) => {
      if (s.index !== i + 1) problems.push(`${d.id} 的步骤序号不连续`)
    })
  })

  if (process.env.NODE_ENV !== 'production' && problems.length > 0) {
    console.warn('[meal-daily] mock 数据校验未通过:', problems)
  }
  return problems
}
