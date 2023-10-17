import React,{useEffect, useState} from 'react'
import { FlatList, TextInput, View, Text, StyleSheet, 
    ScrollView, Image, TouchableOpacity, ImageBackground,SafeAreaView } from 'react-native'
import { sizes, fontSize } from '../../utilities'
import { AppHeader, TabBar } from '../../components'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import DP1 from '../../Assets/DP3.jpg'
import DP2 from '../../Assets/3.jpg'
import DP3 from '../../Assets/4.jpg'
import DP4 from '../../Assets/5.jpg'
import DP5 from '../../Assets/9.jpg'
import DP6 from '../../Assets/10.jpg'
import DP7 from '../../Assets/11.jpg'
import { FullWindowOverlay } from 'react-native-screens';
import { useNavigation } from '@react-navigation/native';




const DATA = [
    {
        id: 1,
        image: DP1,
        name: 'Emma',
    },
    {
        id: 2,
        image: DP2,
        name: 'Ava',
    },
    {
        id: 3,
        image: DP3,
        name: 'sopia',
    },
    {
        id: 4,
        image: DP4,
        name: 'Adam',
    },
    {
        id: 5,
        image: DP5,
        name: 'Brian',
    },
];
const UserData = [
    {
        id: 1,
        image: DP1,
        name: 'Emma',
        message: "ok see you then"
    },
    {
        id: 2,
        image: DP2,
        name: 'Ava',
        message: "...."
    },
    {
        id: 3,
        image: DP3,
        name: 'sopia',
        message: "ok see you then"
    },
    {
        id: 4,
        image: DP4,
        name: 'Adam',
        message: null
    },
    {
        id: 5,
        image: DP5,
        name: 'Brian',
        message: null
    },
    {
        id: 6,
        image: DP6,
        name: 'martin',
        message: "hello...",
    },
    {
        id: 7,
        image: DP7,
        name: 'alex',
        message: "ok see you then"
    },
];
const Item = ({ name, image, message }) => {
    
    
    const navigation = useNavigation()
   return (

    
    <SafeAreaView style={styles.storiescontainer}>
        <TouchableOpacity style={styles.col} onPress={() => navigation.navigate("view")}>
            <View style={styles.imageconm}>
                <Image 
                source={image}
                resizeMode='cover'
                style={{width:"100%",height:"100%"}}
                //  style={styles.imagecon}
                  />

            </View>
            <Text style={styles.proname}>{name}</Text>
        </TouchableOpacity>
    </SafeAreaView>
)

};

const ChatBox = ({ image, name, message }) =>{
    const navigation = useNavigation()
    const handleChatBoxPress = () => {
        // Send the specific name to the next screen
        navigation.navigate("textsrcn", { name });
      };

    return(
        (
   
            <SafeAreaView style={styles.colchat}>
                <TouchableOpacity style={styles.imageconmess}
                onPress={handleChatBoxPress}
                
                >
                    <Image source={image}
                    resizeMode='cover'
                    style={{width:"100%",height:"100%"}}
                    //  style={styles.imagecon1}
                      />
        
                </TouchableOpacity>
                <TouchableOpacity onPress={handleChatBoxPress} style={styles.brdbottom}
                
                
                >
                    <View style={styles.nameandmess}>
                        <Text style={styles.proname}>{name}</Text>
                        <Text style={styles.pronamessage}>{message}</Text>
                    </View>
                    {message != null ? <View style={styles.messagenotification}><Octicons name="dot-fill" color="#88CFF1" size={30} /></View> : ""}
                </TouchableOpacity>
            </SafeAreaView>
        )
    )
}



const ChatScreen = () => {
    const navigation = useNavigation()
    const [text, onChangeText] = React.useState('Useless Text');
    const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState(UserData);

  // Function to handle search input change
  const handleSearchInputChange = (text) => {
    setSearchInput(text);

    // Filter the data based on the search input
    const filtered = UserData.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredData(filtered);
  };

    // Fetch user data from the API
    // useEffect(() => {
    //     axios.get('/api/users') // Replace with your API endpoint
    //       .then((response) => {
    //         setFilteredData(response.data);
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching user data:', error);
    //       });
    //   }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headermessage}>
                    <View style={styles.viewicon}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Entypo name="chevron-left" size={30} color={"#7BCFF6"} />
                    </TouchableOpacity>
                        </View>
                <View><Text style={styles.hedmesstitle}>message</Text></View>
                <View style={styles.viewiconfilter}><FontAwesome name="sliders" size={30} color={"#88CFF1"} /></View>
            </View>
            <View style={styles.searchView}>
                <View style={styles.searchView1}>

                    <View><AntDesign name="search1" size={30} color={"#E8E6EA"} /></View>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleSearchInputChange}
                        placeholder='Search Friends'
                        placeholderTextColor={"#000"}
                        value={searchInput}
                    />
                </View></View>

            <View style={styles.activitiesview}>
                <View ><Text style={styles.activitestext}>Activities</Text></View>


                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                   


                    renderItem={({ item }) => <Item image={item.image} name={item.name} />}
                    keyExtractor={item => item.id}
                />



            </View>

        
                <View style={styles.msgtxt}>
                    <Text style={styles.messagetext}>Messages</Text>
                </View>


                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={filteredData}
                    renderItem={({ item }) => <ChatBox image={item.image} name={item.name} message={item.message} />}
                    keyExtractor={item => item.id}
                />



        </SafeAreaView>
    )
}

export default ChatScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: sizes.screenWidth * 0.03,
        paddingVertical: sizes.screenHeight * 0.02,
        backgroundColor: "#fff",
        ...Platform.select({
            ios: {
                flex: 1,
        paddingHorizontal: sizes.screenWidth * 0.05,
        paddingVertical: sizes.screenHeight * 0.02,
        backgroundColor: "#fff",
            },
          
          }),
    },
    headermessage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...Platform.select({
            ios: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal:sizes.screenWidth * 0.02,
              paddingVertical:sizes.screenHeight * 0.02
            },
          
          }),
    },
    viewicon: {
        width:sizes.screenWidth*0.10,
        height:sizes.screenHeight*0.05,
        borderWidth: 1,
        // padding: 10,
        borderRadius: 10,
        borderColor: "#E8E6EA",
        // backgroundColor:"red",
        justifyContent:'center',
        alignItems:'center',
    },
    viewiconfilter: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: "#E8E6EA"
    },
    hedmesstitle: {
        fontSize: fontSize.h1,
        fontWeight: '700',
        color: "#88CFF1",
        textTransform: 'capitalize'
    },
    searchView: {
        marginTop: sizes.screenHeight * 0.04,
        borderWidth: 1,
        flexDirection: 'row', alignItems: 'center',
        borderRadius: 10,
        borderColor: "#E8E6EA",
       
        
    },
    searchView1: {
        paddingHorizontal: sizes.screenWidth * 0.04,

        flexDirection: 'row', alignItems: 'center'
    },
    activitestext: {
        fontSize: fontSize.h4,
        fontWeight: '700',
        color: "#000",
        textTransform: 'capitalize',
        marginVertical:sizes.screenHeight*0.03
    },
    messagetext: {
        fontSize: fontSize.h5,
        fontWeight: '700',
        color: "#000",
        textTransform: 'capitalize'
    },
    msgtxt:{
      paddingHorizontal:sizes.screenWidth*0.04

    },
    activitiesview: {
        marginTop: sizes.screenHeight * 0.03,
        paddingHorizontal:sizes.screenWidth*0.03,
    },
    imagecon: {
        width: sizes.screenWidth * 0.22,
        height: sizes.screenHeight * 0.11,
        // borderWidth: 1,
        borderRadius: 40,
        borderWidth: 2,
        // borderColor: "#88CFF1",

    },
    imageconmess: {
        width: sizes.screenWidth * 0.20,
        height: sizes.screenHeight * 0.09,
        borderRadius: 75,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#88CFF1",
        marginHorizontal: sizes.screenWidth * 0.03,
        overflow:'hidden',
        ...Platform.select({
            ios: {
                width: sizes.screenWidth * 0.22,
                height: sizes.screenHeight * 0.10,
                borderRadius: 75,
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: "#88CFF1",
                marginHorizontal: sizes.screenWidth * 0.03,
                overflow:'hidden',
            },
          
          }),
    },
    imagecon1: {
        width: sizes.screenWidth * 0.16,
        height: sizes.screenHeight * 0.08,
        // borderWidth: 1,
        borderRadius: 40,
        borderWidth: 2,
        // borderColor: "#88CFF1",
    },
    imageconm: {
        // width: sizes.screenWidth * 0.22,
        // height: sizes.screenHeight * 0.10,
        // borderRadius: 100,
        // borderWidth: 2,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginHorizontal: sizes.screenWidth * 0.03,
        // overflow:'hidden',
        borderColor: "#88CFF1",
        width:  sizes.screenWidth * 0.22, // Adjust the size as needed
        height:sizes.screenHeight * 0.10, // Adjust the size as needed
        borderRadius: sizes.screenWidth * 0.125, // This will make it circular
        borderWidth: 2,
        borderColor: "#88CFF1",
        overflow: 'hidden', // Hide image overflow to make it circular
        ...Platform.select({
            ios: {
                marginHorizontal: sizes.screenWidth * 0.03,
                // overflow:'hidden',
                borderColor: "#88CFF1",
                width:  sizes.screenWidth * 0.22, // Adjust the size as needed
                height:sizes.screenHeight * 0.10, // Adjust the size as needed
                borderRadius: sizes.screenWidth * 0.125, // This will make it circular
                borderWidth: 2,
                borderColor: "#88CFF1",
                overflow: 'hidden',
            },
          
          }),

    },

    storiescontainer: {
        flexDirection: 'row',
        // paddingHorizontal:sizes.screenWidth*0.03,
        // marginVertical: sizes.screenHeight * 0.03,
        // borderWidth: 1,

    },
    col: {

        // maxWidth:100,
        alignItems: 'center',
    },
    colchat: {
        
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    proname: {
        fontSize: fontSize.h6,
        fontWeight: '700',
        color: "#000",
        textTransform: 'capitalize'
    },
    pronamessage: {
        fontSize: fontSize.large,

        color: "#000",
        textTransform: 'capitalize'
    },
    brdbottom: {
        height: sizes.screenHeight * 0.10,
        width: sizes.screenWidth * 0.7,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#E8E6EA",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    messagenotification: {
        justifyContent: 'center',
        alignItems: 'center',
        right:sizes.screenWidth*0.05,
    },
    nameandmess: {
        justifyContent: 'center',
        // alignItems:'center'
    },
    chatboxView: {
        flexDirection: 'column',
        marginTop: sizes.screenHeight * 0.02,
    },
    flathight: {
        height: sizes.screenHeight * 0.90,
        paddingBottom: sizes.screenHeight * 0.05
    },
    input:{
    //   backgroundColor:"red",
         color:"#000",
         width:sizes.screenWidth*0.8,
         ...Platform.select({
            ios: {
                paddingVertical:sizes.screenHeight*0.02,
                borderRadius:10,
                paddingHorizontal:sizes.screenWidth*0.06,
                color:"#000",
            },
          
          }),
    }
})