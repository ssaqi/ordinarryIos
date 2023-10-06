import React, { useState, useRef } from "react";
import {
    Text, View, Dimensions, StyleSheet, SafeAreaView,

    StatusBar,
    TouchableOpacity,
} from 'react-native'
import { Arrowback } from '../../components'
import { colors, sizes, fontSize } from '../../utilities';
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import axios from 'axios';
import Toast from 'react-native-toast-message';
const LoginWithNumber = ({ navigation }) => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const phoneInput = useRef(null);
  
    const handleLogin = async () => {
        navigation.navigate("Verify");
//       try {
//         const checkValid = phoneInput.current?.isValidNumber(value);
//   console.log(phoneInput,"====>");
//         if (!checkValid) {
//           Toast.show({
//             type: 'error',
//             position: 'bottom',
//             text1: 'Invalid Phone Number',
//             visibilityTime: 3000,
//           });
//           return;
//         }
  
//         // Send a request to your server to create and send a verification code
//     //     const response = await axios.post('YOUR_SERVER_ENDPOINT', {
//     //       phoneNumber: formattedValue, // Send the formatted phone number to your server
//     //     });
  
//     //     // Assuming your server responds with a success message
//     //     if (response.data.success) {
//     //       navigation.navigate("Verify", { phoneNumber: formattedValue });
//     //     } else {
//     //       Toast.show({
//     //         type: 'error',
//     //         position: 'bottom',
//     //         text1: 'Error Sending Code',
//     //         visibilityTime: 3000,
//     //       });
//     //     }
//       } catch (error) {
//     //     console.error(error);
//     //     Toast.show({
//     //       type: 'error',
//     //       position: 'bottom',
//     //       text1: 'Something went wrong',
//     //       visibilityTime: 3000,
//     //     });
//        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Arrowback />
            <View style={styles.logincontainer}>
                <Text style={styles.loginText}>Login</Text>
                <Text style={styles.enternumberText}>Enter your phone number</Text>
            </View>
            <View style={styles.inputnumber}>


                <PhoneInput
                    // ref={phoneInput}    
                    textContainerStyle={{ backgroundColor: 'white', borderRadius: 20, color: "#ffffff", padding: 0 }}
                    containerStyle={{ height: sizes.screenHeight * 0.09, borderColor: "#7BCFF6", borderWidth: 2, borderRadius: 20 }}
                    defaultValue={value}
                    defaultCode="DM"
                    layout="first"
                    keyboardType="phone-pad"
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    // withDarkTheme
                    // withShadow
                    autoFocus
                />




            </View>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity
           
                    style={styles.button}
                    onPress={handleLogin}>

                   
                        

                    <Text style={styles.logintext}>Login</Text>

                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
        marginVertical: sizes.screenHeight * 0.02,
        // height:sizes.screenHeight*0.03,
        justifyContent: "center",
        alignItems: "center",
    },


    buttoncontainer: {
        marginVertical: sizes.screenHeight * 0.05,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#7BCFF6",

    },
    button: {
        backgroundColor: "#7BCFF6",
        width: sizes.screenWidth * 0.8,
        height: sizes.screenHeight * 0.06,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    logintext: {
        color: "#fff",
        fontFamily: "poppins",
        fontWeight: "700",
        fontSize: fontSize.h5
    }


})

export default LoginWithNumber
