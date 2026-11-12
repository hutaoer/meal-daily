import React, { useState } from 'react'
import { View, Text, Button, Image, Input } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
// 组件 import 顺序与其他页面保持一致，避免各页 CSS 抽取顺序冲突
import LikedRow from '../../components/LikedRow'
import SectionTitle from '../../components/SectionTitle'
import EmptyHint from '../../components/EmptyHint'
import { resolveLikedContents, resolveLikedDishes } from '../../services/mock'
import { useLikes } from '../../store/useLikes'
import './index.scss'

const Profile: React.FC = () => {
  useDidShow(() => useLikes.getState().sync())

  const likedContentIds = useLikes((s) => s.likedContentIds)
  const likedDishIds = useLikes((s) => s.likedDishIds)
  const profile = useLikes((s) => s.profile)
  const setProfile = useLikes((s) => s.setProfile)

  const [expanded, setExpanded] = useState({ dish: false, content: false })

  const likedDishes = resolveLikedDishes(likedDishIds)
  const likedContents = resolveLikedContents(likedContentIds)
  const shownDishes = expanded.dish ? likedDishes : likedDishes.slice(0, 2)
  const shownContents = expanded.content ? likedContents : likedContents.slice(0, 2)

  /** chooseAvatar 返回的是临时路径，必须 saveFile 到本地持久目录（PRD §5.6） */
  const handleChooseAvatar = (e: { detail: { avatarUrl: string } }) => {
    const tempFilePath = e.detail?.avatarUrl
    if (!tempFilePath) return
    const filePath = `${Taro.env.USER_DATA_PATH}/meal-avatar.png`
    Taro.getFileSystemManager().saveFile({
      tempFilePath,
      filePath,
      success: (res) => setProfile({ avatarUrl: res.savedFilePath }),
      fail: () => {
        setProfile({ avatarUrl: tempFilePath })
        Taro.showToast({ title: '头像可能在重启后需重新选择', icon: 'none' })
      },
    })
  }

  const handleNicknameBlur = (e: { detail: { value: string } }) => {
    const value = (e.detail?.value || '').trim()
    if (value !== profile.nickName) setProfile({ nickName: value })
  }

  const dishRight = likedDishes.length > 2
    ? (expanded.dish
      ? `共 ${likedDishes.length} 道 · 收起 ›`
      : `近 2 / ${likedDishes.length} 道 · 查看全部 ›`)
    : `共 ${likedDishes.length} 道`

  const contentRight = likedContents.length > 2
    ? (expanded.content
      ? `共 ${likedContents.length} 条 · 收起 ›`
      : `近 2 / ${likedContents.length} 条 · 查看全部 ›`)
    : `共 ${likedContents.length} 条`

  return (
    <View className='page page--tab profile'>
      {/* M4-1 个人信息卡 */}
      <View className='profile__card'>
        <View className='profile__identity'>
          <Button
            className='profile__avatar-btn'
            openType='chooseAvatar'
            onChooseAvatar={handleChooseAvatar}
          >
            {profile.avatarUrl ? (
              <Image className='profile__avatar-img' src={profile.avatarUrl} mode='aspectFill' />
            ) : (
              <View className='profile__avatar-default'>
                <View className='profile__avatar-head' />
                <View className='profile__avatar-body' />
              </View>
            )}
          </Button>
          <View className='profile__identity-info'>
            <Input
              className='profile__nickname'
              type={'nickname' as any}
              value={profile.nickName}
              placeholder='林小厨'
              placeholderClass='profile__nickname-placeholder'
              onBlur={handleNicknameBlur}
            />
            <Text className='profile__auth-hint'>点击头像更换 · 微信授权填写</Text>
          </View>
        </View>

        {/* M4-2 喜欢统计 */}
        <View className='profile__stats'>
          <View className='profile__stat'>
            <Text className='profile__stat-num'>{likedContentIds.length}</Text>
            <Text className='profile__stat-label'>喜欢的内容</Text>
          </View>
          <View className='profile__stat'>
            <Text className='profile__stat-num'>{likedDishIds.length}</Text>
            <Text className='profile__stat-label'>喜欢的菜品</Text>
          </View>
        </View>

        {/* M4-3 存储说明 */}
        <Text className='profile__card-note'>头像与昵称仅保存在本机，不上传服务器</Text>
      </View>

      {/* M4-4 喜欢的菜品 */}
      <View className='profile__section'>
        <SectionTitle
          title='喜欢的菜品'
          right={dishRight}
          onRight={() => setExpanded((prev) => ({ ...prev, dish: !prev.dish }))}
        />
        {likedDishes.length > 0 ? (
          <View className='profile__rows'>
            {shownDishes.map((dish) => (
              <LikedRow
                key={dish.id}
                item={dish}
                kind='dish'
                onTap={(id) => Taro.navigateTo({ url: `/pages/dish-detail/index?id=${id}` })}
              />
            ))}
          </View>
        ) : (
          <EmptyHint text='还没有喜欢的菜品' subText='去菜品列表点个爱心吧' />
        )}
      </View>

      {/* M4-5 喜欢的内容 */}
      <View className='profile__section'>
        <SectionTitle
          title='喜欢的内容'
          right={contentRight}
          onRight={() => setExpanded((prev) => ({ ...prev, content: !prev.content }))}
        />
        {likedContents.length > 0 ? (
          <View className='profile__rows'>
            {shownContents.map((content) => (
              <LikedRow
                key={content.id}
                item={content}
                kind='content'
                onTap={(id) => Taro.navigateTo({ url: `/pages/meal-detail/index?id=${id}` })}
              />
            ))}
          </View>
        ) : (
          <EmptyHint text='还没有喜欢的内容' subText='去内容列表点个爱心吧' />
        )}
      </View>

      <Text className='footer-note'>
        全部数据仅存本机（Storage）· 清除小程序数据后会重置
      </Text>
    </View>
  )
}

export default Profile
