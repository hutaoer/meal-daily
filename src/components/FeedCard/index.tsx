import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import ColorBlock from '../ColorBlock'
import { gradientOf } from '../../services/mock/covers'
import type { FeedItem } from '../../types/content'
import './index.scss'

interface Props {
  item: FeedItem
  variant: 'banner' | 'waterfall'
  onTap: (item: FeedItem) => void
}

/** 首页唯一卡片组件：Banner 与瀑布流共用，仅 variant 不同（PRD §3.1） */
const FeedCard: React.FC<Props> = ({ item, variant, onTap }) => {
  const handleTap = () => onTap(item)
  const countLabel = item.type === 'meal' ? item.meta.split('·').slice(-1)[0].trim() : ''
  const badge = item.type === 'meal' ? `一餐 · ${countLabel}` : '菜品'
  const coverUrl = item.coverImgUrl || ''

  if (variant === 'banner') {
    return (
      <View
        className='feed-card feed-card--banner'
        style={{ background: coverUrl ? undefined : gradientOf(item.coverKey) }}
        onClick={handleTap}
      >
        {/* 线上封面图 + 暗色蒙层：白字在照片上仍可读 */}
        {coverUrl ? (
          <View className='feed-card__banner-media'>
            <Image className='feed-card__banner-image' src={coverUrl} mode='aspectFill' />
            <View className='feed-card__banner-mask' />
          </View>
        ) : null}
        <View className='feed-card__badge'>
          <Text className='feed-card__badge-text'>{badge}</Text>
        </View>
        <Text className='feed-card__banner-title'>{item.title}</Text>
        <Text className='feed-card__banner-sub ellipsis-2'>{item.subtitle}</Text>
        <Text className='feed-card__banner-meta'>{item.date} · {item.meta}</Text>
      </View>
    )
  }

  return (
    <View className='feed-card feed-card--waterfall' onClick={handleTap}>
      <ColorBlock
        colorKey={item.coverKey}
        imageUrl={item.coverImgUrl}
        height={`${item.coverHeight}rpx`}
      />
      <View className='feed-card__body'>
        <Text className={`feed-card__type ${item.type === 'meal' ? 'feed-card__type--meal' : ''}`}>
          {badge}
        </Text>
        <Text className='feed-card__title'>{item.title}</Text>
        <Text className='feed-card__meta'>{item.meta}</Text>
      </View>
    </View>
  )
}

export default FeedCard
