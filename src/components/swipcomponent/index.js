import React from 'react'
import { sizes, fontSize } from '../../utilities'
import { StyleSheet, Text, View, Dimensions, Image, Animated } from 'react-native'
const Swipe = ({ image, isFirst, swipe, ...rest }) => {



  
  return (
    <Animated.View style={[{
        width: -20,
        height: -100,
        alignSelf: 'center',
        position: 'absolute', top: 40,




    },
    isFirst && { transform: [...swipe.getTranslateTransform()] }


    ]}{...rest} >
    <Image source={image} style={styles.imgswipable} />
</Animated.View>
  )
}
const styles = StyleSheet.create({

    imgswipable: {
        width: sizes.screenWidth*0.8,
        height:sizes.screenHeight*0.4,
        borderRadius: 10,
        overflow: 'hidden',
        
    },
})


export default Swipe
