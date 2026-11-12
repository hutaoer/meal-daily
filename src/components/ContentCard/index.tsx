import React from 'react'
import { View, Text } from '@tarojs/components'
import ColorBlock from '../ColorBlock'
import LikeButton from '../LikeButton'
import type { ContentItem } from '../../types/content'
import './index.scss'

interface Props {
  item: ContentItem
  liked: boolean
  count: number
  onTap: (item: ContentItem) => void
  onLike: (item: ContentItem) => void
}

/** 内容列表行卡：日期戳 id + 描述 + 点赞（PRD §3.2） */
const ContentCard: React.FC<Props> = ({ item, liked, count, onTap, onLike }) => (
  <View className='content-card' onClick={() => onTap(item)}>
    <ColorBlock
      colorKey={item.coverKey}
      imageUrl={item.coverImgUrl}
      width='168rpx'
      height='168rpx'
      radius='20rpx'
    />
    <View className='content-card__info'>
      <Text className='content-card__id'>
        {item.id} · 一餐 · {item.dishIds.length} 道菜
      </Text>
      <Text className='content-card__title'>{item.title}</Text>
      <Text className='content-card__desc ellipsis-2'>{item.subtitle}</Text>
    </View>
    <View className='content-card__like'>
      <LikeButton liked={liked} count={count} variant='plain' onToggle={() => onLike(item)} />
    </View>
  </View>
)

export default ContentCard
