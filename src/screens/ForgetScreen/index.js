import React from 'react'
import { Text, View, Dimensions,StyleSheet,SafeAreaView,TouchableOpacity,ImageBackground, TextInput } from 'react-native'
import { colors, sizes, fontSize } from '../../utilities';
import background from '../../Assets/background.png';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import { Arrowback } from '../../components'
function Forget({navigation}) {
  return (
    <ImageBackground source={background} style={styles.bgImg} resizeMode='cover' >

<SafeAreaView style={styles.container}>
            <Arrowback />
            <View style={styles.logincontainer}>
                <Text style={styles.loginText}>Forget Password</Text>
            </View>

             <View style={styles.incontainer}>
             <View style={styles.inpDiv}>
                <TextInput 
                placeholder='Email Address'
                placeholderTextColor={'#000'}
                style={styles.inp}
                >

                </TextInput>
              </View>
             

               {/* <View style={styles.inpText}>
                   <Text  onPress={()=>navigation.navigate("Signup")} style={styles.tt2}>Forget Password</Text>
               </View> */}
               


             </View>




             <View  style={styles.buttoncontainer}>
            <TouchableOpacity
              onPress={()=>navigation.navigate("newpassword")}
            style={styles.button}

          >
            
             <TouchableOpacity
             ><Text style={styles.logintext}>Submit</Text></TouchableOpacity> 
          
          </TouchableOpacity>
            </View>




            </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({

    bgImg: {

        width: deviceWidth,
        height: deviceHeight,
        //  flex:1,
        display: "flex",
        // alignItems: "center"
        },
        container: {
            flex: 1,
            paddingHorizontal: sizes.screenWidth * 0.02,
            paddingVertical: sizes.screenHeight * 0.02
    
        },
        logincontainer: {
            justifyContent: 'center',
            alignItems: 'center',
    
        },
        loginText: {
            fontFamily: "poppins",
            color: "#7BCFF6",
            fontSize: fontSize.h1,
            fontWeight: '700'
        },
        enternumberText: {
            marginVertical: sizes.screenHeight * 0.02,
            fontFamily: "poppins",
            color: "#7BCFF6",
            fontSize: fontSize.h5,
    
        },
        inputnumber: {
            justifyContent: "center",
            alignItems: "center",
        },

        inpDiv:{
            marginVertical:sizes.screenHeight*0.01,
         
        },

        inpText:{
            marginVertical:sizes.screenHeight*-0.001,
            alignItems:"center",
            fontSize:fontSize.medium,
            fontWeight:"700",
            fontFamily:"popin",
         
        },
        inp:{

            borderColor:"#7BCFF6",
            borderWidth:1,
            borderRadius:10,
            paddingHorizontal:sizes.screenWidth*0.06,
            color:"#000",
            ...Platform.select({
                ios: {
                color: "#000",
              borderColor: "#7BCFF6",
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: sizes.screenWidth * 0.07,
              paddingVertical:sizes.screenHeight*0.015,
                },
              
              }),

        },
        tt2:{

            color:"#7BCFF6",
            fontSize:fontSize.medium,
            fontWeight:"700",
            fontFamily:"popin",
            left:120
        },
        incontainer:{
            paddingHorizontal:sizes.screenWidth*0.04,
            marginVertical:sizes.screenHeight*0.06,
        },
        
    buttoncontainer:{
        marginVertical:sizes.screenHeight*0.01,
        justifyContent:"center",
        alignItems:"center"
    

    },
    button:{
        backgroundColor:"#7BCFF6",
        paddingHorizontal:sizes.screenWidth*0.3,
        paddingVertical:sizes.screenHeight*0.02,
        borderRadius:50,
    },
    logintext:{
        color:"#FFF",
        fontFamily:"poppins",
        fontWeight:"700",
        fontSize:fontSize.h5
    }



})

export default Forget
