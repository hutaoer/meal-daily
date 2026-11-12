import React from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export type LikeVariant = 'plain' | 'circle' | 'pill'

interface Props {
  liked: boolean
  count: number
  variant?: LikeVariant
  onToggle: () => void
}

/**
 * 4 处点赞入口共用的按钮：内容列表 / 菜品列表 / 一餐详情 / 菜品详情。
 * 点击事件必须阻止冒泡，避免触发卡片跳转（PRD §5.5）。
 */
const LikeButton: React.FC<Props> = ({ liked, count, variant = 'plain', onToggle }) => {
  const handleTap = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    onToggle()
  }

  return (
    <View
      className={`like-btn like-btn--${variant} ${liked ? 'like-btn--liked' : ''}`}
      onClick={handleTap}
    >
      <Text className='like-btn__heart'>{liked ? '♥' : '♡'}</Text>
      {variant !== 'circle' && <Text className='like-btn__count'>{count}</Text>}
    </View>
  )
}

export default LikeButton
