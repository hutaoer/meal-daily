import { create } from 'zustand'
import { storage } from '../utils/storage'
import { STORAGE_KEYS } from '../utils/constants'

interface RecipeState {
  favorites: string[]   // 收藏的菜谱 ID 列表
  likes: string[]       // 点赞的菜谱 ID 列表
  toggleFavorite: (id: string) => void
  toggleLike: (id: string) => void
  isFavorited: (id: string) => boolean
  isLiked: (id: string) => boolean
  init: () => void
}

export const useRecipeStore = create<RecipeState>((set, get) => ({
  favorites: [],
  likes: [],

  init: () => {
    const favorites = storage.get<string[]>(STORAGE_KEYS.FAVORITES) || []
    const likes = storage.get<string[]>(STORAGE_KEYS.LIKES) || []
    set({ favorites, likes })
  },

  toggleFavorite: (id) => {
    const { favorites } = get()
    const next = favorites.includes(id) ? favorites.filter((f) => f !== id) : [...favorites, id]
    storage.set(STORAGE_KEYS.FAVORITES, next)
    set({ favorites: next })
  },

  toggleLike: (id) => {
    const { likes } = get()
    const next = likes.includes(id) ? likes.filter((l) => l !== id) : [...likes, id]
    storage.set(STORAGE_KEYS.LIKES, next)
    set({ likes: next })
  },

  isFavorited: (id) => get().favorites.includes(id),
  isLiked: (id) => get().likes.includes(id),
}))
