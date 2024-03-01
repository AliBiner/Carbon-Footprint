import React, { FC, ReactNode } from 'react'
import { ImageBackground, ImageResizeMode, ImageSourcePropType, Text, View } from 'react-native'
import styles from './styles'

interface IImageBackground{
  imageSource:ImageSourcePropType,
  resizeMode: ImageResizeMode,
  children:ReactNode
}

const CustomImageBackground:FC<IImageBackground> = ({imageSource,resizeMode,children}) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={imageSource} 
        resizeMode={resizeMode}
        style={styles.image}
        >
          {children}
        </ImageBackground>
    </View>
      
     
  )
}

export default CustomImageBackground