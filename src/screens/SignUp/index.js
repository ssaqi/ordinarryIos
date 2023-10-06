import React, { useState } from 'react'
import { Text, View, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, TextInput, ScrollView,Platform } from 'react-native'
import { colors, sizes, fontSize } from '../../utilities';
import background from '../../Assets/background.png';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import { Arrowback, Loader } from '../../components'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setUser } from '../../store/userActions';
import { useDispatch } from 'react-redux';


function SignUp({ navigation }) {

  const dispatch = useDispatch();
 

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const[number,setnumber]=useState('')
  const[birthdate,setbirthdate]=useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSignup = () => {
    openModal(); // Show loader
    setError('');

    // Regular expression for password validation: at least one uppercase letter and one number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('All fields are required');
      closeModal(); // Hide loader
    } else if (!passwordRegex.test(password)) {
      setError('Password must contain at least one uppercase letter and one number');
      closeModal(); // Hide loader
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
      closeModal(); // Hide loader
    } else if (!emailRegex.test(email)) {
      setError('Invalid email address');
      closeModal(); // Hide loader
    } else {
    
       

      setTimeout(() => {
         // Save user data to AsyncStorage
         AsyncStorage.setItem('userData', JSON.stringify({ firstName, lastName, email,password,number,birthdate }));
    
         // Dispatch the setUser action to store user data in Redux
         dispatch(setUser({ firstName, lastName, email,password,number,birthdate }));
        closeModal(); // Hide loader
        navigation.navigate('login'); // Replace 'login' with the actual screen you want to navigate to
      }, 2000);
      // Navigate forward if all conditions are met
     // Hide loader
  
   
  }
  };





  return (
    <>
  <Loader isModalVisible={isModalVisible} closeModal={closeModal} />
    <ImageBackground source={background} style={styles.bgImg} resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <ScrollView  vartical={true} showsVerticalScrollIndicator={false}>
        <Arrowback />
        <View style={styles.logincontainer}>
          <Text style={styles.loginText}>Sign up</Text>
        </View>

        <View style={styles.incontainer}>
          <View style={styles.inpDiv}>
            <TextInput
              onChangeText={(text) => setFirstName(text)}
              placeholder="First Name"
              placeholderTextColor="#000"
              style={styles.inp}
              value={firstName}
            />
            
          </View>

          <View style={styles.inpDiv}>
            <TextInput
              onChangeText={(text) => setLastName(text)}
              placeholder="Last Name"
              placeholderTextColor="#000"
              style={styles.inp}
              value={lastName}
            />
           
          </View>

          <View style={styles.inpDiv}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#000"
              onChangeText={(text) => setEmail(text)}
              value={email}
              style={styles.inp}
            />
            
          </View>
          <View style={styles.inpDiv}>
            <TextInput
              placeholder="Phone number"
              placeholderTextColor="#000"
              onChangeText={(text) => setnumber(text)}
              value={number}
              keyboardType="numeric"
              style={styles.inp}
            />
            
          </View>
          <View style={styles.inpDiv}>
            <TextInput
              placeholder="Date of birth"
              placeholderTextColor="#000"
              onChangeText={(text) => setbirthdate(text)}
              value={birthdate}
              keyboardType="numeric"
              style={styles.inp}
            />
            
          </View>

          <View style={styles.inpDiv}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#000"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              style={styles.inp}
            />
          
          </View>

          <View style={styles.inpDiv}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#000"
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              secureTextEntry={true}
              style={styles.inp}
            />
            
          </View>
          <View style={styles.inpText}>
            <Text style={styles.info}>
              If you are already signed up{' '}
              <Text onPress={() => navigation.navigate('login')} style={styles.tt2}>
                Sign in
              </Text>
            </Text>
            {error &&
            <View style={styles.errorDiv}>
            
            <Text style={styles.errorText}>{error}</Text>
            
            </View>
            }
          </View>
        </View>

        <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.logintext}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  </>
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
    paddingVertical: sizes.screenHeight * 0.04

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

  inpDiv: {
    marginVertical: sizes.screenHeight * 0.01,

  },

  inpText: {
    marginVertical: sizes.screenHeight * -0.001,
    alignItems: "center",
    fontSize: fontSize.medium,
    fontWeight: "700",
    fontFamily: "popin",

  },
  inp: {
    color: "#000",
    borderColor: "#7BCFF6",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: sizes.screenWidth * 0.06,
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
  tt2: {

    color: "#7BCFF6",
    fontSize: fontSize.medium,
    fontWeight: "700",
    fontFamily: "popin",
  },
  incontainer: {
    paddingHorizontal: sizes.screenWidth * 0.04,
    marginVertical: sizes.screenHeight * 0.06,
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
  info: {

    color: "#000"
  },

  errorDiv:{
    
      paddingHorizontal:sizes.screenWidth * 0.09,
      paddingVertical:sizes.screenHeight * 0.02,
      backgroundColor:"red",
      borderRadius:10,
      right:sizes.screenWidth * 0.10,
      top:sizes.screenHeight * 0.02,
      opacity:0.5

  },
  errorText:{
    width:sizes.screenWidth*0.5,
    // top:sizes.screenHeight*0.03,
    // right:sizes.screenWidth*0.1,
    color:"#fff",
    fontSize:fontSize.medium,
    fontWeight:"600"
    // backgroundColor:"red"
    
  }




})

export default SignUp
