import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import './Empty.scss'

interface Props {
  icon?: string
  text?: string
  subText?: string
}

const Empty: React.FC<Props> = ({ icon = '🍱', text = '暂无内容', subText }) => {
  return (
    <View className='empty'>
      <Text className='empty__icon'>{icon}</Text>
      <Text className='empty__text'>{text}</Text>
      {subText && <Text className='empty__sub'>{subText}</Text>}
    </View>
  )
}

export default Empty
