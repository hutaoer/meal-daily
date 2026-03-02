import React from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import type { Recipe } from '../../types/recipe'
import { DIFFICULTY_MAP } from '../../utils/constants'
import { formatDuration, formatCount } from '../../utils/helpers'
import TagList from './TagList'
import './RecipeCard.scss'

interface Props {
  recipe: Recipe
  layout?: 'card' | 'list'
}

const RecipeCard: React.FC<Props> = ({ recipe, layout = 'card' }) => {
  const handleClick = () => {
    Taro.navigateTo({ url: `/pages/recipe-detail/index?id=${recipe.id}` })
  }

  return (
    <View className={`recipe-card recipe-card--${layout}`} onClick={handleClick}>
      <View className='recipe-card__img-wrap'>
        <Image
          className='recipe-card__img'
          src={recipe.coverImage}
          mode='aspectFill'
          lazyLoad
        />
        <View className='recipe-card__duration'>
          <Text className='recipe-card__duration-text'>⏱ {formatDuration(recipe.duration)}</Text>
        </View>
      </View>
      <View className='recipe-card__body'>
        <Text className='recipe-card__title ellipsis-2'>{recipe.title}</Text>
        <View className='recipe-card__meta'>
          <View className={`recipe-card__difficulty recipe-card__difficulty--${recipe.difficulty}`}>
            {DIFFICULTY_MAP[recipe.difficulty]}
          </View>
          <TagList tags={recipe.tags.slice(0, 2)} size='sm' />
        </View>
        <View className='recipe-card__footer'>
          <Text className='recipe-card__author text-sub text-sm'>{recipe.authorName}</Text>
          <View className='recipe-card__stats'>
            <Text className='recipe-card__stat text-sub text-sm'>❤️ {formatCount(recipe.likes)}</Text>
            <Text className='recipe-card__stat text-sub text-sm'>⭐ {formatCount(recipe.favorites)}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default RecipeCard
