import React from 'react'
import { View } from '@tarojs/components'
import FeedCard from '../FeedCard'
import type { FeedItem } from '../../types/content'
import './index.scss'

interface Props {
  items: FeedItem[]
  onTap: (item: FeedItem) => void
}

/** 双列瀑布流：最短列优先分列，见 PRD §5.2 */
const MasonryFeed: React.FC<Props> = ({ items, onTap }) => {
  const columns: FeedItem[][] = [[], []]
  const heights = [0, 0]

  items.forEach((item) => {
    const target = heights[0] <= heights[1] ? 0 : 1
    columns[target].push(item)
    heights[target] += item.coverHeight + 148 // 色块高度 + 文案区（rpx）
  })

  return (
    <View className='masonry'>
      {columns.map((column, index) => (
        <View className='masonry__col' key={index}>
          {column.map((item) => (
            <FeedCard key={item.id} item={item} variant='waterfall' onTap={onTap} />
          ))}
        </View>
      ))}
    </View>
  )
}

export default MasonryFeed
