import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { getRecipeById, getRelatedRecipes } from '../../services/recipe.service'
import { useRecipeStore } from '../../store/useRecipeStore'
import { DIFFICULTY_MAP } from '../../utils/constants'
import { formatDuration, formatCount } from '../../utils/helpers'
import TagList from '../../components/business/TagList'
import RecipeCard from '../../components/business/RecipeCard'
import type { Recipe } from '../../types/recipe'
import './index.scss'

const RecipeDetail: React.FC = () => {
  const router = useRouter()
  const id = router.params.id || ''
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [related, setRelated] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)

  const { isFavorited, isLiked, toggleFavorite, toggleLike } = useRecipeStore()
  const favorited = isFavorited(id)
  const liked = isLiked(id)

  useEffect(() => {
    if (!id) return
    const load = async () => {
      setLoading(true)
      const r = await getRecipeById(id)
      setRecipe(r)
      if (r) {
        const rel = await getRelatedRecipes(r)
        setRelated(rel)
      }
      setLoading(false)
    }
    load()
  }, [id])

  const handleShare = () => {
    Taro.showShareMenu({ withShareTicket: true })
    Taro.showActionSheet({
      itemList: ['分享给好友', '分享到朋友圈', '复制链接'],
      success: ({ tapIndex }) => {
        if (tapIndex === 2) {
          Taro.setClipboardData({ data: `来看看这道菜谱：${recipe?.title}` })
        }
      },
    })
  }

  if (loading) {
    return (
      <View className='detail__loading'>
        <View className='detail__skeleton-img' />
        <View className='detail__skeleton-body'>
          <View className='detail__skeleton-line detail__skeleton-line--title' />
          <View className='detail__skeleton-line' />
          <View className='detail__skeleton-line' />
        </View>
      </View>
    )
  }

  if (!recipe) {
    return (
      <View className='detail__error'>
        <Text className='detail__error-text'>😢 菜谱不存在</Text>
      </View>
    )
  }

  return (
    <View className='detail'>
      <ScrollView scrollY className='detail__scroll'>
        {/* 封面图 */}
        <Image className='detail__cover' src={recipe.coverImage} mode='aspectFill' />

        {/* 基础信息 */}
        <View className='detail__info'>
          <Text className='detail__title'>{recipe.title}</Text>
          <View className='detail__meta'>
            <View className={`detail__difficulty detail__difficulty--${recipe.difficulty}`}>
              {DIFFICULTY_MAP[recipe.difficulty]}
            </View>
            <View className='detail__duration-badge'>
              ⏱ {formatDuration(recipe.duration)}
            </View>
          </View>
          <TagList tags={recipe.tags} size='md' />

          {/* 作者 */}
          <View className='detail__author'>
            <Image className='detail__author-avatar' src={recipe.authorAvatar} mode='aspectFill' />
            <Text className='detail__author-name'>{recipe.authorName}</Text>
          </View>
        </View>

        {/* 分割线 */}
        <View className='detail__divider' />

        {/* 食材清单 */}
        <View className='detail__section'>
          <Text className='detail__section-title'>🥕 食材清单</Text>
          <View className='detail__ingredients'>
            {recipe.ingredients.map((item, i) => (
              <View key={i} className='detail__ingredient-row'>
                <Text className='detail__ingredient-name'>{item.name}</Text>
                <Text className='detail__ingredient-amount'>{item.amount}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className='detail__divider' />

        {/* 制作步骤 */}
        <View className='detail__section'>
          <Text className='detail__section-title'>📋 制作步骤</Text>
          {recipe.steps.map((step) => (
            <View key={step.index} className='detail__step'>
              <View className='detail__step-num'>
                <Text className='detail__step-num-text'>{step.index}</Text>
              </View>
              <View className='detail__step-body'>
                <Text className='detail__step-desc'>{step.description}</Text>
                {step.image && (
                  <Image className='detail__step-img' src={step.image} mode='widthFix' />
                )}
              </View>
            </View>
          ))}
        </View>

        {/* 相关推荐 */}
        {related.length > 0 && (
          <>
            <View className='detail__divider' />
            <View className='detail__section'>
              <Text className='detail__section-title'>🍴 你可能还喜欢</Text>
              <View className='detail__related-list'>
                {related.map((r) => (
                  <View key={r.id} className='detail__related-item'>
                    <RecipeCard recipe={r} layout='list' />
                  </View>
                ))}
              </View>
            </View>
          </>
        )}

        {/* 底部占位，防止被操作栏遮住 */}
        <View className='detail__bottom-spacer' />
      </ScrollView>

      {/* 底部操作栏 */}
      <View className='detail__action-bar'>
        <View
          className={`detail__action-btn ${liked ? 'detail__action-btn--active' : ''}`}
          onClick={() => toggleLike(recipe.id)}
        >
          <Text className='detail__action-icon'>{liked ? '❤️' : '🤍'}</Text>
          <Text className='detail__action-label'>{formatCount(recipe.likes + (liked ? 1 : 0))}</Text>
        </View>
        <View
          className={`detail__action-btn ${favorited ? 'detail__action-btn--active' : ''}`}
          onClick={() => toggleFavorite(recipe.id)}
        >
          <Text className='detail__action-icon'>{favorited ? '⭐' : '☆'}</Text>
          <Text className='detail__action-label'>{formatCount(recipe.favorites + (favorited ? 1 : 0))}</Text>
        </View>
        <View className='detail__action-btn' onClick={handleShare}>
          <Text className='detail__action-icon'>📤</Text>
          <Text className='detail__action-label'>分享</Text>
        </View>
      </View>
    </View>
  )
}

export default RecipeDetail
