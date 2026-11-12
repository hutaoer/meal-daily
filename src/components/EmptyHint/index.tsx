import React from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface Props {
  text: string
  subText?: string
}

const EmptyHint: React.FC<Props> = ({ text, subText }) => (
  <View className='empty-hint'>
    <Text className='empty-hint__text'>{text}</Text>
    {subText && <Text className='empty-hint__sub'>{subText}</Text>}
  </View>
)

export default EmptyHint
