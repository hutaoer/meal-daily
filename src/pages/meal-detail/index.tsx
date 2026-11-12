import React from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import ColorBlock from '../../components/ColorBlock'
import LikeButton from '../../components/LikeButton'
import SectionTitle from '../../components/SectionTitle'
import EmptyHint from '../../components/EmptyHint'
import { findContent, findDish } from '../../services/mock'
import { displayLikes, useLikes } from '../../store/useLikes'
import type { Dish } from '../../types/content'
import './index.scss'

const MealDetail: React.FC = () => {
  const router = Taro.useRouter()
  const id = router.params.id || ''

  useDidShow(() => useLikes.getState().sync())

  const likedContentIds = useLikes((s) => s.likedContentIds)
  const toggleContentLike = useLikes((s) => s.toggleContentLike)

  const content = findContent(id)
  const liked = likedContentIds.includes(id)
  const dishList = content
    ? content.dishIds.map(findDish).filter((item): item is Dish => Boolean(item))
    : []

  // 传入不存在的 id 时展示可返回的提示，不白屏（PRD §5.4）
  if (!content) {
    return (
      <View className='page detail-missing'>
        <EmptyHint text='内容不存在' subText='这条记录可能已被移除' />
        <View className='detail-missing__back' onClick={() => Taro.navigateBack()}>
          <Text>返回上一页</Text>
        </View>
      </View>
    )
  }

  return (
    <View className='page meal-detail'>
      {/* M5 封面色块 + 点赞胶囊 */}
      <View className='meal-detail__hero'>
        <ColorBlock colorKey={content.coverKey} imageUrl={content.coverImgUrl} height='440rpx' />
        {!content.coverImgUrl ? (
          <Text className='meal-detail__hero-note'>封面色块占位</Text>
        ) : null}
        <View className='meal-detail__like'>
          <LikeButton
            liked={liked}
            count={displayLikes(content.likeCount, liked)}
            variant='pill'
            onToggle={() => toggleContentLike(content.id)}
          />
        </View>
      </View>

      <View className='meal-detail__body'>
        {/* 标题区 */}
        <View className='meal-detail__head'>
          <Text className='kicker'>
            {content.date} · {content.mealType} · {content.weekday}
          </Text>
          <Text className='headline meal-detail__title'>{content.title}</Text>
          <Text className='meal-detail__subtitle'>{content.subtitle}</Text>
        </View>

        {/* 元信息条 */}
        <View className='meal-detail__meta-bar'>
          <Text className='meal-detail__meta-text'>
            {dishList.length} 道菜 · 约 {content.totalMinutes} 分钟 · {content.servings} 人份 · 家常
          </Text>
        </View>

        {/* 这顿饭小记 */}
        <View className='meal-detail__section'>
          <SectionTitle title='这顿饭' />
          {content.note.map((paragraph, index) => (
            <Text className='meal-detail__paragraph' key={index}>
              {paragraph}
            </Text>
          ))}
        </View>

        {/* 这一桌的菜 */}
        <View className='meal-detail__section'>
          <SectionTitle title='这一桌的菜' right={`${dishList.length} 道`} />
          <Text className='meal-detail__hint'>点击任意一道菜，进入菜品详情页</Text>
          {dishList.length > 0 ? (
            <View className='meal-detail__dishes'>
              {dishList.map((dish) => (
                <View
                  className='meal-detail__dish-row'
                  key={dish.id}
                  onClick={() => Taro.navigateTo({ url: `/pages/dish-detail/index?id=${dish.id}` })}
                >
                  <ColorBlock
                    colorKey={dish.coverKey}
                    imageUrl={dish.coverImgUrl}
                    width='104rpx'
                    height='104rpx'
                    radius='16rpx'
                  />
                  <View className='meal-detail__dish-info'>
                    <Text className='meal-detail__dish-name'>{dish.title}</Text>
                    <Text className='meal-detail__dish-desc ellipsis'>
                      {dish.description} · {dish.duration} 分钟 · {dish.difficulty}
                    </Text>
                  </View>
                  <Text className='meal-detail__chevron'>›</Text>
                </View>
              ))}
            </View>
          ) : (
            <EmptyHint text='这一餐还没有菜品' />
          )}
        </View>
      </View>

      <Text className='footer-note'>— 一餐由多道菜组成 · 点赞保存在本机 —</Text>
    </View>
  )
}

export default MealDetail
