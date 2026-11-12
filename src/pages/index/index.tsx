import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import BannerSwiper from '../../components/BannerSwiper'
import MasonryFeed from '../../components/MasonryFeed'
import SectionTitle from '../../components/SectionTitle'
import EmptyHint from '../../components/EmptyHint'
import { bannerItems, waterfallItems, feed, SITE_META } from '../../services/mock'
import type { FeedItem } from '../../types/content'
import './index.scss'

const pad = (n: number) => String(n).padStart(2, '0')

const Index: React.FC = () => {
  const [current, setCurrent] = useState(0)

  const handleTap = (item: FeedItem) => {
    const url = item.type === 'meal'
      ? `/pages/meal-detail/index?id=${item.refId}`
      : `/pages/dish-detail/index?id=${item.refId}`
    Taro.navigateTo({ url })
  }

  return (
    <View className='page page--tab index'>
      {/* M1-1 品牌头 */}
      <View className='index__brand'>
        <Text className='kicker'>{SITE_META.kicker}</Text>
        <Text className='headline index__headline'>{SITE_META.headline}</Text>
        <Text className='index__desc'>{SITE_META.description}</Text>
        <Text className='meta index__count'>
          共 {feed.length} 条记录 · 更新于 {SITE_META.updatedAt}
        </Text>
      </View>

      {/* M1-2 / M1-3 Banner */}
      <View className='index__section'>
        <SectionTitle
          title='本周精选'
          right={`${pad(current + 1)} / ${pad(bannerItems.length)}`}
        />
        <BannerSwiper items={bannerItems} onTap={handleTap} onCurrentChange={setCurrent} />
      </View>

      {/* M1-4 / M1-5 瀑布流 */}
      <View className='index__section'>
        <SectionTitle title='全部记录' right={`共 ${waterfallItems.length} 条`} />
        <Text className='index__legend'>菜品 / 一餐 · 两种内容共用同一张卡片</Text>
        {waterfallItems.length > 0 ? (
          <MasonryFeed items={waterfallItems} onTap={handleTap} />
        ) : (
          <EmptyHint text='还没有更多记录' subText='前 5 条已全部收进本周精选' />
        )}
      </View>

      <Text className='footer-note'>{SITE_META.footer}</Text>
    </View>
  )
}

export default Index
