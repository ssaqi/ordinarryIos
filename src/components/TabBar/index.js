import React, { useState, useEffect } from 'react'
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, Image, } from 'react-native'
import { colors, sizes, fontSize } from '../../utilities';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import LOGO from '../../Assets/logo1.png'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import DP from '../../Assets/photo.png';
import { useNavigation } from '@react-navigation/native';

function TabBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.tab}>

      <TouchableOpacity 
      style={styles.icon}
      onPress={()=>navigation.navigate("datingpage")}
      >
        <MaterialCommunityIcons
          name="home"
          size={20}
          color={"#fff"}
        />
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.icon}
      onPress={()=>navigation.navigate("discoverscreen")}
      
      >
        <MaterialCommunityIcons
          name="source-commit-next-local"
          size={20}
          color={"#fff"}
        />
      </TouchableOpacity>

      <TouchableOpacity
       style={styles.icon}
       onPress={()=>navigation.navigate("swippage")}
       >
        <Entypo
          name="plus"
          size={20}
          color={"#fff"}

        />
      </TouchableOpacity>

      <TouchableOpacity
       style={styles.icon}
       onPress={()=>navigation.navigate("chatscreen")}   
      >
        <Feather
          name="message-circle"
          size={20}
          color={"#fff"}
        
        />
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.icon}
      onPress={()=>navigation.navigate("editprofile")}  
      >

        <Image
          source={DP}
          style={styles.img1}
        />

      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({

  tab: {
    // borderWidth:1,
    width: sizes.screenWidth * 0.78 ,
    height: sizes.screenHeight * 0.08,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: sizes.screenWidth * 0.10,
    // marginVertical: sizes.screenHeight * 0.39,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: "space-around",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity:  0.10,
    shadowRadius: 1.41,
    elevation: 2,
    ...Platform.select({
      ios: {
        width: sizes.screenWidth * 0.78 ,
        height: sizes.screenHeight * 0.08,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        // marginHorizontal: sizes.screenWidth * 0.10,
        // marginVertical: sizes.screenHeight * 0.39,
        bottom:sizes.screenHeight* 0.11,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: "space-around",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity:  0.10,
        shadowRadius: 1.41,
        elevation: 2,
      },
    
    }),





  },

  icon: {
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.05,
    backgroundColor: "#88CFF1",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
          width: sizes.screenWidth * 0.10,
          height: sizes.screenHeight * 0.045,
          backgroundColor: "#88CFF1",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
      },
    
    }),
  },

  iconn: {
    width: sizes.screenWidth * 0.085,
    height: sizes.screenHeight * 0.05,
    backgroundColor: "#000",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"

  },
  img1: {
    width: sizes.screenWidth * 0.10,
    height: sizes.screenHeight * 0.05,
    alignItems: "center",
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: sizes.screenWidth * -0.005,
    marginVertical: sizes.screenHeight * -0.002


  },




})

export default TabBar
