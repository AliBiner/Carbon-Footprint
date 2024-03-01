import React from 'react'
import { Text} from 'react-native'
import CustomImageBackground from '../../components/BackGround'

import styles from './styles'

function index() {
  return (
    <CustomImageBackground imageSource={require("../../../assets/background.jpg")} resizeMode='cover'>
        <Text style={styles.text}>Component'in Geleceği Konum</Text>
    </CustomImageBackground>
     
  )
}
export default index