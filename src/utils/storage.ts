import Taro from '@tarojs/taro'

export const storage = {
  get<T>(key: string): T | null {
    try {
      const val = Taro.getStorageSync(key)
      return val !== '' ? (val as T) : null
    } catch {
      return null
    }
  },

  set(key: string, value: unknown): void {
    try {
      Taro.setStorageSync(key, value)
    } catch {}
  },

  remove(key: string): void {
    try {
      Taro.removeStorageSync(key)
    } catch {}
  },

  clear(): void {
    try {
      Taro.clearStorageSync()
    } catch {}
  },
}
