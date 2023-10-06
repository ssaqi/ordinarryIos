import React, { useState } from 'react'
import { Text, View, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, TextInput, Alert } from 'react-native'
import { colors, sizes, fontSize } from '../../utilities';
import PhoneInput from "react-native-phone-number-input"; import { Colors } from "react-native/Libraries/NewAppScreen";
import background from '../../Assets/background.png';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Arrowback } from '../../components';

export default function GenderScreen({navigation,route}) {
    const [MaleOption, setMaleOption]=useState(false);
    const [feMaleOption, setfeMaleOption]=useState(false);
    const [selectedGender, setSelectedGender] = useState(''); // State to store selected gender

    const { name } = route.params; // Get the name passed from the previous screen
  
    // Function to handle gender selection
    const handleGenderSelection = (gender) => {
      setSelectedGender(gender);
    };
  
    // Function to send the selected gender to the API
    const sendGenderToAPI = async () => {
      try {
        // Make a POST request to your API endpoint with the selected gender and name
        const response = await axios.post('YOUR_API_ENDPOINT', {
          name,
          gender: selectedGender,
        });
  
        // Handle the API response here (e.g., show a success message)
        console.log('API Response:', response.data);
  
        // Navigate to the next screen (if needed)
        navigation.navigate('NextScreen');
      } catch (error) {
        // Handle API request error
        console.error('API Request Error:', error);
        // Show an error message to the user
        Alert.alert('Error', 'Failed to send data to the server. Please try again later.');
      }
    };
    


   
    return (
        <ImageBackground source={background} style={styles.bgImg} resizeMode='cover' >

            <SafeAreaView style={styles.container}>
                <View style={styles.header}  >
                    <Arrowback />
                </View>
                <View style={styles.logincontainer}>
                    {/* <Text style={styles.loginText}>Login</Text> */}
                    <Text style={styles.enternumberText}>What is your gender?</Text>


                </View>
                <View style={styles.genderbutton}>

                    <TouchableOpacity onPress={()=>{handleGenderSelection('Male'),setMaleOption(true),setfeMaleOption(false)}}>
                        <View style={MaleOption?styles.genboxactivate:styles.genbox}>
                            {MaleOption ?<View style={styles.checbox}>
                                <AntDesign name={"checkcircle"} size={15} style={{ color: "#88CFF1" }} />
                            </View>:null}
                            
                            <Ionicons 
                            name={"male"} 
                            size={30} 
                            color={'white'} 
                            style={styles.genIcon}  
                            />
                            <Text style={styles.textgend}>Man</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{handleGenderSelection('Female'),setfeMaleOption(true),setMaleOption(false)}} >
                        <View style={feMaleOption?styles.genboxactivate:styles.genbox}>
                        {feMaleOption ?<View style={styles.checbox}>
                                <AntDesign name={"checkcircle"} size={15} style={{ color: "#88CFF1" }} />
                            </View>:null}
                            <Ionicons 
                            name={"female-sharp"} 
                            size={30} 
                            color={'white'} 
                            style={styles.genIcon} />
                            <Text style={styles.textgend}>Woman</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.inpCon}>

                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("interestscreen")} style={styles.nextBtn}>
                    <AntDesign name="arrowright" size={30} color={'white'} />
                </TouchableOpacity>


<View style={styles.num}>
    <Text style={styles.number}>2/2</Text>
</View>
                <View style={styles.lightbslide}>
                    <View style={styles.darkblue}>
                        
                    </View>
                </View>
            </SafeAreaView>




        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: sizes.screenWidth * 0.04
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
        justifyContent: 'flex-start',
        //   alignItems: 'center',

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
        fontSize: fontSize.h4,
        fontWeight: "700",
        ...Platform.select({
            ios: {
              
                marginVertical: sizes.screenHeight * 0.03,
                fontFamily: "poppins",
                color: "#7BCFF6",
                fontSize: fontSize.h4,
                fontWeight: "700",
                marginHorizontal:sizes.screenWidth * 0.19

            },
          
          }),

    },
    inputnumber: {
        justifyContent: "center",
        alignItems: "center",
    },
    inp: {

        borderWidth: 1,
        borderColor: "#7BCFF6",
        paddingHorizontal: sizes.screenWidth * 0.03,
        borderRadius: 10
    },
    inpCon: {
        marginHorizontal: sizes.screenWidth * 0.02,
        width: sizes.screenWidth * 0.9,
        justifyContent: "center"
    },
    nextBtn: {
        top: sizes.screenHeight * 0.39,
        left: sizes.screenWidth * 0.74,
        width:sizes.screenWidth * 0.20,
        height: sizes.screenHeight * 0.09,
        backgroundColor: "#7BCFF6",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
             
                top: sizes.screenHeight * 0.42,
                left: sizes.screenWidth * 0.80,
                width:sizes.screenWidth * 0.16,
                height: sizes.screenHeight * 0.09,
                backgroundColor: "#7BCFF6",
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
            },
          
          }),



    },
    lightbslide: {
        width: sizes.screenWidth * 0.9,
        height: sizes.screenHeight * 0.01,
        backgroundColor: "#E4F6FF",
        top: sizes.screenHeight * 0.42,
        ...Platform.select({
            ios: {
                width: sizes.screenWidth * 0.9,
                height: sizes.screenHeight * 0.01,
                backgroundColor: "#E4F6FF",
                top: sizes.screenHeight * 0.42,
                marginHorizontal: sizes.screenHeight *0.03,
            },
          
          }),
    },
    darkblue: {
        width: sizes.screenWidth * 0.9,
        height: sizes.screenHeight * 0.01,
        backgroundColor: "#88CFF1",
        // top:sizes.screenHeight*0.03
    },
    genderbutton: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    genbox: {
        // borderWidth: 2,
        // borderColor: "#7BCFF6",
        width: sizes.screenWidth * 0.40,
        height: sizes.screenHeight * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#E8E8E8"

    },
    textgend: {
        fontFamily: "poppins",
        fontSize: fontSize.h6,
        color: "#88CFF1",
        marginVertical:sizes.screenHeight *0.003

    },
    checbox: {
        left: sizes.screenWidth * 0.14,
        bottom: sizes.screenHeight * 0.01
    },
    genboxactivate: {
        borderWidth: 2,
        borderColor: "#7BCFF6",
        width: sizes.screenWidth * 0.40,
        height: sizes.screenHeight * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "white"

    },
    num:{
        top:sizes.screenHeight*0.42,
        ...Platform.select({
            ios: {
                // top:sizes.screenHeight*0.04,
                paddingHorizontal:sizes.screenWidth*0.06,
            },
          
          }),
    },
    number:{
        fontFamily: "poppins",
        color: "#7BCFF6",
        fontSize: fontSize.h5,
        fontWeight: "700"
    },
    genIcon:{

        backgroundColor: "#88CFF1",
        borderRadius: 50,
        padding: 15, 
        ...Platform.select({
            ios: {
                backgroundColor: "#88CFF1",
                borderRadius: 30,
                 padding: 15, 
                 overflow:"hidden"
            },
          
          }),

    }





})





