import React,{useState} from 'react'
import { Text, View, Dimensions,StyleSheet,SafeAreaView,TouchableOpacity,ImageBackground, TextInput } from 'react-native'
import { colors, sizes, fontSize } from '../../utilities';
import PhoneInput from "react-native-phone-number-input";import { Colors } from "react-native/Libraries/NewAppScreen";
import background from '../../Assets/background.png';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Arrowback, Loader } from '../../components';

export default function NameScreen({navigation}) {
  
  const [name, setName] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const handleNext = () => {
    openModal()
    setTimeout(() => {
      closeModal(); // Hide loader
      navigation.navigate('genderscreen', {name});// Replace 'login' with the actual screen you want to navigate to
    }, 3000);
    
  };
  return (
    <>
    
    <Loader isModalVisible={isModalVisible} closeModal={closeModal} />
    
    <ImageBackground source={background} style={styles.bgImg} resizeMode='cover' >
    
    <SafeAreaView style={styles.container}>
    <View style={styles.header}  >
      <Arrowback/>
      </View>
      <SafeAreaView style={styles.logincontainer}>
                {/* <Text style={styles.loginText}>Login</Text> */}
                <Text style={styles.enternumberText}>What’s your name?</Text>
         
         
         </SafeAreaView>
        
        <View style={styles.inpCon}>

       <TextInput
        placeholder='Enter Your name'
        placeholderTextColor={"#000"}
        onChangeText={(text)=>{setName(text)}}
         style={styles.inp}
         value={name}
       />

        </View>
        <View style={styles.nextBtn}>
        <TouchableOpacity onPress={handleNext}>

        <AntDesign name="arrowright" size={30 } color={'white'}/>
        </TouchableOpacity>
          </View>


        <View style={styles.num}>
    <Text style={styles.number}>1/2</Text>
</View>
          <View style={styles.lightbslide}>
            <View style={styles.darkblue}>

            </View>
          </View>
    </SafeAreaView>

     


</ImageBackground>
</>
)
}


const styles = StyleSheet.create({
container: {
flex: 1,
paddingHorizontal:sizes.screenWidth*0.03
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
  fontWeight:"700"

},
inputnumber: {
  justifyContent: "center",
  alignItems: "center",
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
nextBtn:{
   top:sizes.screenHeight*0.55,
   left: sizes.screenWidth *0.74,
    width:sizes.screenWidth * 0.20,
    height: sizes.screenHeight * 0.09,
    backgroundColor: "#7BCFF6",
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    ...Platform.select({
      ios: {
          top:sizes.screenHeight*0.55,
          left: sizes.screenWidth *0.76,
           width:sizes.screenWidth * 0.17,
           height: sizes.screenHeight * 0.09,
           backgroundColor: "#7BCFF6",
           borderRadius:50,
           justifyContent:'center',
           alignItems:'center',
           marginHorizontal:sizes.screenWidth * 0.04
      },
    
    }),
 
    
   
    

},
lightbslide:{
  width:sizes.screenWidth*0.9,
  height:sizes.screenHeight*0.01,
  backgroundColor:"#E4F6FF",
  top:sizes.screenHeight*0.55,
  ...Platform.select({
    ios: {
      width:sizes.screenWidth*0.9,
      height:sizes.screenHeight*0.01,
      backgroundColor:"#E4F6FF",
      top:sizes.screenHeight*0.55,
      marginHorizontal:sizes.screenWidth * 0.04
    },
  
  }),
  
},
darkblue:{
  width:sizes.screenWidth*0.50,
  height:sizes.screenHeight*0.01,
  backgroundColor:"#88CFF1",
  // top:sizes.screenHeight*0.50,
},
num:{
  top:sizes.screenHeight*0.54,
  ...Platform.select({
    ios: {
        top:sizes.screenHeight*0.54,
        paddingHorizontal:sizes.screenWidth*0.06,
    },
  
  }),
  
},
number:{
  fontFamily: "poppins",
  color: "#7BCFF6",
  fontSize: fontSize.h5,
  fontWeight: "700"
}



})

    



