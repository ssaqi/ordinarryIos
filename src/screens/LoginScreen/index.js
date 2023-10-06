import React,{useState,useEffect} from 'react'
import { Text, View, Dimensions,StyleSheet,SafeAreaView,TouchableOpacity,ImageBackground, TextInput } from 'react-native'
import { colors, sizes, fontSize } from '../../utilities';
import background from '../../Assets/background.png';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import { Arrowback, Loader } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { setUser } from '../../store/userActions';
function Login({navigation}) {


  const user = useSelector((state) => state.user);
  console.log(user);
  const [isModalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[userEmail,setuserEmail]=useState();
  const[userpassword,setuserpassword]=useState();

  useEffect(() => {
    const getUserDataFromStorage = async () => {
      try {
        const user = await AsyncStorage.getItem('SET_USER');
        if (user) {
          // Parse the JSON data and dispatch it to Redux
          const parsedUserData = JSON.parse(user);
          dispatch(setUser(parsedUserData));
        }
      } catch (error) {
        console.error('Error retrieving user data from AsyncStorage:', error);
      }
    };
    
    setuserEmail(user.user?.email,); 
    setuserpassword(user.user?.password)
   
    getUserDataFromStorage();
  }, []);
  // console.log(user.user.password
  //   ,"====>useeffect"); 
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const isEmailValid = () => {
    // Simple email validation using a regular expression
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const isPasswordValid = () => {
    // Check if the password meets your validation criteria
    return password.length >= 6; // For example, require a minimum of 6 characters
  };

  const handleLogin = () => {
    // Check if email and password are valid
    if (!isEmailValid()) {
      alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!isPasswordValid()) {
      alert('Invalid Password', 'Password must be at least 6 characters.');
      return;
    }

    // Replace this with your actual login logic
    const correctEmail = 'brian@gmail.com';
    const correctPassword = 'Umair123';

    if (email === userEmail && password === userpassword) {
      openModal()
      setTimeout(() => {
        closeModal(); // Hide loader
        navigation.navigate('datingpage'); // Replace 'login' with the actual screen you want to navigate to
      }, 3000);
      // Successful login, navigate to the dashboard
   // Replace 'Dashboard' with your actual dashboard screen name
    } else {
      // Incorrect login credentials
      alert('Login Failed', 'Incorrect email or password.');
    }
  };


  return (
    <>
    <Loader isModalVisible={isModalVisible} closeModal={closeModal} />
    <ImageBackground source={background} style={styles.bgImg} resizeMode='cover' >

<SafeAreaView style={styles.container}>
            <Arrowback />
            <View style={styles.logincontainer}>
                <Text style={styles.loginText}>Sign in</Text>
            </View>

             <View style={styles.incontainer}>
             <View style={styles.inpDiv}>
                <TextInput 
                placeholder='Email Address'
                placeholderTextColor={'#000'}
                onChangeText={text => setEmail(text)}
                value={email}
                style={styles.inp}
                >

                </TextInput>
              </View>
             
              <View style={styles.inpDiv}>
                <TextInput 
                placeholder='Password'
                placeholderTextColor={'#000'}
                style={styles.inp}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
                >

                </TextInput>
              </View>

               <View style={styles.inpText}>
                   <Text  onPress={()=>navigation.navigate("forget")} style={styles.tt2}>Forget Password</Text>
               </View>
               


             </View>




             <View  style={styles.buttoncontainer}>
            <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}

          >
            <Text style={styles.logintext}>Sign in</Text>
          
          </TouchableOpacity>
            </View>




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
            color:"#000",
            borderColor:"#7BCFF6",
            borderWidth:1,
            borderRadius:10,
            paddingHorizontal:sizes.screenWidth*0.06,
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
            left:sizes.screenWidth * 0.25
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

export default Login
