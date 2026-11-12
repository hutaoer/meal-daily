import React from 'react'
import { View, Image } from '@tarojs/components'
import { gradientOf } from '../../services/mock/covers'
import type { ColorKey } from '../../types/content'
import './index.scss'

interface Props {
  colorKey: ColorKey
  imageUrl?: string
  width?: string
  height?: string
  radius?: string
  className?: string
}

/**
 * 封面占位：coverImgUrl 为空时渲染 CSS 渐变色块；
 * 填了 https 线上链接则用图片铺满（aspectFill），页面与数据层无需改动。
 */
const ColorBlock: React.FC<Props> = ({
  colorKey,
  imageUrl = '',
  width = '100%',
  height = '100%',
  radius = '0rpx',
  className = '',
}) => (
  <View
    className={`color-block ${className}`}
    style={{
      background: imageUrl ? undefined : gradientOf(colorKey),
      width,
      height,
      borderRadius: radius,
    }}
  >
    {imageUrl ? <Image className='color-block__image' src={imageUrl} mode='aspectFill' /> : null}
  </View>
)

export default ColorBlock
