/**
 * 日期展示工具
 * 数据源统一为 'YYYY.MM.DD'（见 scripts/sync-content.mjs 校验）
 */

/** '2026.06.26' -> '6月26日'，去掉前导零更口语化；解析失败则原样返回 */
export function formatShortDate(date: string): string {
  const match = /^(\d{4})\.(\d{2})\.(\d{2})$/.exec(date)
  if (!match) return date
  const [, , mm, dd] = match
  return `${parseInt(mm, 10)}月${parseInt(dd, 10)}日`
}
