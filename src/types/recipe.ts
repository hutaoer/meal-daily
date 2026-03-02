export type Difficulty = 'easy' | 'medium'

export type CategoryType = 'quick15' | 'solo' | 'lowcal' | 'homestyle' | 'seasonal'

export type TagType = 'quick' | 'lowcal' | 'tasty' | 'vegetarian' | 'solo' | 'homestyle' | 'spicy' | 'soup'

export interface Ingredient {
  name: string
  amount: string
}

export interface Step {
  index: number
  description: string
  image?: string
}

export interface Comment {
  id: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  createdAt: string
}

export interface Recipe {
  id: string
  title: string
  coverImage: string
  images: string[]
  difficulty: Difficulty
  duration: number         // 分钟
  category: CategoryType
  tags: TagType[]
  ingredients: Ingredient[]
  steps: Step[]
  likes: number
  favorites: number
  comments: Comment[]
  authorId: string
  authorName: string
  authorAvatar: string
  createdAt: string
  updatedAt: string
}

export interface RecipeFormData {
  title: string
  coverImage: string
  difficulty: Difficulty
  duration: number
  category: CategoryType
  tags: TagType[]
  ingredients: Ingredient[]
  steps: Step[]
}

export interface RecipeListParams {
  category?: CategoryType
  tags?: TagType[]
  difficulty?: Difficulty
  maxDuration?: number
  keyword?: string
  page?: number
  pageSize?: number
  sortBy?: 'hot' | 'latest'
}
