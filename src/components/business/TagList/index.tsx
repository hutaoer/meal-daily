import React from 'react'
import { View, Text } from '@tarojs/components'
import type { TagType } from '../../types/recipe'
import { TAG_MAP } from '../../utils/constants'
import './TagList.scss'

interface Props {
  tags: TagType[]
  size?: 'sm' | 'md'
  selectable?: boolean
  selectedTags?: TagType[]
  onToggle?: (tag: TagType) => void
}

const TAG_COLORS: Record<string, { bg: string; color: string }> = {
  quick:      { bg: '#FFF3E0', color: '#E65100' },
  lowcal:     { bg: '#E8F5E9', color: '#2E7D32' },
  tasty:      { bg: '#FCE4EC', color: '#C62828' },
  vegetarian: { bg: '#E8F5E9', color: '#1B5E20' },
  solo:       { bg: '#E3F2FD', color: '#0D47A1' },
  homestyle:  { bg: '#FFF9C4', color: '#F57F17' },
  spicy:      { bg: '#FFEBEE', color: '#B71C1C' },
  soup:       { bg: '#E8EAF6', color: '#283593' },
}

const TagList: React.FC<Props> = ({ tags, size = 'md', selectable = false, selectedTags = [], onToggle }) => {
  return (
    <View className={`tag-list tag-list--${size}`}>
      {tags.map((tag) => {
        const style = TAG_COLORS[tag] || { bg: '#F5F5F5', color: '#666' }
        const isSelected = selectedTags.includes(tag)
        return (
          <Text
            key={tag}
            className={`tag-list__item ${isSelected ? 'tag-list__item--selected' : ''}`}
            style={{ backgroundColor: style.bg, color: style.color }}
            onClick={() => selectable && onToggle?.(tag)}
          >
            {TAG_MAP[tag] || tag}
          </Text>
        )
      })}
    </View>
  )
}

export default TagList
