/**
 * v2.0 数据模型 —— 个人家常菜分享小程序
 * 见 docs/PRD-家常菜分享小程序.md §4
 */

export type FeedItemType = 'dish' | 'meal'
export type Difficulty = '简单' | '中等'
export type MealType = '早餐' | '午餐' | '晚餐'
export type ColorKey =
  | 'warm-orange'
  | 'tomato-red'
  | 'sage'
  | 'leaf-green'
  | 'wheat-gold'
  | 'terracotta'
  | 'chili'
  | 'oat'

export interface Ingredient {
  name: string
  amount: string
}

export interface Step {
  index: number
  description: string
}

/** 内容（一餐）：id = yyyymmdd + 当天序号 */
export interface ContentItem {
  id: string
  date: string
  mealType: MealType
  weekday: string
  title: string
  subtitle: string
  coverKey: ColorKey
  totalMinutes: number
  servings: number
  tags: string[]
  note: string[]
  dishIds: string[]
  likeCount: number
  /** 线上封面图 URL；默认空字符串，留空则展示 coverKey 色块 */
  coverImgUrl?: string
}

/** 菜品：独立 id 命名空间 d001… */
export interface Dish {
  id: string
  title: string
  description: string
  subtitle: string
  coverKey: ColorKey
  images: ColorKey[]
  category: string
  tags: string[]
  duration: number
  difficulty: Difficulty
  servings: number
  date: string
  story: string[]
  ingredients: Ingredient[]
  steps: Step[]
  likeCount: number
  /** 线上封面图 URL；默认空字符串，留空则展示 coverKey 色块 */
  coverImgUrl?: string
}

/** 首页统一内容流：Banner 与瀑布流共用 */
export interface FeedItem {
  id: string
  type: FeedItemType
  refId: string
  title: string
  subtitle: string
  coverKey: ColorKey
  date: string
  meta: string
  tags: string[]
  coverHeight: number
  /** 线上封面图 URL；默认空字符串，留空则展示 coverKey 色块 */
  coverImgUrl?: string
}

/** 本机可写数据 */
export interface LocalStore {
  likedContentIds: string[]
  likedDishIds: string[]
  profile: {
    avatarUrl: string
    nickName: string
  }
}

export const EMPTY_STORE: LocalStore = {
  likedContentIds: [],
  likedDishIds: [],
  profile: { avatarUrl: '', nickName: '' },
}
