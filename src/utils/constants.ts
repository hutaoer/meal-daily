import type { CategoryType, Difficulty, TagType } from '../types/recipe'

export const CATEGORY_MAP: Record<CategoryType, string> = {
  quick15: '15分钟快手',
  solo: '一人食',
  lowcal: '低卡减脂',
  homestyle: '家常菜',
  seasonal: '时令蔬菜',
}

export const CATEGORY_LIST = Object.entries(CATEGORY_MAP).map(([key, label]) => ({
  key: key as CategoryType,
  label,
}))

export const CATEGORY_EMOJI: Record<CategoryType, string> = {
  quick15: '⚡',
  solo: '🍱',
  lowcal: '🥗',
  homestyle: '🏠',
  seasonal: '🌿',
}

export const TAG_MAP: Record<TagType, string> = {
  quick: '快手',
  lowcal: '低卡',
  tasty: '下饭',
  vegetarian: '素食',
  solo: '一人食',
  homestyle: '家常',
  spicy: '微辣',
  soup: '汤类',
}

export const TAG_LIST = Object.entries(TAG_MAP).map(([key, label]) => ({
  key: key as TagType,
  label,
}))

export const DIFFICULTY_MAP: Record<Difficulty, string> = {
  easy: '简单',
  medium: '中等',
}

export const DURATION_OPTIONS = [
  { label: '≤15分钟', value: 15 },
  { label: '15-30分钟', value: 30 },
]

// Storage Keys
export const STORAGE_KEYS = {
  USER_INFO: 'meal_user_info',
  FAVORITES: 'meal_favorites',
  LIKES: 'meal_likes',
  DRAFTS: 'meal_drafts',
  SEARCH_HISTORY: 'meal_search_history',
  MY_RECIPES: 'meal_my_recipes',
}

export const PAGE_SIZE = 10
