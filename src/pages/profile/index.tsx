import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useUserStore } from '../../store/useUserStore'
import { useRecipeStore } from '../../store/useRecipeStore'
import { getMyRecipes, getRecipeById } from '../../services/recipe.service'
import RecipeCard from '../../components/business/RecipeCard'
import Empty from '../../components/common/Empty'
import type { Recipe } from '../../types/recipe'
import './index.scss'

type TabKey = 'upload' | 'favorite'

const Profile: React.FC = () => {
  const { userInfo, isLoggedIn, login, logout, loading } = useUserStore()
  const { favorites } = useRecipeStore()
  const [activeTab, setActiveTab] = useState<TabKey>('upload')
  const [myRecipes, setMyRecipes] = useState<Recipe[]>([])
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([])
  const [dataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    if (!isLoggedIn || !userInfo) return
    setDataLoading(true)
    getMyRecipes(userInfo.openId).then((list) => {
      setMyRecipes(list)
      setDataLoading(false)
    })
  }, [isLoggedIn, userInfo])

  useEffect(() => {
    if (!isLoggedIn || favorites.length === 0) {
      setFavoriteRecipes([])
      return
    }
    Promise.all(favorites.map((id) => getRecipeById(id))).then((list) => {
      setFavoriteRecipes(list.filter(Boolean) as Recipe[])
    })
  }, [isLoggedIn, favorites])

  const handleLogin = () => {
    login()
  }

  const handleLogout = () => {
    Taro.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: ({ confirm }) => {
        if (confirm) logout()
      },
    })
  }

  const handleUpload = () => {
    if (!isLoggedIn) {
      Taro.showToast({ title: '请先登录', icon: 'none' })
      return
    }
    Taro.navigateTo({ url: '/pages/recipe-upload/index' })
  }

  return (
    <ScrollView className='profile' scrollY>
      {/* 个人信息头部 */}
      <View className='profile__header'>
        <View className='profile__avatar-wrap'>
          <Image
            className='profile__avatar'
            src={userInfo?.avatarUrl || 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=default'}
            mode='aspectFill'
          />
        </View>
        {isLoggedIn ? (
          <View className='profile__user-info'>
            <Text className='profile__nickname'>{userInfo?.nickName}</Text>
            <Text className='profile__sub'>欢迎来到每日带饭 🍱</Text>
          </View>
        ) : (
          <View className='profile__login-area'>
            <Text className='profile__login-hint'>登录后查看更多内容</Text>
            <View className='profile__login-btn' onClick={handleLogin}>
              <Text className='profile__login-btn-text'>{loading ? '登录中…' : '微信快捷登录'}</Text>
            </View>
          </View>
        )}
      </View>

      {/* 快捷功能 */}
      <View className='profile__quick-actions'>
        <View className='profile__quick-item' onClick={handleUpload}>
          <Text className='profile__quick-icon'>📤</Text>
          <Text className='profile__quick-label'>上传菜谱</Text>
        </View>
        <View className='profile__quick-item' onClick={() => setActiveTab('favorite')}>
          <Text className='profile__quick-icon'>⭐</Text>
          <Text className='profile__quick-label'>我的收藏</Text>
          {favorites.length > 0 && <Text className='profile__badge'>{favorites.length}</Text>}
        </View>
        <View className='profile__quick-item' onClick={() => setActiveTab('upload')}>
          <Text className='profile__quick-icon'>📝</Text>
          <Text className='profile__quick-label'>我的发布</Text>
          {myRecipes.length > 0 && <Text className='profile__badge'>{myRecipes.length}</Text>}
        </View>
      </View>

      {/* Tab 切换 */}
      {isLoggedIn && (
        <View className='profile__tabs'>
          <View
            className={`profile__tab ${activeTab === 'upload' ? 'profile__tab--active' : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            我的发布 ({myRecipes.length})
          </View>
          <View
            className={`profile__tab ${activeTab === 'favorite' ? 'profile__tab--active' : ''}`}
            onClick={() => setActiveTab('favorite')}
          >
            我的收藏 ({favoriteRecipes.length})
          </View>
        </View>
      )}

      {/* 内容区域 */}
      {isLoggedIn ? (
        <View className='profile__content'>
          {dataLoading ? (
            <Text className='profile__loading'>加载中…</Text>
          ) : activeTab === 'upload' ? (
            myRecipes.length === 0 ? (
              <Empty icon='📝' text='还没有发布菜谱' subText='点击「上传菜谱」分享你的拿手菜' />
            ) : (
              <View className='profile__recipe-grid'>
                {myRecipes.map((r) => <RecipeCard key={r.id} recipe={r} layout='card' />)}
              </View>
            )
          ) : (
            favoriteRecipes.length === 0 ? (
              <Empty icon='⭐' text='还没有收藏菜谱' subText='去首页找找喜欢的菜谱吧' />
            ) : (
              <View className='profile__recipe-grid'>
                {favoriteRecipes.map((r) => <RecipeCard key={r.id} recipe={r} layout='card' />)}
              </View>
            )
          )}
        </View>
      ) : (
        <Empty icon='🔐' text='登录后查看更多内容' />
      )}

      {/* 退出登录 */}
      {isLoggedIn && (
        <View className='profile__footer'>
          <View className='profile__logout-btn' onClick={handleLogout}>
            <Text className='profile__logout-text'>退出登录</Text>
          </View>
        </View>
      )}
    </ScrollView>
  )
}

export default Profile
