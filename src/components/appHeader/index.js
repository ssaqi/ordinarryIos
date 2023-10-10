import React from 'react'
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, Image,SafeAreaView } from 'react-native'
import { colors, sizes, fontSize } from '../../utilities';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import LOGO from '../../Assets/logo1.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
function AppHeader({openModal}) {
  return (
     <SafeAreaView style={styles.mainnCon}>
         
           <View>
               <Image
                source={LOGO}
                style={styles.Img}
               />
           </View>


    <View style={styles.iconDiv}>
          <TouchableOpacity 
          style={styles.Icon}
          
          >
            <AntDesign name="heart" size={18} color={"#88CFF1"}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Iconn} onPress={openModal}>
            <FontAwesome name="sliders" size={18} color={"#88CFF1"} />
          </TouchableOpacity>
    </View>
     </SafeAreaView>
  )
}


const styles = StyleSheet.create({

    mainnCon:{

           flexDirection:"row",
           justifyContent:"space-around",
           paddingVertical:sizes.screenHeight * 0.03,
           paddingHorizontal:sizes.screenWidth * 0.06,
           backgroundColor:"#FFF"
       
        
    },
    Img:{
      
        right:sizes.screenWidth *0.08

    },
    Icon:{

         width:sizes.screenWidth * 0.13,
         height:sizes.screenHeight * 0.06,
         borderColor: "#88CFF1",
         borderWidth:2,
         borderRadius:50,
         justifyContent:"center",
         alignItems:"center",
         ...Platform.select({
          ios: {
          
            width:sizes.screenWidth * 0.11,
            height:sizes.screenHeight * 0.05,
            borderColor: "#88CFF1",
            borderWidth:2,
            borderRadius:50,
            justifyContent:"center",
            alignItems:"center",
            marginLeft:sizes.screenWidth * 0.02,
          },
        
        }),
         
    },

    Iconn:{

        width:sizes.screenWidth * 0.13,
        height:sizes.screenHeight * 0.06,
        borderColor: "#88CFF1",
        borderWidth:2,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:sizes.screenWidth * 0.02,
        ...Platform.select({
          ios: {
          
            width:sizes.screenWidth * 0.11,
            height:sizes.screenHeight * 0.05,
            borderColor: "#88CFF1",
            borderWidth:2,
            borderRadius:50,
            justifyContent:"center",
            alignItems:"center",
            marginLeft:sizes.screenWidth * 0.02,
          },
        
        }),
   },
   iconDiv:{
    flexDirection:"row",
    left:sizes.screenWidth*0.08
   }


})

export default AppHeader
