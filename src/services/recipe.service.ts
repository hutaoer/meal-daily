import { mockRecipes } from './mock/recipes'
import { storage } from '../utils/storage'
import { STORAGE_KEYS } from '../utils/constants'
import { genId } from '../utils/helpers'
import type { Recipe, RecipeFormData, RecipeListParams } from '../types/recipe'
import type { PageResult } from '../types/common'

/** 模拟网络延迟 */
const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms))

/** 获取合并后的菜谱列表（Mock + 用户上传）*/
const getAllRecipes = (): Recipe[] => {
  const myRecipes = storage.get<Recipe[]>(STORAGE_KEYS.MY_RECIPES) || []
  return [...myRecipes, ...mockRecipes]
}

/** 获取菜谱列表（支持分类、标签、时长、难度、关键词、分页） */
export const getRecipes = async (params: RecipeListParams = {}): Promise<PageResult<Recipe>> => {
  await delay()
  const { category, tags, difficulty, maxDuration, keyword, page = 1, pageSize = 10, sortBy = 'hot' } = params

  let list = getAllRecipes()

  if (category) list = list.filter((r) => r.category === category)
  if (tags && tags.length > 0) list = list.filter((r) => tags.some((t) => r.tags.includes(t)))
  if (difficulty) list = list.filter((r) => r.difficulty === difficulty)
  if (maxDuration) list = list.filter((r) => r.duration <= maxDuration)
  if (keyword) {
    const kw = keyword.toLowerCase()
    list = list.filter(
      (r) =>
        r.title.toLowerCase().includes(kw) ||
        r.ingredients.some((i) => i.name.toLowerCase().includes(kw)) ||
        r.tags.some((t) => t.toLowerCase().includes(kw)),
    )
  }

  if (sortBy === 'hot') list = [...list].sort((a, b) => b.likes + b.favorites - (a.likes + a.favorites))
  else list = [...list].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const total = list.length
  const start = (page - 1) * pageSize
  const end = start + pageSize
  return { list: list.slice(start, end), total, page, pageSize, hasMore: end < total }
}

/** 获取菜谱详情 */
export const getRecipeById = async (id: string): Promise<Recipe | null> => {
  await delay(200)
  return getAllRecipes().find((r) => r.id === id) || null
}

/** 随机获取 1 条简单菜谱 */
export const getRandomRecipe = async (): Promise<Recipe> => {
  await delay(150)
  const list = getAllRecipes().filter((r) => r.difficulty === 'easy' && r.duration <= 20)
  return list[Math.floor(Math.random() * list.length)]
}

/** 发布菜谱（存入本地） */
export const publishRecipe = async (form: RecipeFormData, authorId: string, authorName: string, authorAvatar: string): Promise<Recipe> => {
  await delay(400)
  const newRecipe: Recipe = {
    ...form,
    id: genId(),
    comments: [],
    likes: 0,
    favorites: 0,
    authorId,
    authorName,
    authorAvatar,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  const myRecipes = storage.get<Recipe[]>(STORAGE_KEYS.MY_RECIPES) || []
  storage.set(STORAGE_KEYS.MY_RECIPES, [newRecipe, ...myRecipes])
  return newRecipe
}

/** 编辑我的菜谱 */
export const updateMyRecipe = async (id: string, form: Partial<RecipeFormData>): Promise<Recipe> => {
  await delay(300)
  const myRecipes = storage.get<Recipe[]>(STORAGE_KEYS.MY_RECIPES) || []
  const updated = myRecipes.map((r) => (r.id === id ? { ...r, ...form, updatedAt: new Date().toISOString() } : r))
  storage.set(STORAGE_KEYS.MY_RECIPES, updated)
  return updated.find((r) => r.id === id)!
}

/** 删除我的菜谱 */
export const deleteMyRecipe = async (id: string): Promise<void> => {
  await delay(200)
  const myRecipes = storage.get<Recipe[]>(STORAGE_KEYS.MY_RECIPES) || []
  storage.set(STORAGE_KEYS.MY_RECIPES, myRecipes.filter((r) => r.id !== id))
}

/** 获取我的上传菜谱 */
export const getMyRecipes = async (authorId: string): Promise<Recipe[]> => {
  await delay(200)
  const myRecipes = storage.get<Recipe[]>(STORAGE_KEYS.MY_RECIPES) || []
  return myRecipes.filter((r) => r.authorId === authorId)
}

/** 获取相关推荐（同分类，排除当前） */
export const getRelatedRecipes = async (recipe: Recipe): Promise<Recipe[]> => {
  await delay(150)
  return getAllRecipes()
    .filter((r) => r.id !== recipe.id && r.category === recipe.category)
    .slice(0, 4)
}
