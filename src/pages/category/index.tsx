import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, Input, ScrollView } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'
import { getRecipes } from '../../services/recipe.service'
import { TAG_LIST, CATEGORY_LIST, DIFFICULTY_MAP, DURATION_OPTIONS, PAGE_SIZE } from '../../utils/constants'
import RecipeCard from '../../components/business/RecipeCard'
import Empty from '../../components/common/Empty'
import type { Recipe, TagType, CategoryType, Difficulty } from '../../types/recipe'
import './index.scss'

const Category: React.FC = () => {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')
  const [selectedTags, setSelectedTags] = useState<TagType[]>([])
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null)
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null)
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const search = useCallback(async (p = 1, append = false) => {
    setLoading(true)
    try {
      const res = await getRecipes({
        keyword: keyword.trim() || undefined,
        tags: selectedTags.length ? selectedTags : undefined,
        category: selectedCategory || undefined,
        difficulty: selectedDifficulty || undefined,
        maxDuration: selectedDuration || undefined,
        page: p,
        pageSize: PAGE_SIZE,
        sortBy: 'hot',
      })
      setRecipes((prev) => (append ? [...prev, ...res.list] : res.list))
      setHasMore(res.hasMore)
      setPage(p)
    } finally {
      setLoading(false)
    }
  }, [keyword, selectedTags, selectedCategory, selectedDifficulty, selectedDuration])

  useEffect(() => {
    search(1)
  }, [selectedTags, selectedCategory, selectedDifficulty, selectedDuration])

  const handleTagToggle = (tag: TagType) => {
    setSelectedTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag])
  }

  const handleSearch = () => {
    search(1)
  }

  const handleLoadMore = () => {
    if (!hasMore || loading) return
    search(page + 1, true)
  }

  return (
    <View className='category'>
      {/* 搜索框 */}
      <View className='category__search'>
        <View className='category__search-box'>
          <Text className='category__search-icon'>🔍</Text>
          <Input
            className='category__search-input'
            placeholder='搜索菜名、食材、标签…'
            value={keyword}
            onInput={(e) => setKeyword(e.detail.value)}
            onConfirm={handleSearch}
            confirmType='search'
          />
          {keyword ? (
            <Text className='category__search-clear' onClick={() => { setKeyword(''); search(1) }}>✕</Text>
          ) : null}
        </View>
      </View>

      <ScrollView className='category__body' scrollY onScrollToLower={handleLoadMore} lowerThreshold={100}>
        {/* 分类筛选 */}
        <View className='category__filter-block'>
          <Text className='category__filter-label'>分类</Text>
          <View className='category__filter-chips'>
            <View
              className={`category__chip ${selectedCategory === null ? 'category__chip--active' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >全部</View>
            {CATEGORY_LIST.map((cat) => (
              <View
                key={cat.key}
                className={`category__chip ${selectedCategory === cat.key ? 'category__chip--active' : ''}`}
                onClick={() => setSelectedCategory(cat.key === selectedCategory ? null : cat.key)}
              >
                {cat.label}
              </View>
            ))}
          </View>
        </View>

        {/* 时长筛选 */}
        <View className='category__filter-block'>
          <Text className='category__filter-label'>时长</Text>
          <View className='category__filter-chips'>
            {DURATION_OPTIONS.map((opt) => (
              <View
                key={opt.value}
                className={`category__chip ${selectedDuration === opt.value ? 'category__chip--active' : ''}`}
                onClick={() => setSelectedDuration(selectedDuration === opt.value ? null : opt.value)}
              >
                {opt.label}
              </View>
            ))}
          </View>
        </View>

        {/* 难度筛选 */}
        <View className='category__filter-block'>
          <Text className='category__filter-label'>难度</Text>
          <View className='category__filter-chips'>
            {(['easy', 'medium'] as Difficulty[]).map((d) => (
              <View
                key={d}
                className={`category__chip ${selectedDifficulty === d ? 'category__chip--active' : ''}`}
                onClick={() => setSelectedDifficulty(selectedDifficulty === d ? null : d)}
              >
                {DIFFICULTY_MAP[d]}
              </View>
            ))}
          </View>
        </View>

        {/* 标签筛选 */}
        <View className='category__filter-block'>
          <Text className='category__filter-label'>标签</Text>
          <View className='category__filter-chips'>
            {TAG_LIST.map((tag) => (
              <View
                key={tag.key}
                className={`category__chip ${selectedTags.includes(tag.key) ? 'category__chip--active' : ''}`}
                onClick={() => handleTagToggle(tag.key)}
              >
                {tag.label}
              </View>
            ))}
          </View>
        </View>

        {/* 结果列表 */}
        <View className='category__results'>
          <Text className='category__results-count'>
            {loading ? '搜索中…' : `找到 ${recipes.length} 款菜谱`}
          </Text>
          {!loading && recipes.length === 0 ? (
            <Empty text='没有找到相关菜谱' subText='换个关键词或条件试试' />
          ) : (
            <View className='category__recipe-grid'>
              {recipes.map((r) => (
                <RecipeCard key={r.id} recipe={r} layout='card' />
              ))}
            </View>
          )}
          {!loading && !hasMore && recipes.length > 0 && (
            <Text className='category__no-more'>— 已经到底啦 —</Text>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default Category
