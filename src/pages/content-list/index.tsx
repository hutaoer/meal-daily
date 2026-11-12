import React from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import ContentCard from '../../components/ContentCard'
import EmptyHint from '../../components/EmptyHint'
import { contents, sortedContents } from '../../services/mock'
import { displayLikes, useLikes } from '../../store/useLikes'
import type { ContentItem } from '../../types/content'
import './index.scss'

const ContentList: React.FC = () => {
  // 切回本 Tab 时重读 Storage，保证与详情页点赞状态一致
  useDidShow(() => useLikes.getState().sync())

  const likedContentIds = useLikes((s) => s.likedContentIds)
  const toggleContentLike = useLikes((s) => s.toggleContentLike)
  const list = sortedContents()

  const handleTap = (item: ContentItem) => {
    Taro.navigateTo({ url: `/pages/meal-detail/index?id=${item.id}` })
  }

  return (
    <View className='page page--tab content-list'>
      {/* M2-1 页头 */}
      <View className='content-list__header'>
        <Text className='kicker'>按时间记录 · 每餐一记</Text>
        <Text className='headline content-list__headline'>全部内容</Text>
        <Text className='content-list__desc'>
          id 由日期生成，如 202611081 = 2026.11.08 第 1 条
        </Text>
        <Text className='meta content-list__count'>
          共 {contents.length} 条 · 按时间倒序
        </Text>
      </View>

      {/* M2-2 点赞提示 */}
      <Text className='content-list__hint'>点右下角爱心即可喜欢 · 状态保存在本机</Text>

      {/* M2-3 内容卡列表 */}
      {list.length > 0 ? (
        <View className='content-list__cards'>
          {list.map((item) => {
            const liked = likedContentIds.includes(item.id)
            return (
              <ContentCard
                key={item.id}
                item={item}
                liked={liked}
                count={displayLikes(item.likeCount, liked)}
                onTap={handleTap}
                onLike={(target) => toggleContentLike(target.id)}
              />
            )
          })}
        </View>
      ) : (
        <EmptyHint text='还没有内容记录' />
      )}

      <Text className='footer-note'>— 向下滚动查看更多 · 数据来自本地 —</Text>
    </View>
  )
}

export default ContentList
