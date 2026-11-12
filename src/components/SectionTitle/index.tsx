import React from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface Props {
  title: string
  right?: string
  onRight?: () => void
}

const SectionTitle: React.FC<Props> = ({ title, right, onRight }) => (
  <View className='section-head'>
    <Text className='section-head__title section-title'>{title}</Text>
    {right && (
      <Text className='section-head__right' onClick={onRight}>
        {right}
      </Text>
    )}
  </View>
)

export default SectionTitle
