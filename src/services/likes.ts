/**
 * 展示用点赞数：静态基数 + 本机点赞。
 * 纯函数，不依赖 Taro，便于单元测试（PRD §5.5）。
 */
export function displayLikes(base: number, liked: boolean): number {
  return base + (liked ? 1 : 0)
}
