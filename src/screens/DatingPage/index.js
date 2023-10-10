import React, { useState,useEffect } from 'react'
import { FlatList, View, Text, StyleSheet, ScrollView, 
  Image, TouchableOpacity, ImageBackground, Alert,SafeAreaView,Platform } from 'react-native'
import { sizes, fontSize } from '../../utilities'
import DP from '../../Assets/photo.png';
import DP1 from '../../Assets/stroy.jpg';
import DP2 from '../../Assets/DP2.jpg';
import DP3 from '../../Assets/DP3.jpg';
import DP4 from '../../Assets/DP4.jpg';
import Plusicon from "../../Assets/Plusicon.png"
import Img from '../../Assets/stoiesome.png'
import { AppHeader, Filter, TabBar } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';




const DATA = [
  {
    id: 1,
    image: DP,
    name: "Bri",
    icon: Plusicon,
    user: true,
    
  },
  {
    id: 2,
    image: DP1,
    name: 'Ava',
  },
  {
    id: 3,
    image: DP2,
    name: 'sopia',
  },
  {
    id: 4,
    image: DP3,
    name: 'Adam',
  },
  {
    id: 5,
    image: DP4,
    name: 'Brian',
  },
];

const postDATA = [
  {
    id: 1,
    image: DP3,
    name: 'Emma',
    backgroundimage: DP3,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",

    intrest: "Travel"

  },
  {
    id: 2,
    image: DP1,
    backgroundimage: DP1,
    name: 'Ava',
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    intrest: "Travel"

  },
  {
    id: 3,
    image: DP2,
    backgroundimage: DP2,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    intrest: "Travel",
    name: 'sopia',
  },
  {
    id: 4,
    image: DP3,
    backgroundimage: DP3,
    name: 'Adam',
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    intrest: "food"
  },
  {
    id: 5,
    image: DP4,
    backgroundimage: DP4,
    name: 'Brian',
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    intrest: "fashion"
  },
];


const PostImage = ({ backgroundimage, image, name, des, intrest }) => {


  return (

    <ImageBackground source={backgroundimage} resizeMode='cover' style={styles.stories}>


      <TouchableOpacity style={styles.smbol}>
        <Text style={styles.txx}>{intrest}</Text>
      </TouchableOpacity>
      <View style={styles.dptxt}>
        <Text style={styles.dptt}>{des}</Text>
      </View>
      <SafeAreaView style={styles.showDp}>

        <View style={styles.profile1}>

          <Image
            source={image}
            style={{ width: "100%", height: "100%"}}

          />

        </View>
        <View>

          <Text style={styles.dptt1}>{name}</Text>
        </View>

      </SafeAreaView>

    </ImageBackground>





  )


}





const Item = ({ name, image, ion,user }) => {
 
  const userData = useSelector((state) => state.user);
  const navigation = useNavigation();

  const [userImage, setUserImage] = useState();
  useEffect(() => {
    // Function to retrieve the user image from AsyncStorage
    const fetchUserImage = async () => {
      try {
        // Retrieve the image URL from the userData object
        const imageUri = userData.user.imageUri; // Replace with your image property

        if (imageUri) {
          // If an image URL is found in userData, set it in the state
          setUserImage(imageUri);
        }
      } catch (error) {
        console.error('Error fetching user image:', error);
      }
    };
console.log(userImage,"==>");


    // Call the function to fetch the user image
    fetchUserImage();
  }, [userData]);


 
  
  const UploadStori = () => {

    let option = {

        storageoption: {
            path: "images"
        }
    }

    launchImageLibrary(option, async (response) => {
        if (response.assets && response.assets.length > 0) {
        const uri = response?.assets[0].uri;
        // Navigate to the "ViewStory" screen and pass the image URI
        navigation.navigate("view", { imageUri: uri });
        }
    })
}
  return (
    <SafeAreaView style={styles.StoryDiv}>

      <TouchableOpacity 
      style={styles.profile}
       onPress={()=>navigation.navigate("view")}  
      >

        <Image
          source={image}
          style={{ width: "100%", height: "100%" }}
          resizeMode='center'
          
        />


      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>


    <TouchableOpacity
    onPress={UploadStori}
    style={styles.icon}
    
    >
      <Image
        source={ion}
        />
    </TouchableOpacity>

    </SafeAreaView>

  )
}




function DatingPage({ navigation }) {
  
 
 
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={{ backgroundColor: "#fff", paddingBottom: sizes.screenHeight * 0.06 }} >
        <AppHeader openModal={openModal} />

        <View style={styles.Story}
    
        >
            
          <View style={styles.mainStor}
               onPress={()=>navigation.navigate("view")}
          >



            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DATA}

              renderItem={({ item }) => <Item image={item.image} name={item.name} ion={item.icon} />}
              keyExtractor={item => item.id}
            />



          </View>
        </View>
        <View style={styles.bgbtn}>
          <View style={styles.btnDiv}>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => navigation.navigate("msgs")}
            >
              <Text style={styles.txx1}>Search partners</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2}
              onPress={() => navigation.navigate("swippage")}

            >
              <Text style={styles.txx2}>Make  friends </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.showDiv}>
          <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={postDATA}

            renderItem={({ item }) => <PostImage backgroundimage={item.backgroundimage} image={item.image} name={item.name} des={item.des} intrest={item.intrest}
            //  ICON={item.user ? ICON : ""}
            />}
            keyExtractor={item => item.id}
          />
        </View>



      </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
          <TabBar />
        </View>
      <Filter isModalVisible={isModalVisible} closeModal={closeModal} />

    </>






  )
}


const styles = StyleSheet.create({

  Story: {

    width: sizes.screenWidth * 1,
    height: sizes.screenHeight * 0.18,
    backgroundColor: "#fff"
  },
  StoryDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: sizes.screenWidth * 0.3,
    // height: sizes.screenHeight * 0.4,
    // marginHorizontal:sizes.screenWidth * -0.028,
    backgroundColor: "#fff"
  },
  mainStor: {
    flexDirection: "row"
  },
  profile: {
    width: sizes.screenWidth * 0.22,
    height: sizes.screenHeight * 0.10,
    // backgroundColor:"#fff",
    marginVertical: sizes.screenHeight * 0.01,
    marginHorizontal: sizes.screenWidth * 0.03,
    borderColor: "#88CFF1",
    borderWidth: 2,
    borderRadius: 90,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        width: sizes.screenWidth * 0.20,
        height: sizes.screenHeight * 0.09,
        // backgroundColor:"#fff",
        marginVertical: sizes.screenHeight * 0.01,
        marginHorizontal: sizes.screenWidth * 0.03,
        borderColor: "#88CFF1",
        borderWidth: 2,
        borderRadius: 90,
        overflow: 'hidden',
      },
    
    }),

  },
  text: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: fontSize.medium,
    fontFamily: "popin",
    fontWeight: "900",
    right: sizes.screenWidth * 0.02,
    color: "#000"
  },

  img: {

    width: sizes.screenWidth * 0.18,
    height: sizes.screenHeight * 0.09,
    alignItems: "center",
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: sizes.screenWidth * 0.005,
    marginVertical: sizes.screenWidth * 0.005,


  },
  icon: {


    flexDirection: "row",
    left: sizes.screenWidth * 0.21,
    bottom: sizes.screenHeight * 0.05,
    position: 'absolute',
    ...Platform.select({
      ios: {
        flexDirection: "row",
    left: sizes.screenWidth * 0.17,
    bottom: sizes.screenHeight * 0.03,
    position: 'absolute',
      },
    
    }),

  },
  showDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical:sizes.screenHeight*0.03,
    marginTop: sizes.screenHeight * 0.05,
    // marginBottom:sizes.screenHeight*0.16,
    height: sizes.screenHeight * 0.50


  },
  stories: {

    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.5,
    // backgroundColor: "white",
    marginVertical: sizes.screenHeight * 0.02,
    borderRadius: 10,
    paddingHorizontal: sizes.screenWidth * 0.03,
    paddingVertical: sizes.screenHeight * 0.02,
    ...Platform.select({
      ios: {
        width: sizes.screenWidth * 0.9,
        height: sizes.screenHeight * 0.5,
        // backgroundColor: "white",
        marginVertical: sizes.screenHeight * 0.02,
        borderRadius: 10,
        paddingHorizontal: sizes.screenWidth * 0.03,
        paddingVertical: sizes.screenHeight * 0.02,
        overflow:"hidden"
      },
    
    }),
  },
  smbol: {

    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.05,
    backgroundColor: "#CBCBCB",
    borderRadius: sizes.screenWidth * 0.125,
    opacity: 0.6,
    ...Platform.select({
      ios: {
        width: sizes.screenWidth * 0.2,
        height: sizes.screenHeight * 0.04,
        backgroundColor: "#CBCBCB",
        borderRadius: sizes.screenWidth * 0.125,
        opacity: 0.7,
      },
    
    }),
  },
  txx: {
    textAlign: "center",
    color: "#fff",
    fontSize: fontSize.medium,
    fontWeight: "800",
    marginVertical: sizes.screenHeight * 0.009,
    fontFamily: "popin",
    borderColor: "#fff",
    ...Platform.select({
      ios: {
        textAlign: "center",
        color: "#fff",
        fontSize: fontSize.medium,
        fontWeight: "800",
        marginVertical: sizes.screenHeight * 0.009,
        fontFamily: "popin",
        borderColor: "#fff",
      },
    
    }),
  },
  storImg: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.5,
    borderRadius: 20,
    //  opacity:0.2
    ...Platform.select({
      ios: {
        width: sizes.screenWidth * 0.9,
        height: sizes.screenHeight * 0.5,
        borderRadius: 20,
      },
    
    }),

  },
  dptxt: {
    justifyContent: 'flex-end',
    // width: sizes.screenWidth * 0.65,
    height: sizes.screenHeight * 0.25,
    // backgroundColor:"#000",
    // marginHorizontal: sizes.screenHeight * 0.06,
    // marginVertical: sizes.screenWidth * -0.45,
  },
  dptt: {

    color: "#fff",
    fontSize: fontSize.h6,
    fontWeight: "900",
    marginVertical: sizes.screenHeight * -0.06
  },
  showDp: {

    width: sizes.screenWidth * 0.6,
    height: sizes.screenHeight * 0.10,

    // marginHorizontal: sizes.screenHeight * 0.05,
    // marginVertical: sizes.screenWidth * 0.35,
    flexDirection: "row",
    marginTop: sizes.screenHeight * 0.08,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        width: sizes.screenWidth * 0.10,
        height: sizes.screenHeight * 0.10,
        // marginHorizontal: sizes.screenHeight * 0.05,
        // marginVertical: sizes.screenWidth * 0.35,
        flexDirection: "row",
        marginTop: sizes.screenHeight * 0.08,
        alignItems: 'center',
      },
    
    }),


  },
  profile1: {

    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.06,
    backgroundColor: "#fff",
    // marginVertical: sizes.screenHeight * 0.015,
    // marginHorizontal: sizes.screenWidth * 0.02,
    borderColor: "#88CFF1",
    borderWidth: 2,
    borderRadius: 50,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        width: sizes.screenWidth * 0.12,
        height: sizes.screenHeight * 0.055,
        backgroundColor: "#fff",
        // marginVertical: sizes.screenHeight * 0.015,
        // marginHorizontal: sizes.screenWidth * 0.02,
        borderColor: "#88CFF1",
        borderWidth: 2,
        borderRadius: 50,
        overflow: 'hidden',
      },
    
    }),
  },
  img1: {
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.07,
    alignItems: "center",
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: sizes.screenWidth * -0.005,
    marginVertical: sizes.screenHeight * -0.002


  },
  dptt1: {

    color: "#fff",
    fontSize: fontSize.h6,
    fontWeight: "900",
    marginVertical: sizes.screenHeight * 0.03,
    marginHorizontal: sizes.screenWidth * 0.03,
    textTransform: "capitalize",
    ...Platform.select({
      ios: {
        color: "#fff",
        fontSize: fontSize.medium,
        fontWeight: "900",
        marginVertical: sizes.screenHeight * 0.03,
        marginHorizontal: sizes.screenWidth * 0.01,
        width: sizes.screenWidth * 0.4,
        textTransform: "capitalize",
      },
    
    }),
  },
  btnDiv: {

    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    backgroundColor: "#88CFF1",
    borderRadius: 10,
    marginHorizontal: sizes.screenWidth * 0.05,
    flexDirection: "row"

  },
  btn1: {

    width: sizes.screenWidth * 0.45,
    height: sizes.screenHeight * 0.05,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: sizes.screenHeight * 0.005,
    marginHorizontal: sizes.screenWidth * 0.007,
  },
  txx1: {

    textAlign: "center",
    color: "#88CFF1",
    fontSize: fontSize.medium,
    fontWeight: "700",
    marginVertical: sizes.screenHeight * 0.009,
    marginHorizontal: sizes.screenWidth * 0.06,
    fontFamily: "popin",
    ...Platform.select({
      ios: {
        textAlign: "center",
        color: "#88CFF1",
        fontSize: fontSize.medium,
        fontWeight: "700",
        marginVertical: sizes.screenHeight * 0.009,
        marginHorizontal: sizes.screenWidth * 0.06,
      },
    
    }),
  },
  btn2: {

    width: sizes.screenWidth * 0.4,
    height: sizes.screenHeight * 0.05,
    backgroundColor: "#88CFF1",
    borderRadius: 10,
    marginVertical: sizes.screenHeight * 0.005,
    marginHorizontal: sizes.screenWidth * 0.007,
  },
  txx2: {

    textAlign: "center",
    color: "#fff",
    fontSize: fontSize.medium,
    fontWeight: "700",
    marginVertical: sizes.screenHeight * 0.009,
    marginHorizontal: sizes.screenWidth * 0.06,
    fontFamily: "popin",

  },
  bgbtn: {

    backgroundColor: "#fff"
  }

})

export default DatingPage