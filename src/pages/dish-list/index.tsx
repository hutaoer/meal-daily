import React from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import DishCard from '../../components/DishCard'
import EmptyHint from '../../components/EmptyHint'
import { dishes } from '../../services/mock'
import { displayLikes, useLikes } from '../../store/useLikes'
import type { Dish } from '../../types/content'
import './index.scss'

const DishList: React.FC = () => {
  useDidShow(() => useLikes.getState().sync())

  const likedDishIds = useLikes((s) => s.likedDishIds)
  const toggleDishLike = useLikes((s) => s.toggleDishLike)

  // 等高清单一双列网格：按序号奇偶分列
  const columns: Dish[][] = [[], []]
  dishes.forEach((dish, index) => columns[index % 2].push(dish))

  const handleTap = (dish: Dish) => {
    Taro.navigateTo({ url: `/pages/dish-detail/index?id=${dish.id}` })
  }

  const renderCard = (dish: Dish) => {
    const liked = likedDishIds.includes(dish.id)
    return (
      <DishCard
        key={dish.id}
        dish={dish}
        liked={liked}
        count={displayLikes(dish.likeCount, liked)}
        onTap={handleTap}
        onLike={(target) => toggleDishLike(target.id)}
      />
    )
  }

  return (
    <View className='page page--tab dish-list'>
      {/* M3-1 页头 */}
      <View className='dish-list__header'>
        <Text className='kicker'>一道一味 · 单独成卡</Text>
        <Text className='headline dish-list__headline'>全部菜品</Text>
        <Text className='dish-list__desc'>
          每道菜有独立 id（d001…）、封面色块与一句话描述
        </Text>
        <Text className='meta dish-list__count'>共 {dishes.length} 道 · 点击卡片进入菜品详情</Text>
      </View>

      {/* M3-2 点赞提示 */}
      <Text className='dish-list__hint'>点封面右上角爱心即可喜欢 · 状态保存在本机</Text>

      {/* M3-3 双列菜品网格 */}
      {dishes.length > 0 ? (
        <View className='dish-list__grid'>
          {columns.map((column, index) => (
            <View className='dish-list__col' key={index}>
              {column.map(renderCard)}
            </View>
          ))}
        </View>
      ) : (
        <EmptyHint text='还没有菜品' />
      )}

      <Text className='footer-note'>— 向下滚动查看更多 · 数据来自本地 —</Text>
    </View>
  )
}

export default DishList
