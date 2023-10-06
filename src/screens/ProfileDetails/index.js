  import React, { useState } from 'react'
import {Text, View,StyleSheet ,SafeAreaView,TouchableOpacity,ImageBackground, TextInput,Dimensions, Image} from 'react-native';
import { colors, sizes, fontSize } from '../../utilities';
import background from '../../Assets/background.png';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import { Arrowback } from '../../components';
import DP from '../../Assets/photo.png';
import ICON from '../../Assets/camera.png';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
function ProfileDetails({navigation}) {
    const[selectImage,setselectImage]=useState('')
    const imagepicker = () =>{

     let option ={

           storageoption:{
              path:"image"
           }
     }

         launchImageLibrary(option,response=>{
            console.log(response.assets[0].uri)
         })
    }
  return (
    <View>
        <ImageBackground source={background} style={styles.bgImg} resizeMode='cover' >

<SafeAreaView style={styles.container}>
            <Arrowback />
            <View style={styles.logincontainer}>
                <Text style={styles.loginText}>Profile details</Text>
            </View>

              <View style={styles.imgPicCon}>
                <View style={styles.proDiv}>

 <View style={styles.pdiv}>

        <Image
         source={DP}
        // style={styles.img}
        />
       
       <TouchableOpacity
         onPress={()=>{imagepicker(



         )}}
       
       >
       <Image
             source={ICON}
             style={styles.icon}
           />

       </TouchableOpacity>
 </View>


          

    

                </View>
              </View>




             <View style={styles.incontainer}>
             <View style={styles.inpDiv}>
                <TextInput 
                editable={false}
                placeholder='First Name'
                placeholderTextColor={'#000'}
                style={styles.inp}
                >

                </TextInput>
              </View>
             
              <View style={styles.inpDiv}>
                <TextInput 
                editable={false}
                placeholder='Last Name'
                placeholderTextColor={'#000'}
                style={styles.inp}
                >

                </TextInput>
              </View>
               

              <View style={styles.inpDiv}>
                <TextInput 
                editable={false}
                placeholder='Date of birth'
                placeholderTextColor={'#000'}
                style={styles.inp}
                >

                </TextInput>
              </View>


             </View>




             <View  style={styles.buttoncontainer}>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate("editprofile")}

          >
            
          
                <Text style={styles.logintext}>Confirm</Text>
          
          </TouchableOpacity>
            </View>




            </SafeAreaView>
    </ImageBackground>
    </View>
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

        imgPicCon:{
            marginTop:sizes.screenHeight*0.04,
            width:sizes.screenWidth * 0.9,
            height:sizes.screenHeight * 0.2,
            // backgroundColor: "red",
            justifyContent:"center",
            alignItems:"center"

        },
        proDiv:{
            
            width:sizes.screenWidth * 0.5,
            height:sizes.screenHeight * 0.2,
            // backgroundColor:"#fff",
            justifyContent:'center',
            alignItems:'center'
        

        },
        logincontainer: {
            justifyContent: 'center',
            alignItems: 'center',
    
        },
        loginText: {
            fontFamily: "poppins",
            color: "#7BCFF6",
            fontSize: fontSize.h3,
            fontWeight: '700',
            marginRight:sizes.screenWidth * 0.4,
            
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
            paddingHorizontal:sizes.screenWidth*0.06

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
    },
    pdiv:{
       
       width:sizes.screenWidth*0.29,
       height:sizes.screenHeight * 0.16,
       alignItems:"center",
       borderRadius:200
       
        
    },
    img:{
        width:sizes.screenWidth*0.29,
        height:sizes.screenHeight * 0.14,
        alignItems:"center",
        borderRadius:200

    },
    icon:{

         flexDirection:"row",
         bottom:sizes.screenWidth * 0.08,
         left:sizes.screenWidth * 0.09
    }


})


export default  ProfileDetails


