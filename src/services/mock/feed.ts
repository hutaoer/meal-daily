import { userFeed } from './generated'
import type { FeedItem } from '../../types/content'

/**
 * 站点文案常量（首页 / 列表页页头共用）。
 * name 是品牌名，需与 app.config.ts / index.config.ts 的
 * navigationBarTitleText 保持一致（页面标题是编译期配置，无法引用此常量）。
 */
export const SITE_META = {
  name: '林小厨家常食记',
  kicker: '一日三餐 · 家常手记',
  headline: '把日子，做成一桌好菜',
  description: '记录厨房里那些简单、好吃、值得再来一次的日常。',
  footer: '— 认真吃饭，好好生活 —',
  updatedAt: '2026.11.12',
}

/**
 * 内置首页精选：13 条。content/ 录入的内容会排在它前面，
 * 合并后的最终信息流见文件末尾的 feed。
 * 顺序是编辑排序（精选优先），与 contents 的时间排序互不影响。
 * coverHeight 单位为 rpx（设计稿 px × 2），用于瀑布流错落与最短列优先分列。
 */
const baseFeed: FeedItem[] = [
  {
    id: 'f001', type: 'meal', refId: '202611081',
    title: '周末的三菜一汤',
    subtitle: '慢一点的周六，做了三道想吃很久的家常菜',
    coverKey: 'terracotta', date: '2026.11.08',
    meta: '11.08 · 晚餐 · 3 道菜', tags: ['周末', '家常'], coverHeight: 330,
  },
  {
    id: 'f002', type: 'dish', refId: 'd007',
    title: '回锅肉',
    subtitle: '灯盏窝卷起来，才算炒到位',
    coverKey: 'chili', date: '2026.11.07',
    meta: '30 分钟 · 中等', tags: ['下饭', '川菜'], coverHeight: 300,
  },
  {
    id: 'f003', type: 'meal', refId: '202611071',
    title: '立冬的一锅炖菜',
    subtitle: '天冷了就想吃点热的，一锅炖到软烂',
    coverKey: 'sage', date: '2026.11.07',
    meta: '11.07 · 晚餐 · 2 道菜', tags: ['节气', '暖胃'], coverHeight: 340,
  },
  {
    id: 'f004', type: 'dish', refId: 'd006',
    title: '葱油拌面',
    subtitle: '一把小葱就能香一整晚',
    coverKey: 'leaf-green', date: '2026.11.02',
    meta: '20 分钟 · 简单', tags: ['一人食', '快手'], coverHeight: 280,
  },
  {
    id: 'f005', type: 'meal', refId: '202610061',
    title: '中秋家宴',
    subtitle: '一家人围着桌子，菜要多到摆不下才好',
    coverKey: 'warm-orange', date: '2026.10.06',
    meta: '10.06 · 晚餐 · 5 道菜', tags: ['家宴', '节日'], coverHeight: 350,
  },
  {
    id: 'f006', type: 'meal', refId: '202611061',
    title: '一个人的周末午餐',
    subtitle: '不用凑合，一个人也值得好好摆一桌',
    coverKey: 'wheat-gold', date: '2026.11.06',
    meta: '11.06 · 午餐 · 4 道菜', tags: ['一人食', '快手'], coverHeight: 330,
  },
  {
    id: 'f007', type: 'dish', refId: 'd001',
    title: '番茄炒鸡蛋',
    subtitle: '酸甜下饭，十分钟就能上桌',
    coverKey: 'tomato-red', date: '2026.11.08',
    meta: '10 分钟 · 简单', tags: ['快手', '下饭'], coverHeight: 260,
  },
  {
    id: 'f008', type: 'meal', refId: '202611021',
    title: '入秋的第一锅热汤',
    subtitle: '起风的晚上，先给自己盛一碗热汤',
    coverKey: 'oat', date: '2026.11.02',
    meta: '11.02 · 晚餐 · 3 道菜', tags: ['汤类', '入秋'], coverHeight: 380,
  },
  {
    id: 'f009', type: 'dish', refId: 'd002',
    title: '蒜蓉西兰花',
    subtitle: '清爽解腻，五分钟炒一盘绿',
    coverKey: 'leaf-green', date: '2026.11.08',
    meta: '12 分钟 · 简单', tags: ['清爽', '素食'], coverHeight: 290,
  },
  {
    id: 'f010', type: 'dish', refId: 'd003',
    title: '蛋炒饭',
    subtitle: '剩米饭最好的归宿，粒粒分明',
    coverKey: 'wheat-gold', date: '2026.11.06',
    meta: '10 分钟 · 简单', tags: ['一人食', '快手'], coverHeight: 280,
  },
  {
    id: 'f011', type: 'meal', refId: '202610281',
    title: '家里来客人的一桌菜',
    subtitle: '朋友临时来吃饭，冰箱里凑出满满一桌',
    coverKey: 'terracotta', date: '2026.10.28',
    meta: '10.28 · 晚餐 · 5 道菜', tags: ['待客', '下饭'], coverHeight: 370,
  },
  {
    id: 'f012', type: 'dish', refId: 'd004',
    title: '麻婆豆腐',
    subtitle: '麻辣鲜香，一碗米饭不够配',
    coverKey: 'chili', date: '2026.10.28',
    meta: '20 分钟 · 中等', tags: ['下饭', '微辣'], coverHeight: 310,
  },
  {
    id: 'f013', type: 'meal', refId: '202610251',
    title: '工作日快手晚餐',
    subtitle: '二十分钟搞定，给加班的自己一点交代',
    coverKey: 'oat', date: '2026.10.25',
    meta: '10.25 · 晚餐 · 2 道菜', tags: ['快手', '一人食'], coverHeight: 350,
  },
]

/**
 * 首页唯一信息流 = content/ 录入内容 + 内置精选。
 * manifest.pinned 的第一项即 Banner 第一张；两类内容共用同一个 FeedItem 结构。
 */
export const feed: FeedItem[] = [...userFeed, ...baseFeed]

/** 首页切分规则：Banner 与瀑布流共用同一数组、同一卡片组件 */
export const BANNER_SIZE = 5
export const bannerItems = feed.slice(0, BANNER_SIZE)
export const waterfallItems = feed.slice(BANNER_SIZE)
