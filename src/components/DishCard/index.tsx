import React from 'react'
import { View, Text } from '@tarojs/components'
import ColorBlock from '../ColorBlock'
import LikeButton from '../LikeButton'
import type { Dish } from '../../types/content'
import './index.scss'

interface Props {
  dish: Dish
  liked: boolean
  count: number
  onTap: (dish: Dish) => void
  onLike: (dish: Dish) => void
}

/** 菜品列表网格卡：独立 id + 色块 + 一句话描述 + 点赞（PRD §3.3） */
const DishCard: React.FC<Props> = ({ dish, liked, count, onTap, onLike }) => (
  <View className='dish-card' onClick={() => onTap(dish)}>
    <View className='dish-card__cover'>
      <ColorBlock colorKey={dish.coverKey} imageUrl={dish.coverImgUrl} height='270rpx' />
      <View className='dish-card__like'>
        <LikeButton liked={liked} count={count} variant='circle' onToggle={() => onLike(dish)} />
      </View>
    </View>
    <View className='dish-card__body'>
      <Text className='dish-card__title'>{dish.title}</Text>
      <Text className='dish-card__desc ellipsis-2'>{dish.description}</Text>
      <Text className={`dish-card__meta ${liked ? 'dish-card__meta--liked' : ''}`}>
        {dish.id} · {count} 人喜欢{liked ? ' · 已喜欢' : ''}
      </Text>
    </View>
  </View>
)

export default DishCard
