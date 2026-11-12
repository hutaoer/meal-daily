import { create } from 'zustand'
import { readStore, writeStore } from '../services/local-store'
import type { LocalStore } from '../types/content'

interface LikesState extends LocalStore {
  /** 从 Storage 重读，供各 Tab 页 useDidShow 调用，保证跨页状态一致 */
  sync: () => void
  toggleContentLike: (id: string) => void
  toggleDishLike: (id: string) => void
  isContentLiked: (id: string) => boolean
  isDishLiked: (id: string) => boolean
  setProfile: (patch: Partial<LocalStore['profile']>) => void
}

function persist(state: LikesState): LocalStore {
  return {
    likedContentIds: state.likedContentIds,
    likedDishIds: state.likedDishIds,
    profile: state.profile,
  }
}

function toggle(ids: string[], id: string): string[] {
  if (ids.includes(id)) return ids.filter((x) => x !== id)
  return [...ids.filter((x) => x !== id), id] // 写前去重
}

/**
 * 点赞状态与本机存储的唯一入口。
 * 只存 id 数组，不存实体、不存计数；展示数 = likeCount + (已赞 ? 1 : 0)。
 */
export const useLikes = create<LikesState>((set, get) => ({
  likedContentIds: [],
  likedDishIds: [],
  profile: { avatarUrl: '', nickName: '' },

  sync: () => set(readStore()),

  toggleContentLike: (id) => {
    const likedContentIds = toggle(get().likedContentIds, id)
    set({ likedContentIds })
    writeStore(persist(get()))
  },

  toggleDishLike: (id) => {
    const likedDishIds = toggle(get().likedDishIds, id)
    set({ likedDishIds })
    writeStore(persist(get()))
  },

  isContentLiked: (id) => get().likedContentIds.includes(id),
  isDishLiked: (id) => get().likedDishIds.includes(id),

  setProfile: (patch) => {
    const profile = { ...get().profile, ...patch }
    set({ profile })
    writeStore(persist(get()))
  },
}))

export { displayLikes } from '../services/likes'
