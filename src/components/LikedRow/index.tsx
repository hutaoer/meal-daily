import React from 'react'
import { View, Text } from '@tarojs/components'
import ColorBlock from '../ColorBlock'
import type { ContentItem, Dish } from '../../types/content'
import './index.scss'

interface Props {
  item: Dish | ContentItem
  kind: 'dish' | 'content'
  onTap: (id: string) => void
}

/** 「我的」页喜欢项行：按 id 反查后的实体，点击进对应详情页（PRD §3.4） */
const LikedRow: React.FC<Props> = ({ item, kind, onTap }) => {
  const detail = kind === 'dish'
    ? (item as Dish).description
    : `${item.date.slice(5)} ${(item as ContentItem).mealType}`
  const sub = `${item.id} · ${detail}`

  return (
    <View className='liked-row' onClick={() => onTap(item.id)}>
      <ColorBlock colorKey={item.coverKey} width='96rpx' height='96rpx' radius='16rpx' />
      <View className='liked-row__info'>
        <Text className='liked-row__title'>{item.title}</Text>
        <Text className='liked-row__sub ellipsis'>{sub}</Text>
      </View>
      <Text className='liked-row__heart'>♥</Text>
    </View>
  )
}

export default LikedRow
