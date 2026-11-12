import type { ColorKey } from '../../types/content'

/**
 * 色块占位映射。后续替换真实本地图片时，只改这里 + ColorBlock 内部渲染，
 * 页面与 mock 数据均不需要改动。见 PRD §4 / §9。
 */
export const COLOR_BLOCKS: Record<ColorKey, [string, string]> = {
  'warm-orange': ['#EDAD73', '#D9804D'],
  'tomato-red': ['#DE6B4F', '#B84238'],
  sage: ['#9EB88C', '#6B8C66'],
  'leaf-green': ['#8CB37A', '#578057'],
  'wheat-gold': ['#F0D182', '#D9A852'],
  terracotta: ['#CC7354', '#9E4738'],
  chili: ['#C25440', '#8C332E'],
  oat: ['#D9B587', '#AD8057'],
}

/** 生成 135° 线性渐变，供 ColorBlock 的内联 style 使用 */
export function gradientOf(key: ColorKey): string {
  const [from, to] = COLOR_BLOCKS[key] || COLOR_BLOCKS.oat
  return `linear-gradient(135deg, ${from} 0%, ${to} 100%)`
}

export function isColorKey(key: string): key is ColorKey {
  return Object.prototype.hasOwnProperty.call(COLOR_BLOCKS, key)
}
