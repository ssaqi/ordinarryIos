import React, {useState} from 'react';
import { Text, View, Dimensions,StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native'
import { Arrowback } from '../../components'
import { colors, sizes, fontSize } from '../../utilities';
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
  const CELL_COUNT = 4;
export default function VerificationCode({navigation}) {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

    const handleVerify = async () => {
      navigation.navigate("FirstName")
      try {
        // Make an API call to request an OTP
        const response = await axios.post('YOUR_SERVER_ENDPOINT/send-otp', {
          phoneNumber: 'USER_PHONE_NUMBER', // Replace with the user's phone number
        });
  
        // Assuming the API returns a success message
        console.log('OTP sent:', response.data.message);
  
        // Navigate to the next screen for OTP verification
        // navigation.navigate('OTPVerification');
      } catch (error) {
        console.error('Error requesting OTP:', error);
        // Handle the error, e.g., show an error message to the user
      }
    };
    

  return (
  <SafeAreaView style={styles.container}>
     <Arrowback/>
     <View style={styles.logincontainer}>
                <Text style={styles.loginText}>Enter 4-digits code</Text>
                {/* <Text style={styles.enternumberText}>Enter your phone number</Text> */}
            </View>

    <View style={styles.inputnumber}>
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
    <View  style={styles.buttoncontainer}>
    <TouchableOpacity
     style={styles.button}
              onPress={handleVerify}
             
             ><Text style={styles.logintext}>Verify</Text></TouchableOpacity> 
          
          </View>
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
       
        justifyContent: "center",
        alignItems: "center",
        marginVertical:sizes.screenHeight * 0.02,
        
    },
   
   
    buttoncontainer:{
        marginVertical:sizes.screenHeight*0.05,
        justifyContent:"center",
        alignItems:"center"
    

    },
    button:{
        backgroundColor:"#7BCFF6",
        width:sizes.screenWidth*0.6,
        height:sizes.screenHeight*0.06,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    logintext:{
        color:"#FFF",
        fontFamily:"poppins",
        fontWeight:"700",
        fontSize:fontSize.h5
    },cell: {
        width: 60,
        height: 60,
        lineHeight: 58,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030', textAlign: 'center',
        marginHorizontal:sizes.screenWidth*0.02,
        borderRadius:10,
        borderColor:"#7BCFF6",
        backgroundColor:'#7BCFF6',
        color:"white",
        alignItems:'center',
        justifyContent:'center',
        ...Platform.select({
          ios: {
            width: 60,
            height: 60,
            lineHeight: 38,
            fontSize: 24,
            borderWidth: 10,
            borderColor: '#00000030', textAlign: 'center',
            marginHorizontal:sizes.screenWidth*0.02,
            borderRadius:10,
            borderColor:"#7BCFF6",
            backgroundColor:'#7BCFF6',
            color:"white",
            alignItems:'center',
            justifyContent:'center',
            overflow:"hidden"
          },
        
        }),
  
  
      },
      focusCell: {
        borderColor: '#7BCFF6',
      },
      codeFieldRoot:{
         marginHorizontal:sizes.screenWidth*0.05,
      },
      
    


})
