import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, ScrollView, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { getRecipes, getRandomRecipe } from '../../services/recipe.service'
import { CATEGORY_LIST, CATEGORY_EMOJI, PAGE_SIZE } from '../../utils/constants'
import RecipeCard from '../../components/business/RecipeCard'
import Empty from '../../components/common/Empty'
import type { Recipe } from '../../types/recipe'
import type { CategoryType } from '../../types/recipe'
import './index.scss'

const Index: React.FC = () => {
  const [hotRecipes, setHotRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [randomLoading, setRandomLoading] = useState(false)
  const [activeCategory, setActiveCategory] = useState<CategoryType | null>(null)

  const fetchRecipes = useCallback(async (p = 1, category: CategoryType | null = null, append = false) => {
    if (p === 1) setLoading(true)
    else setLoadingMore(true)
    try {
      const res = await getRecipes({ category: category || undefined, page: p, pageSize: PAGE_SIZE, sortBy: 'hot' })
      setHotRecipes((prev) => (append ? [...prev, ...res.list] : res.list))
      setHasMore(res.hasMore)
      setPage(p)
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }, [])

  useEffect(() => {
    fetchRecipes(1, null)
  }, [])

  const handleCategoryClick = (cat: CategoryType | null) => {
    setActiveCategory(cat)
    fetchRecipes(1, cat)
  }

  const handleLoadMore = () => {
    if (!hasMore || loadingMore) return
    fetchRecipes(page + 1, activeCategory, true)
  }

  const handleRandom = async () => {
    if (randomLoading) return
    setRandomLoading(true)
    try {
      const recipe = await getRandomRecipe()
      if (recipe) {
        Taro.navigateTo({ url: `/pages/recipe-detail/index?id=${recipe.id}` })
      }
    } finally {
      setRandomLoading(false)
    }
  }

  const handleSearch = () => {
    Taro.navigateTo({ url: '/pages/category/index?focus=1' })
  }

  return (
    <ScrollView
      className='index'
      scrollY
      onScrollToLower={handleLoadMore}
      lowerThreshold={100}
    >
      {/* 顶部：搜索 + 随机推荐 */}
      <View className='index__header'>
        <View className='index__search-bar' onClick={handleSearch}>
          <Text className='index__search-icon'>🔍</Text>
          <Text className='index__search-placeholder'>搜索菜名、食材、标签…</Text>
        </View>
        <View className={`index__random-btn ${randomLoading ? 'index__random-btn--loading' : ''}`} onClick={handleRandom}>
          <Text className='index__random-title'>🎲 今日吃什么？</Text>
          <Text className='index__random-sub'>{randomLoading ? '随机中…' : '点击随机推荐'}</Text>
        </View>
      </View>

      {/* 分类横滑 */}
      <View className='index__section'>
        <Text className='index__section-title'>主题分类</Text>
        <ScrollView className='index__categories' scrollX enableFlex>
          <View
            className={`index__cat-item ${activeCategory === null ? 'index__cat-item--active' : ''}`}
            onClick={() => handleCategoryClick(null)}
          >
            <Text className='index__cat-emoji'>🍽️</Text>
            <Text className='index__cat-label'>全部</Text>
          </View>
          {CATEGORY_LIST.map((cat) => (
            <View
              key={cat.key}
              className={`index__cat-item ${activeCategory === cat.key ? 'index__cat-item--active' : ''}`}
              onClick={() => handleCategoryClick(cat.key)}
            >
              <Text className='index__cat-emoji'>{CATEGORY_EMOJI[cat.key]}</Text>
              <Text className='index__cat-label'>{cat.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* 热门菜谱 */}
      <View className='index__section'>
        <Text className='index__section-title'>
          {activeCategory ? CATEGORY_LIST.find((c) => c.key === activeCategory)?.label : '热门推荐'} 🔥
        </Text>

        {loading ? (
          <View className='index__skeleton-list'>
            {[1, 2, 3].map((i) => (
              <View key={i} className='index__skeleton-card' />
            ))}
          </View>
        ) : hotRecipes.length === 0 ? (
          <Empty text='暂无菜谱' subText='换个分类试试吧' />
        ) : (
          <View className='index__recipe-grid'>
            {hotRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} layout='card' />
            ))}
          </View>
        )}

        {!loading && loadingMore && (
          <Text className='index__loading-more'>加载中…</Text>
        )}
        {!loading && !hasMore && hotRecipes.length > 0 && (
          <Text className='index__no-more'>— 已经到底啦 —</Text>
        )}
      </View>
    </ScrollView>
  )
}

export default Index
