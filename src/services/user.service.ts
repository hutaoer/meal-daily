import type { UserInfo } from '../../types/user'
import { storage } from '../../utils/storage'
import { STORAGE_KEYS } from '../../utils/constants'
import { genId } from '../../utils/helpers'

const MOCK_AVATARS = [
  'https://api.dicebear.com/7.x/fun-emoji/svg?seed=meal1',
  'https://api.dicebear.com/7.x/fun-emoji/svg?seed=meal2',
  'https://api.dicebear.com/7.x/fun-emoji/svg?seed=meal3',
]

const MOCK_NAMES = ['带饭达人', '厨房新手', '美食探索者', '便当控', '营养师']

/**
 * Mock 登录：生成本地用户信息，模拟已登录态
 */
export const mockLogin = async (): Promise<UserInfo> => {
  const cached = storage.get<UserInfo>(STORAGE_KEYS.USER_INFO)
  if (cached) return cached

  const mockUser: UserInfo = {
    openId: 'mock_openid_' + genId(),
    nickName: MOCK_NAMES[Math.floor(Math.random() * MOCK_NAMES.length)],
    avatarUrl: MOCK_AVATARS[Math.floor(Math.random() * MOCK_AVATARS.length)],
    token: 'mock_token_' + Date.now(),
  }
  storage.set(STORAGE_KEYS.USER_INFO, mockUser)
  return mockUser
}

/**
 * 获取当前缓存的用户信息
 */
export const getCachedUser = (): UserInfo | null => {
  return storage.get<UserInfo>(STORAGE_KEYS.USER_INFO)
}

/**
 * 退出登录：清除本地用户信息
 */
export const logout = (): void => {
  storage.remove(STORAGE_KEYS.USER_INFO)
}
