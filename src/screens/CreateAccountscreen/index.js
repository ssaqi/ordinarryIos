import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import background from '../../Assets/background.png';
import IMG from '../../Assets/createaccount.png';
import { colors, sizes, fontSize } from '../../utilities';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

import Feather from 'react-native-vector-icons/Feather';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CreateAccount = ({navigation}) => {

    return (
        <ImageBackground source={background} style={styles.bgImg} resizeMode='cover' >
            <View style={styles.container}>
                <View style={styles.Accontainer}>
                    <Image
                        source={IMG}
                        // style={styles.AcImg}
                    />
                </View>
                <View style={styles.textcontainer} >
                    <Text style={styles.text} >Let’s Meeting new </Text>
                    <Text style={styles.text}>people around you</Text>
                </View>
               <View>
               <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                    <View style={styles.creataccountbutton} >
                        <View style={styles.profileicon} ><MaterialCommunityIcons name="account" size={fontSize.h2} color={"#7BCFF6"} /></View><View style={styles.profiletext}><Text style={styles.accounttext} >Create an Account</Text></View>
                    </View>
                    </TouchableOpacity>
                <TouchableOpacity  style={styles.marginvertical} onPress={()=>navigation.navigate('loginscreen')} >
                    <View style={styles.loginwithNumber}>
                        <View style={styles.phoneicon} ><Feather name="phone" size={fontSize.h4} color={"#ffff"} /></View><View style={styles.profiletext}><Text style={styles.logintext} >login with Number</Text></View>
                    </View>
                </TouchableOpacity>
               </View>
               <View style={styles.alreadytext}>
                <Text style={styles.info}>Already have an account?</Text><Text onPress={()=>navigation.navigate("login")} style={styles.signtext}> Sign in</Text>
               </View>


            </View>



        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bgImg: {

        width: deviceWidth,
        height: deviceHeight,
        //  flex:1,
        display: "flex",
        alignItems: "center"
    },
    Accontainer: {
        bottom: sizes.screenHeight * 0.1,
        justifyContent: 'center',
        alignItems: 'center'


    },
    AcImg: {
        width: sizes.screenWidth * 0.65,
        height: sizes.screenHeight * 0.30,

    },

    text: {
        fontSize: fontSize.h2,
        fontFamily: "popins",
        color: "#7BCFF6",
        fontWeight: 'bold'


    },
    textcontainer: {
        bottom: sizes.screenHeight * 0.06,
        justifyContent: 'center',
        alignItems: 'center'
    },
    creataccountbutton: {
        width: sizes.screenWidth * 0.7,
        flexDirection: 'row',
        alignItems: 'center',
        //  justifyContent:'space-around',
        backgroundColor: "#7BCFF6",
        padding: 10,
        borderRadius: 30

    },
    loginwithNumber: {
        width: sizes.screenWidth * 0.7,
        height:sizes.screenHeight*0.07,
        flexDirection: 'row',
        alignItems: 'center',
        //  justifyContent:'space-around',
        borderColor: "#7BCFF6",
        borderWidth: 1,
        padding: 10,
        borderRadius: 30
    },
    profileicon: {
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        marginHorizontal: sizes.screenWidth * 0.0,


    },
    phoneicon:{
        width:sizes.screenWidth*0.11,
        height:sizes.screenHeight*0.05,
        backgroundColor: "#7BCFF6",
        borderRadius: 50,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: sizes.screenWidth * 0.0,
        ...Platform.select({
            ios: {
                width:sizes.screenWidth*0.11,
                height:sizes.screenHeight*0.05,
                backgroundColor: "#7BCFF6",
                borderRadius: 50,
                justifyContent:'center',
                alignItems:'center',
                marginHorizontal: sizes.screenWidth * 0.0,
            },
          
          }),
    },
    accounttext: {
        fontSize: fontSize.h6,
        color: "#ffff",
        fontWeight: 'bold'
    },
    profiletext: {
        marginHorizontal: sizes.screenWidth * 0.07,
    },
    marginvertical:{
        marginVertical:sizes.screenHeight*0.02
    },
    logintext:{
        color:"#7BCFF6",
        fontSize: fontSize.h6,
        fontWeight: 'bold'
    },
    alreadytext:{
        top:sizes.screenHeight*0.09,
        flexDirection:'row',
    },
    signtext:{
        color:"#7BCFF6",
    },
    info:{

        color:"#000"
    }
    




})

export default CreateAccount
