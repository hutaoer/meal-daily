import React, { useState } from 'react'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import FeedCard from '../FeedCard'
import type { FeedItem } from '../../types/content'
import './index.scss'

interface Props {
  items: FeedItem[]
  onTap: (item: FeedItem) => void
  onCurrentChange?: (index: number) => void
}

const BannerSwiper: React.FC<Props> = ({ items, onTap, onCurrentChange }) => {
  const [current, setCurrent] = useState(0)

  const handleChange = (e: { detail: { current: number } }) => {
    setCurrent(e.detail.current)
    onCurrentChange?.(e.detail.current)
  }

  return (
    <View className='banner'>
      <Swiper
        className='banner__swiper'
        indicatorDots={false}
        nextMargin='100rpx'
        onChange={handleChange}
      >
        {items.map((item) => (
          <SwiperItem key={item.id} className='banner__item'>
            <FeedCard item={item} variant='banner' onTap={onTap} />
          </SwiperItem>
        ))}
      </Swiper>
      <View className='banner__dots'>
        {items.map((item, index) => (
          <View
            key={item.id}
            className={`banner__dot ${index === current ? 'banner__dot--active' : ''}`}
          />
        ))}
      </View>
      <Text className='banner__hint'>左右滑动查看精选</Text>
    </View>
  )
}

export default BannerSwiper
