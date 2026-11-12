import React from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import ColorBlock from '../../components/ColorBlock'
import LikeButton from '../../components/LikeButton'
import SectionTitle from '../../components/SectionTitle'
import EmptyHint from '../../components/EmptyHint'
import { findDish } from '../../services/mock'
import { displayLikes, useLikes } from '../../store/useLikes'
import './index.scss'

const DishDetail: React.FC = () => {
  const router = Taro.useRouter()
  const id = router.params.id || ''

  useDidShow(() => useLikes.getState().sync())

  const likedDishIds = useLikes((s) => s.likedDishIds)
  const toggleDishLike = useLikes((s) => s.toggleDishLike)

  const dish = findDish(id)
  const liked = likedDishIds.includes(id)

  if (!dish) {
    return (
      <View className='page detail-missing'>
        <EmptyHint text='内容不存在' subText='这道菜可能已被移除' />
        <View className='detail-missing__back' onClick={() => Taro.navigateBack()}>
          <Text>返回上一页</Text>
        </View>
      </View>
    )
  }

  return (
    <View className='page dish-detail'>
      {/* M6 封面色块 + 点赞胶囊 */}
      <View className='dish-detail__hero'>
        <ColorBlock colorKey={dish.coverKey} imageUrl={dish.coverImgUrl} height='500rpx' />
        {!dish.coverImgUrl ? (
          <Text className='dish-detail__hero-note'>封面色块占位</Text>
        ) : null}
        <View className='dish-detail__like'>
          <LikeButton
            liked={liked}
            count={displayLikes(dish.likeCount, liked)}
            variant='pill'
            onToggle={() => toggleDishLike(dish.id)}
          />
        </View>
      </View>

      <View className='dish-detail__body'>
        {/* 标题区 */}
        <View className='dish-detail__head'>
          <Text className='kicker'>菜品 · {dish.category}</Text>
          <Text className='headline dish-detail__title'>{dish.title}</Text>
          <Text className='dish-detail__subtitle'>{dish.subtitle || dish.description}</Text>
        </View>

        {/* 元信息条 */}
        <View className='dish-detail__meta-bar'>
          <Text className='dish-detail__meta-text'>
            {dish.duration} 分钟 · {dish.difficulty} · {dish.servings} 人份 · {dish.date}
          </Text>
        </View>

        {/* 标签 */}
        <View className='dish-detail__tags'>
          {dish.tags.map((tag) => (
            <View className='dish-detail__tag' key={tag}>
              <Text className='dish-detail__tag-text'>{tag}</Text>
            </View>
          ))}
        </View>

        {/* 图集 */}
        <View className='dish-detail__section'>
          <SectionTitle title='菜品图集' />
          <View className='dish-detail__gallery'>
            {dish.images.map((key, index) => (
              <ColorBlock key={index} colorKey={key} width='206rpx' height='160rpx' radius='20rpx' />
            ))}
          </View>
        </View>

        {/* 详细介绍 */}
        <View className='dish-detail__section'>
          <SectionTitle title='关于这道菜' />
          {dish.story.map((paragraph, index) => (
            <Text className='dish-detail__paragraph' key={index}>
              {paragraph}
            </Text>
          ))}
        </View>

        {/* 食材清单 */}
        <View className='dish-detail__section'>
          <SectionTitle title='食材清单' />
          <View className='dish-detail__ingredients'>
            {dish.ingredients.map((ing) => (
              <View className='dish-detail__ing-row' key={ing.name}>
                <Text className='dish-detail__ing-name'>{ing.name}</Text>
                <Text className='dish-detail__ing-amount'>{ing.amount}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 做法步骤 */}
        <View className='dish-detail__section'>
          <SectionTitle title='做法步骤' right={`${dish.steps.length} 步`} />
          <View className='dish-detail__steps'>
            {dish.steps.map((step) => (
              <View className='dish-detail__step' key={step.index}>
                <Text className='dish-detail__step-num'>
                  {String(step.index).padStart(2, '0')}
                </Text>
                <Text className='dish-detail__step-desc'>{step.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <Text className='footer-note'>— 林小厨家常食记 · 点赞保存在本机 —</Text>
    </View>
  )
}

export default DishDetail
