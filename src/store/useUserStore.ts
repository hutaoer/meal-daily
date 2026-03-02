import { create } from 'zustand'
import type { UserInfo } from '../types/user'
import { storage } from '../utils/storage'
import { STORAGE_KEYS } from '../utils/constants'
import { mockLogin, getCachedUser, logout as doLogout } from '../services/user.service'

interface UserState {
  userInfo: UserInfo | null
  isLoggedIn: boolean
  loading: boolean
  login: () => Promise<void>
  logout: () => void
  initUser: () => void
}

export const useUserStore = create<UserState>((set) => ({
  userInfo: null,
  isLoggedIn: false,
  loading: false,

  initUser: () => {
    const cached = getCachedUser()
    if (cached) {
      set({ userInfo: cached, isLoggedIn: true })
    }
  },

  login: async () => {
    set({ loading: true })
    try {
      const userInfo = await mockLogin()
      set({ userInfo, isLoggedIn: true })
    } finally {
      set({ loading: false })
    }
  },

  logout: () => {
    doLogout()
    set({ userInfo: null, isLoggedIn: false })
  },
}))
