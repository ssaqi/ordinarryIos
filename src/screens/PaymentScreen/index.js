import React, { useState,useEffect } from 'react'
import { Text, View, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity,Image, ImageBackground, TextInput, Alert } from 'react-native'
import { colors, sizes, fontSize } from '../../utilities';
import background from '../../Assets/background.png';
import { Arrowback } from '../../components';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import ICON from '../../Assets/pay.png'
function PaymentScreen() {
  return (
    <ImageBackground source={background} style={styles.bgImg} resizeMode='cover' >
    
    <SafeAreaView style={styles.container}>
    <View style={styles.header}  >
      <Arrowback/>
      </View>
      <SafeAreaView style={styles.logincontainer}>
                {/* <Text style={styles.loginText}>Login</Text> */}
                <Text style={styles.enternumberText}>Payment Process</Text>
         
         
         </SafeAreaView>
        
        <View style={styles.inpCon}>
  <View style={styles.imgInp}>
       <TextInput
        placeholder='1234 1234 1234 1234'
        placeholderTextColor={"#000"}
        // onChangeText={(text)=>{setName(text)}}
         style={styles.inp}
         
       />
         <Image  
         source={ICON}        
         style={styles.imageStyle}
         />

        </View>
    </View>

<View style={styles.pay}> 
   <TextInput
        placeholder='Month/Year'
        placeholderTextColor={"#000"}
        // onChangeText={(text)=>{setName(text)}}
         style={styles.inp2}
       />

       <TextInput
        placeholder='Cvv'
        placeholderTextColor={"#000"}
        // onChangeText={(text)=>{setName(text)}}
         style={styles.inp3}
        
       />
    </View>

    <View style={styles.inpCon2}>

<TextInput
 placeholder='Card holder name'
 placeholderTextColor={"#000"}
 // onChangeText={(text)=>{setName(text)}}
  style={styles.inp}
 
/>

 </View>

 <View style={styles.inpCon3}>
 <TextInput
 placeholder='12 months $09/yr'
 placeholderTextColor={"#000"}
 // onChangeText={(text)=>{setName(text)}}
  style={styles.inp}
 
/>
 
</View>


<View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.logintext}>Pay</Text>
          </TouchableOpacity>
        </View>

    </SafeAreaView>

     


</ImageBackground>
  )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingHorizontal:sizes.screenWidth*0.03,
    // justifyContent: 'center',
    // alignItems: 'center'
    },
    
    bgImg: {
    
    width: deviceWidth,
    height: deviceHeight,
    //  flex:1,
    display: "flex",
    // alignItems: "center"
    },
    logincontainer: {
      justifyContent: 'center',
      alignItems: 'center',
    
    },
   
    enternumberText: {
      marginVertical: sizes.screenHeight * 0.02,
      fontFamily: "poppins",
      color: "#7BCFF6",
      fontSize: fontSize.h4,
      fontWeight:"700"
    
    },
   
    inp:{
    
        borderWidth:1,
        borderColor:"#7BCFF6",
        paddingHorizontal:sizes.screenWidth * 0.03,
        borderRadius:10,
        color:"#000",
        ...Platform.select({
          ios: {
              paddingVertical:sizes.screenHeight*0.02,
              borderColor:"#7BCFF6",
              borderWidth:1,
              borderRadius:10,
              paddingHorizontal:sizes.screenWidth*0.06,
          },
        
        }),
    
    },
    inpCon:{
            marginHorizontal:sizes.screenWidth *0.02,
           width:sizes.screenWidth * 0.9,
          justifyContent:"center",
          ...Platform.select({
            ios: {
              marginHorizontal:sizes.screenWidth *0.052,
              width:sizes.screenWidth * 0.9,
             justifyContent:"center",
            },
          
          }),
    },

    pay:{

           flexDirection:"row",
           justifyContent:"space-between",
           marginVertical:sizes.screenHeight *0.03,
           paddingHorizontal:sizes.screenWidth * 0.05
           

    },
    inp2:{
    
        borderWidth:1,
        borderColor:"#7BCFF6",
        paddingHorizontal:sizes.screenWidth * 0.03,
        borderRadius:10,
        color:"#000",
        ...Platform.select({
          ios: {
              paddingVertical:sizes.screenHeight*0.02,
              borderColor:"#7BCFF6",
              borderWidth:1,
              borderRadius:10,
              width:sizes.screenWidth*0.43,
          },
        
        }),
    
    },

    inp3:{
    
        borderWidth:1,
        borderColor:"#7BCFF6",
        paddingHorizontal:sizes.screenWidth * 0.03,
        borderRadius:10,
        color:"#000",
        ...Platform.select({
          ios: {
              paddingVertical:sizes.screenHeight*0.02,
              borderColor:"#7BCFF6",
              borderWidth:1,
              borderRadius:10,
              width:sizes.screenWidth*0.43,
          },
        
        }),
    
    },

    inpCon2:{
        marginHorizontal:sizes.screenWidth *0.02,
       width:sizes.screenWidth * 0.9,
      justifyContent:"center",
      marginVertical:sizes.screenHeight * 0.04,
      ...Platform.select({
        ios: {
          marginHorizontal:sizes.screenWidth *0.052,
          width:sizes.screenWidth * 0.9,
         justifyContent:"center",
         marginVertical:sizes.screenHeight * 0.023
        },
      
      }),
},


inpCon3:{
    marginHorizontal:sizes.screenWidth *0.02,
   width:sizes.screenWidth * 0.9,
  justifyContent:"center",
  marginVertical:sizes.screenHeight * 0.04,
  ...Platform.select({
    ios: {
      marginHorizontal:sizes.screenWidth *0.052,
      width:sizes.screenWidth * 0.9,
     justifyContent:"center",
     marginVertical:sizes.screenHeight * 0.028
    },
  
  }),
},


buttoncontainer: {
    marginVertical: sizes.screenHeight * 0.01,
    justifyContent: "center",
    alignItems: "center"


  },
  button: {
    backgroundColor: "#7BCFF6",
    paddingHorizontal: sizes.screenWidth * 0.3,
    paddingVertical: sizes.screenHeight * 0.02,
    borderRadius: 50,
  },
  logintext: {
    color: "#FFF",
    fontFamily: "poppins",
    fontWeight: "700",
    fontSize: fontSize.h5
  },


  imageStyle:{
      flexDirection:"row",
      left:sizes.screenWidth *0.55,
      bottom:sizes.screenHeight * 0.05
        
  }




})
    





export default PaymentScreen
