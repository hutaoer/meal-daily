import React, { useState, useEffect } from 'react'
import { View, Text, Input, Textarea } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { publishRecipe, updateMyRecipe, getRecipeById } from '../../services/recipe.service'
import { useUserStore } from '../../store/useUserStore'
import { storage } from '../../utils/storage'
import { STORAGE_KEYS, CATEGORY_LIST, TAG_LIST, DIFFICULTY_MAP } from '../../utils/constants'
import type { RecipeFormData, Ingredient, Step, CategoryType, TagType, Difficulty } from '../../types/recipe'
import './index.scss'

const defaultForm = (): RecipeFormData => ({
  title: '',
  coverImage: '',
  difficulty: 'easy',
  duration: 15,
  category: 'quick15',
  tags: [],
  ingredients: [{ name: '', amount: '' }],
  steps: [{ index: 1, description: '' }],
})

const RecipeUpload: React.FC = () => {
  const router = useRouter()
  const editId = router.params.id
  const { userInfo, isLoggedIn } = useUserStore()
  const [form, setForm] = useState<RecipeFormData>(defaultForm())
  const [submitting, setSubmitting] = useState(false)

  // 加载草稿或编辑数据
  useEffect(() => {
    if (editId) {
      getRecipeById(editId).then((r) => {
        if (r) setForm(r)
      })
    } else {
      const draft = storage.get<RecipeFormData>(STORAGE_KEYS.DRAFTS)
      if (draft) setForm(draft)
    }
  }, [editId])

  const saveDraft = () => {
    storage.set(STORAGE_KEYS.DRAFTS, form)
    Taro.showToast({ title: '草稿已保存', icon: 'success' })
  }

  const addIngredient = () => {
    setForm((f) => ({ ...f, ingredients: [...f.ingredients, { name: '', amount: '' }] }))
  }

  const removeIngredient = (i: number) => {
    setForm((f) => ({ ...f, ingredients: f.ingredients.filter((_, idx) => idx !== i) }))
  }

  const setIngredient = (i: number, field: keyof Ingredient, val: string) => {
    setForm((f) => ({
      ...f,
      ingredients: f.ingredients.map((item, idx) => idx === i ? { ...item, [field]: val } : item),
    }))
  }

  const addStep = () => {
    setForm((f) => ({ ...f, steps: [...f.steps, { index: f.steps.length + 1, description: '' }] }))
  }

  const removeStep = (i: number) => {
    setForm((f) => ({
      ...f,
      steps: f.steps.filter((_, idx) => idx !== i).map((s, idx) => ({ ...s, index: idx + 1 })),
    }))
  }

  const setStep = (i: number, val: string) => {
    setForm((f) => ({
      ...f,
      steps: f.steps.map((s, idx) => idx === i ? { ...s, description: val } : s),
    }))
  }

  const toggleTag = (tag: TagType) => {
    setForm((f) => ({
      ...f,
      tags: f.tags.includes(tag) ? f.tags.filter((t) => t !== tag) : [...f.tags, tag],
    }))
  }

  const handleSubmit = async () => {
    if (!isLoggedIn || !userInfo) {
      Taro.showToast({ title: '请先登录', icon: 'none' })
      return
    }
    if (!form.title.trim()) {
      Taro.showToast({ title: '请填写菜名', icon: 'none' })
      return
    }
    if (form.ingredients.some((i) => !i.name.trim())) {
      Taro.showToast({ title: '请完善食材信息', icon: 'none' })
      return
    }
    if (form.steps.some((s) => !s.description.trim())) {
      Taro.showToast({ title: '请完善制作步骤', icon: 'none' })
      return
    }

    setSubmitting(true)
    try {
      if (editId) {
        await updateMyRecipe(editId, form)
        Taro.showToast({ title: '编辑成功', icon: 'success' })
      } else {
        await publishRecipe(form, userInfo.openId, userInfo.nickName, userInfo.avatarUrl)
        storage.remove(STORAGE_KEYS.DRAFTS)
        Taro.showToast({ title: '发布成功 🎉', icon: 'success' })
      }
      setTimeout(() => Taro.navigateBack(), 1500)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <View className='upload'>
      {/* 合规提示 */}
      <View className='upload__notice'>
        <Text className='upload__notice-text'>⚠️ 请发布合规、健康的菜谱内容，无需审核，发布后立即出现在平台</Text>
      </View>

      {/* 菜名 */}
      <View className='upload__section'>
        <Text className='upload__label'>菜名 <Text className='upload__required'>*</Text></Text>
        <Input
          className='upload__input'
          placeholder='请输入菜名，不超过20字'
          value={form.title}
          onInput={(e) => setForm((f) => ({ ...f, title: e.detail.value.slice(0, 20) }))}
          maxlength={20}
        />
      </View>

      {/* 难度 */}
      <View className='upload__section'>
        <Text className='upload__label'>难度</Text>
        <View className='upload__chips'>
          {(['easy', 'medium'] as Difficulty[]).map((d) => (
            <View
              key={d}
              className={`upload__chip ${form.difficulty === d ? 'upload__chip--active' : ''}`}
              onClick={() => setForm((f) => ({ ...f, difficulty: d }))}
            >
              {DIFFICULTY_MAP[d]}
            </View>
          ))}
        </View>
      </View>

      {/* 时长 */}
      <View className='upload__section'>
        <Text className='upload__label'>时长</Text>
        <View className='upload__chips'>
          {[10, 15, 20, 25, 30].map((min) => (
            <View
              key={min}
              className={`upload__chip ${form.duration === min ? 'upload__chip--active' : ''}`}
              onClick={() => setForm((f) => ({ ...f, duration: min }))}
            >
              {min}分钟
            </View>
          ))}
        </View>
      </View>

      {/* 分类 */}
      <View className='upload__section'>
        <Text className='upload__label'>分类</Text>
        <View className='upload__chips'>
          {CATEGORY_LIST.map((cat) => (
            <View
              key={cat.key}
              className={`upload__chip ${form.category === cat.key ? 'upload__chip--active' : ''}`}
              onClick={() => setForm((f) => ({ ...f, category: cat.key }))}
            >
              {cat.label}
            </View>
          ))}
        </View>
      </View>

      {/* 标签（可多选） */}
      <View className='upload__section'>
        <Text className='upload__label'>标签（可多选）</Text>
        <View className='upload__chips'>
          {TAG_LIST.map((tag) => (
            <View
              key={tag.key}
              className={`upload__chip ${form.tags.includes(tag.key) ? 'upload__chip--active' : ''}`}
              onClick={() => toggleTag(tag.key)}
            >
              {tag.label}
            </View>
          ))}
        </View>
      </View>

      {/* 食材清单 */}
      <View className='upload__section'>
        <View className='upload__section-header'>
          <Text className='upload__label'>食材清单 <Text className='upload__required'>*</Text></Text>
          <View className='upload__add-btn' onClick={addIngredient}>
            <Text className='upload__add-btn-text'>+ 添加食材</Text>
          </View>
        </View>
        {form.ingredients.map((item, i) => (
          <View key={i} className='upload__ingredient-row'>
            <Input
              className='upload__ingredient-name'
              placeholder='食材名'
              value={item.name}
              onInput={(e) => setIngredient(i, 'name', e.detail.value)}
            />
            <Input
              className='upload__ingredient-amount'
              placeholder='用量'
              value={item.amount}
              onInput={(e) => setIngredient(i, 'amount', e.detail.value)}
            />
            {form.ingredients.length > 1 && (
              <Text className='upload__remove-btn' onClick={() => removeIngredient(i)}>✕</Text>
            )}
          </View>
        ))}
      </View>

      {/* 制作步骤 */}
      <View className='upload__section'>
        <View className='upload__section-header'>
          <Text className='upload__label'>制作步骤 <Text className='upload__required'>*</Text></Text>
          <View className='upload__add-btn' onClick={addStep}>
            <Text className='upload__add-btn-text'>+ 添加步骤</Text>
          </View>
        </View>
        {form.steps.map((step, i) => (
          <View key={i} className='upload__step-row'>
            <View className='upload__step-num'>
              <Text className='upload__step-num-text'>{step.index}</Text>
            </View>
            <Textarea
              className='upload__step-textarea'
              placeholder={`第${step.index}步做什么…`}
              value={step.description}
              onInput={(e) => setStep(i, e.detail.value)}
              autoHeight
              maxlength={200}
            />
            {form.steps.length > 1 && (
              <Text className='upload__remove-btn' onClick={() => removeStep(i)}>✕</Text>
            )}
          </View>
        ))}
      </View>

      {/* 操作按钮 */}
      <View className='upload__actions'>
        <View className='upload__draft-btn' onClick={saveDraft}>
          <Text className='upload__draft-text'>保存草稿</Text>
        </View>
        <View
          className={`upload__submit-btn ${submitting ? 'upload__submit-btn--loading' : ''}`}
          onClick={handleSubmit}
        >
          <Text className='upload__submit-text'>
            {submitting ? '发布中…' : editId ? '保存修改' : '🚀 立即发布'}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default RecipeUpload
