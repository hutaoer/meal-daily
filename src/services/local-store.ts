import Taro from '@tarojs/taro'
import { EMPTY_STORE } from '../types/content'
import type { LocalStore } from '../types/content'

/** 单个 key 存全部本机可写数据，见 PRD §5.5 */
export const STORAGE_KEY = 'meal-daily:local:v1'

function emptyStore(): LocalStore {
  return {
    likedContentIds: [],
    likedDishIds: [],
    profile: { avatarUrl: '', nickName: '' },
  }
}

/** 读取并做结构化兜底：旧数据 / 脏数据都不应导致白屏 */
export function readStore(): LocalStore {
  try {
    const raw = Taro.getStorageSync(STORAGE_KEY) as Partial<LocalStore> | '' | undefined
    if (!raw || typeof raw !== 'object') return emptyStore()
    return {
      likedContentIds: Array.isArray(raw.likedContentIds) ? raw.likedContentIds : [],
      likedDishIds: Array.isArray(raw.likedDishIds) ? raw.likedDishIds : [],
      profile: {
        avatarUrl: typeof raw.profile?.avatarUrl === 'string' ? raw.profile.avatarUrl : '',
        nickName: typeof raw.profile?.nickName === 'string' ? raw.profile.nickName : '',
      },
    }
  } catch {
    return emptyStore()
  }
}

export function writeStore(store: LocalStore): void {
  try {
    Taro.setStorageSync(STORAGE_KEY, store)
  } catch {
    // Storage 写入失败时不阻断浏览；下次启动回到 EMPTY_STORE
  }
}

export { EMPTY_STORE }
