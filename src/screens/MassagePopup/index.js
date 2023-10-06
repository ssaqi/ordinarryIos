import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, TextInput, Dimensions, Image } from 'react-native';
import { colors, sizes, fontSize } from '../../utilities';
import background from '../../Assets/backgroundChnge.png';
import IMG from '../../Assets/imagecenter.png';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Arrowback } from '../../components';
function MassageScreen({navigation}) {
  return (
      
        <ImageBackground source={background} style={styles.bgImg} resizeMode='cover'>
        <SafeAreaView>
        <Arrowback/>
         
         <View style={styles.text}>
            <Text style={styles.txt}>You and Alfredo Liked </Text>
            <Text style={styles.smtxt}>each others!</Text>
         </View>

          <View style={styles.img}>
            <Image
            source={IMG}
            
            />
          </View>



          <TouchableOpacity style={styles.btn}
          onPress={()=>navigation.navigate("textsrcn",{name:"jhone"})}
          
          >
            <Feather
            name="message-circle"
            size={20}
            style={styles.icon}
            />
            <Text style={styles.btnText}>Send a massage</Text>

          </TouchableOpacity>


          <TouchableOpacity style={styles.btn1} onPress={()=>navigation.navigate("swippage")}>
            <MaterialCommunityIcons
            name="cards-outline"
            size={25}
            style={styles.icon1}
            />
            <Text style={styles.btnText1}>Keep Swiping</Text>

          </TouchableOpacity>
          </SafeAreaView>
       </ImageBackground>

    
  )
}



const styles = StyleSheet.create({

   bgImg:{

       width:sizes.screenWidth * 1,
       height:sizes.screenWidth * 2.2,
   },
   text:{

       width:sizes.screenWidth * 0.75,
       height:sizes.screenHeight * 0.1,
       marginHorizontal:sizes.screenWidth * 0.12,
       marginVertical:sizes.screenHeight * 0.04,
       textAlign:"center",
       alignItems:"center",
    
   },
   txt:{

      fontFamily:"popin",
      fontSize:fontSize.h4,
      fontWeight:"700",
      color:"#0087C8"
   },
   smtxt:{

       alignItems:"center",
       justifyContent:"center",
       marginHorizontal:sizes.screenWidth*0.1,
       fontFamily:"popin",
       fontSize:fontSize.h4,
       fontWeight:"700",
       color:"#000"
   },
   img:{

       width:sizes.screenWidth * 0.9,
       height:sizes.screenHeight * 0.5,
    //    backgroundColor:"#fff",
       marginHorizontal:sizes.screenWidth * 0.05,
       justifyContent:'center',
       alignItems:"center"
   },
   btn:{

       width:sizes.screenWidth * 0.8,
       height:sizes.screenHeight * 0.08,
       backgroundColor:"#fff",
       marginHorizontal:sizes.screenWidth * 0.1,
       marginVertical:sizes.screenHeight * -0.04,
       borderRadius:30,
       backgroundColor:"#0087C8",
       alignItems:"center",
       flexDirection:"row",
       justifyContent:"center"
   },

   btn1:{

    width:sizes.screenWidth * 0.8,
    height:sizes.screenHeight * 0.08,
    backgroundColor:"#fff",
    marginHorizontal:sizes.screenWidth * 0.1,
    marginVertical:sizes.screenHeight * 0.05,
    borderRadius:30,
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"center"
},


   btnText:{

         fontSize:fontSize.extraLarge,
         color:"#fff",
         fontWeight:"700",
         fontFamily:"popin",
         marginVertical:sizes.screenHeight * 0.02
   },
   btnText1:{

    fontSize:fontSize.extraLarge,
    color:"#88CFF1",
    fontWeight:"700",
    fontFamily:"popin",
    marginVertical:sizes.screenHeight * 0.02
},
   icon:{

       color:"#fff",
       right:sizes.screenWidth* 0.02
   },
   icon1:{

    color:"#88CFF1",
    right:sizes.screenWidth* 0.02
}


})

export default MassageScreen
