/**
 * 从数组中随机取一个元素
 */
export function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

/**
 * 格式化时长：分钟 → "15分钟" / "1小时"
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}分钟`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? `${h}小时${m}分钟` : `${h}小时`
}

/**
 * 格式化时间为 "刚刚 / X分钟前 / X小时前 / X天前"
 */
export function formatTime(isoStr: string): string {
  const diff = Date.now() - new Date(isoStr).getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return '刚刚'
  if (minutes < 60) return `${minutes}分钟前`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}小时前`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}天前`
  return new Date(isoStr).toLocaleDateString('zh-CN')
}

/**
 * 生成唯一 ID
 */
export function genId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

/**
 * 格式化数字：1000 → "1k"
 */
export function formatCount(n: number): string {
  if (n < 1000) return String(n)
  return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
}
