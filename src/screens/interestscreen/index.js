import React, { useState,useEffect } from 'react'
import { Text, View, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, TextInput, Alert } from 'react-native'
import { colors, sizes, fontSize } from '../../utilities';
import background from '../../Assets/background.png';
import { Arrowback } from '../../components';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign';

const IntrestScreen = ({navigation}) => {
    const [Photography, setPhotography] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const [Shopping, setShopping] = useState(null);
    const [Karaoke, setKaraoko] = useState(null);
    const [Yoga, setyoga] = useState(null);
    const [Cooking, setCooking] = useState(null);
    const [Tennis, setTennis] = useState(null);
    const [Run, setRun] = useState(null);
    const [Swimming, setSwimming] = useState(null);
    const [Art, setArt] = useState(null);
    const [Traveling, setTraveling] = useState(null);
    const [Extreme, setExtreme] = useState(null);
    const [Music, setMusic] = useState(null);
    const [Drink, setDrink] = useState(null);
    const [VideoGame, setvideoGame] = useState(null);

    useEffect(() => {
        // This will log the current value of Photography whenever it changes.
        console.log(Shopping,Photography,Karaoke,Cooking,Tennis,Run,Swimming,Art,Traveling,Extreme,Music,Drink,VideoGame,"====>useeffect");
      }, [Photography,Shopping,Karaoke,Yoga,Cooking,Tennis,Run,Swimming,Art,Traveling,Extreme,Music,Drink,VideoGame]);
    const handleToggleValue = () => {
            if(!Photography){
                setPhotography("Photography")
            }
            else{
                setPhotography(null)
            }
          
      

        console.log(Photography);

    }

    const handleToggleShopping = () => {
        if(!Shopping){
            setShopping("Shopping")
        }
        else{
           
            setShopping(null)
        }
  

    console.log(Shopping);

}


const handleToggleKarako = () => {
    if(!Karaoke){
        setKaraoko("Karaoke")
    }
    else{
       
        setKaraoko(null)
    }


console.log(Karaoke);

}

const handleToggleCooking = () => {
    if(!Cooking){
        setCooking("Cooking")
    }
    else{
       
        setCookingetyoga(null)
    }


console.log(Cooking);

}


const handleToggleTennis = () => {
    if(!Tennis){
        setTennis("Tennis")
    }
    else{
       
        setTennis(null)
    }


console.log(Tennis);

}



const handleToggleYoga = () => {
    if(!Yoga){
        setyoga("Yoga")
    }
    else{
       
        setyoga(null)
    }


console.log(Yoga);

}



const handleToggleRun = () => {
    if(!Run){
        setRun("Run")
    }
    else{
       
        setRun(null)
    }


console.log(Run);

}



const handleToggleSwim = () => {
    if(!Swimming){
        setSwimming("Swimming")
    }
    else{
       
        setSwimming(null)
    }


console.log(Swimming);

}




const handleToggleArt = () => {
    if(!Art){
        setArt("Art")
    }
    else{
       
        setArt(null)
    }


console.log(Art);

}



const handleToggleTraveling = () => {
    if(!Traveling){
        setTraveling("Traveling")
    }
    else{
       
        setTraveling(null)
    }


console.log(Traveling);

}


const handleToggleExtreme = () => {
    if(!Extreme){
        setExtreme("Traveling")
    }
    else{
       
        setExtreme(null)
    }


console.log(Extreme);

}


const handleToggleMusic = () => {
    if(!Music){
        setMusic("Music")
    }
    else{
       
        setMusic(null)
    }


console.log(Music);

}



const handleToggleDrink = () => {
    if(!Drink){
        setDrink("Drink")
    }
    else{
       
        setDrink(null)
    }


console.log(Drink);

}




const handleToggleGame = () => {
    if(!VideoGame){
        setvideoGame("Video Game")
    }
    else{
       
        setvideoGame(null)
    }


console.log(VideoGame);

}
 const handlepop=()=>{
    setModalVisible(!isModalVisible)
 }


    return (<>
            
        <SafeAreaView style={styles.containerintr}>
        <View>
            <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                    <View style={styles.container}>
                        <View style={styles.head}>
                            <Text style={styles.cardText}>Get Mingle Gold</Text>
                        </View>


                        <View style={styles.heart}>
                            <View style={styles.iconDiv}>
                                <View><AntDesign name="heart" size={18} color={"white"} /></View>
                            </View>

                            <View style={styles.textDivv}>
                                <Text style={styles.cardText} >
                                    Unlock All Interest
                                </Text>
                            </View>
                            <View style={styles.tdiV}>
                                <Text style={styles.ttt}>MATCH to ANY INTERESTS Send as many likes </Text>
                                <Text style={styles.ttt1}>as you like</Text>
                            </View>

                            <View style={styles.paymentcontainer}>
                                <TouchableOpacity 
                                     style={ [styles.paymentfocus, styles.paymentbox]}  ><Text style={styles.paymenttext}>12</Text><Text style={styles.paymonth}>months</Text><Text style={styles.payyear}>$09/yr</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.paymentfocus}><Text style={styles.paymenttextactive}>1</Text><Text style={styles.paymonthactive}>months</Text><Text style={styles.payyearactive}>$1/mo</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.paymentbox}><Text style={styles.paymenttext}>6</Text><Text style={styles.paymonth}>months</Text><Text style={styles.payyear}>$4/mo</Text></TouchableOpacity>
                            </View>

                        </View>
                        <View style={styles.sbcontainer}>
                                <TouchableOpacity onPress={()=>{setModalVisible(false)}}>
                            <View style={styles.btn}>
                                    <Text style={styles.btnText}>subscribe</Text>
                            </View>
                                    </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </Modal>
            {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
            <Arrowback />

            <View style={styles.logincontainer}>
                {/* <Text style={styles.loginText}>Login</Text> */}
                <Text style={styles.enternumberText}>Your interests</Text>
                <Text style={styles.para}>Select any 3 or subscribe to a premium plan to send match to any interests.</Text>

            </View>

            <View style={styles.bechbackground}>
                <TouchableOpacity onPress={ handleToggleValue} style={Photography?styles.iboxActive:styles.ibox}><Feather style={Photography?styles.iconColorActive:styles.iconColor} name={"camera"} size={20} /><Text style={Photography? styles.hobbyactive: styles.hobby}>Photography</Text></TouchableOpacity>
                <TouchableOpacity onPress={ handleToggleShopping} style={Shopping?styles.iboxActive:styles.ibox}><MaterialCommunityIcons style={Shopping?styles.iconColorActive:styles.iconColor} name={"shopping"} size={20} /><Text style={Shopping? styles.hobbyactive:styles.hobby}>Shopping</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleToggleKarako} style={Karaoke?styles.iboxActive:styles.ibox}><FontAwesome5 style={Karaoke?styles.iconColorActive:styles.iconColor} name={"microphone"} size={20} /><Text style={Karaoke? styles.hobbyactive:styles.hobby}>Karaoke</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleToggleYoga} style={Yoga?styles.iboxActive:styles.ibox}><Ionicons style={Yoga?styles.iconColorActive:styles.iconColor} name={"color-filter-outline"} size={20} /><Text style={Yoga? styles.hobbyactive:styles.hobby}>Yoga</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleToggleCooking} style={Cooking?styles.iboxActive:styles.ibox}><Feather style={Cooking?styles.iconColorActive:styles.iconColor} name={"coffee"} size={20} /><Text style={Cooking? styles.hobbyactive:styles.hobby}>Cooking</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleToggleTennis} style={Tennis?styles.iboxActive:styles.ibox}><Ionicons style={Tennis?styles.iconColorActive:styles.iconColor} name={"tennisball-outline"} size={20} /><Text style={Tennis? styles.hobbyactive:styles.hobby}>Tennis</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleToggleRun} style={Run?styles.iboxActive:styles.ibox}><FontAwesome5 style={Run?styles.iconColorActive:styles.iconColor} name={"running"} size={20} /><Text style={Run? styles.hobbyactive:styles.hobby}>Run</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleToggleSwim} style={Swimming?styles.iboxActive:styles.ibox}><FontAwesome5 style={Swimming?styles.iconColorActive:styles.iconColor} name={"swimmer"} size={20} /><Text style={Swimming? styles.hobbyactive:styles.hobby}>Swimming</Text></TouchableOpacity>
                <TouchableOpacity onPress={ handleToggleArt} style={Art?styles.iboxActive:styles.ibox}><Ionicons style={Art?styles.iconColorActive:styles.iconColor} name={"color-palette-outline"} size={20} /><Text style={Art? styles.hobbyactive:styles.hobby}>Art</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleToggleTraveling } style={Traveling?styles.iboxActive:styles.ibox}><MaterialIcons style={Traveling?styles.iconColorActive:styles.iconColor} name={"area-chart"} size={20} /><Text style={Traveling? styles.hobbyactive:styles.hobby}>Traveling</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleToggleExtreme } style={Extreme?styles.iboxActive:styles.ibox}><MaterialCommunityIcons style={Extreme?styles.iconColorActive:styles.iconColor} name={"parachute"} size={20} /><Text style={Extreme? styles.hobbyactive:styles.hobby}>Extreme</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleToggleMusic} style={Music?styles.iboxActive:styles.ibox}><Feather style={Music?styles.iconColorActive:styles.iconColor} name={"music"} size={20} /><Text style={Music? styles.hobbyactive:styles.hobby}>Music</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleToggleDrink} style={Drink?styles.iboxActive:styles.ibox}><Entypo style={Drink?styles.iconColorActive:styles.iconColor} name={"drink"} size={20} /><Text style={Drink? styles.hobbyactive:styles.hobby}>Drink</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleToggleGame} style={VideoGame?styles.iboxActive:styles.ibox}><FontAwesome5 style={VideoGame?styles.iconColorActive:styles.iconColor} name={"gamepad"} size={20} /><Text style={VideoGame? styles.hobbyactive:styles.hobby}>Video games</Text></TouchableOpacity>


            </View>
            <View style={styles.intrestbuttonContainer}>
                <TouchableOpacity onPress={handlepop} style={styles.ButtonCont}>
                    <Text style={styles.ButtonContText}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonPremium}
                    onPress={navigation.navigate("pay")}
                >
                    <Text style={styles.ButtonPremiumtext}>Buy Premium</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    </>
    )
}


const styles = StyleSheet.create({


    container: {
        width: sizes.screenWidth * 0.9,
        height: sizes.screenHeight * 0.7,
        backgroundColor: "white",
        borderRadius: 20,


    },
    head: {

        width: sizes.screenWidth * 0.9,
        height: sizes.screenHeight * 0.05,
        justifyContent: "center",
        alignItems: "center",


    },
    cardText: {

        fontSize: fontSize.large,
        fontWeight: "700",
        color: "#88CFF1",
        marginVertical:sizes.screenHeight*0.01
    },
    heart: {


        justifyContent: "center",
        alignItems: "center",

    },
    iconDiv: {

        width: sizes.screenWidth * 0.09,
        height: sizes.screenHeight * 0.05,
        backgroundColor: "#CBA22F",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    textDiv: {
        width: sizes.screenWidth * 0.7,
        height: sizes.screenHeight * 0.05,
        marginHorizontal: sizes.screenHeight * 0.01,
        flexDirection: 'column',

    },
    areaText: {
        width: sizes.screenWidth * 0.7,
        height: sizes.screenHeight * 0.05,
        marginHorizontal: sizes.screenHeight * 0.01,
        // justifyContent:'center',
        // alignItems:"center"
    },
    tdiV: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    ttt: {
        fontFamily: "popin",
        color: "black",
        fontWeight: '400',
        marginVertical:sizes.screenHeight * 0.01
    },

    ttt1:{

        fontFamily: "popin",
        color: "black",
        fontWeight: '400',
     
    },
    paymentcontainer: {
        flexDirection: 'row',
        marginVertical: sizes.screenHeight * 0.04
    },
    paymentbox: {

        width: sizes.screenWidth * 0.26,
        height: sizes.screenHeight * 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: sizes.screenWidth * 0.01,
        backgroundColor: "#F6F6F6"
    },
    paymentbox: {
        width: sizes.screenWidth * 0.26,
        height: sizes.screenHeight * 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: sizes.screenWidth * 0.01,
        backgroundColor: "#F6F6F6"
    },
    paymentfocus: {
        borderWidth: 1,
        width: sizes.screenWidth * 0.26,
        height: sizes.screenHeight * 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: sizes.screenWidth * 0.01,
        backgroundColor: "white",
        borderColor:"#88CFF1"
    },
    paymenttext: {
        fontSize: fontSize.h4,
        color: "black",
        fontWeight: '700'
    },
    paymenttextactive: {
        fontSize: fontSize.h4,
        color: "#88CFF1",
        fontWeight: '700'
    },
    paymonth: {
        fontSize: fontSize.h5,
        color: "black",
        fontWeight: '700'
    },
    paymonthactive: {
        fontSize: fontSize.h5,
        color: "#88CFF1",
        fontWeight: '700'
    },
    payyearactive: {
        fontSize: fontSize.h5,
        color: "#88CFF1",
        fontWeight: '700'
    },
    sbcontainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        width:sizes.screenWidth * 0.8,
        height:sizes.screenHeight * 0.06,
        backgroundColor:"#88CFF1",
        alignItems:"center",
        borderRadius:20,
        justifyContent:"center"
    },
    btnText:{

         fontSize:fontSize.h5,
         fontFamily:"popin",
         fontWeight:"700",
         color:"#fff"
    },


    containerintr: {
        flex: 1,
        padding: 5,
        backgroundColor: "white"
    },
    bechbackground: {
        // backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: sizes.screenWidth * 0.02,
        paddingVertical: sizes.screenHeight * 0.03,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    ibox: {
        borderWidth: 1,
        flexDirection: 'row',
        marginHorizontal: sizes.screenWidth * 0.02,
        marginVertical: sizes.screenHeight * 0.01,
        width: sizes.screenWidth * 0.4,
        paddingVertical: sizes.screenHeight * 0.01,
        paddingHorizontal: sizes.screenWidth * 0.04,
        borderRadius: 20,
        color: "black",
        backgroundColor: "white"

    },
    iboxActive: {
        borderWidth: 1,
        flexDirection: 'row',
        marginHorizontal: sizes.screenWidth * 0.02,
        marginVertical: sizes.screenHeight * 0.01,
        width: sizes.screenWidth * 0.4,
        paddingVertical: sizes.screenHeight * 0.01,
        paddingHorizontal: sizes.screenWidth * 0.04,
        borderRadius: 20,
        color: "white",
        backgroundColor: "#7BCFF6",
        borderColor:"#7BCFF6"

    },
    iconColor: {
        color: "#7BCFF6",
    },
    iconColorActive: {
        color: "white",
    },
    hobby: {
        color:"black",
        fontWeight:'600',
        fontFamily:"popin",

        paddingHorizontal: sizes.screenWidth * 0.02,
    },
    hobbyactive: {
        color:"white",
        fontWeight:'600',
        fontFamily:"popin",
        paddingHorizontal: sizes.screenWidth * 0.02,
    },
    enternumberText: {
        marginVertical: sizes.screenHeight * 0.01,
        fontFamily: "poppins",
        color: "#7BCFF6",
        fontSize: fontSize.h4,
        fontWeight: "700"

    },
    inputnumber: {
        justifyContent: "center",
        alignItems: "center",
    },
    logincontainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        marginHorizontal: sizes.screenWidth * 0.08

    },
    loginText: {
        fontFamily: "poppins",
        color: "#7BCFF6",
        fontSize: fontSize.h1,
        fontWeight: '700'
    },
    para: {

        fontSize: fontSize.medium,
        color: "#000",
        fontFamily: "popin"

    },
    intrestbuttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonCont: {
        borderWidth: 1,
        width: sizes.screenWidth * 0.5,
        height: sizes.screenHeight * 0.05,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: sizes.screenHeight * 0.01,
        backgroundColor: "#7BCFF6",
        borderColor: "#7BCFF6"

    },
    ButtonPremium: {
        borderWidth: 1,
        width: sizes.screenWidth * 0.5,
        height: sizes.screenHeight * 0.05,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#7BCFF6"
        // marginVertical:sizes.screenHeight*0.01

    },
    ButtonContText: {
        fontFamily: "popin",
        fontWeight: '700',
        color: "white"

    },
    ButtonPremiumtext: {
        fontFamily: "popin",
        fontWeight: '700',
        color: "#7BCFF6"
    }

})

export default IntrestScreen
