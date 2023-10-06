import React from 'react'
import { FlatList, TextInput, View, Text, StyleSheet,  ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { fontSize, sizes } from '../../utilities';
import intrest from "../../Assets/intrest.png"
import { SafeAreaView } from 'react-native-safe-area-context';

const TodaysData = [
    {

    }
]





const MatchScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headermessage}>
                <View style={styles.viewicon}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name="chevron-left" size={30} color={"#7BCFF6"} />
                    </TouchableOpacity>
                </View>
                <View><Text style={styles.hedmesstitle}>Matches</Text></View>
                <View style={styles.viewiconfilter}><FontAwesome name="sliders" size={30} color={"#88CFF1"} /></View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>This is a list of people who have liked you and your matches.</Text>
            </View>
            <ScrollView>
                <View style={styles.todaysContainer}>
                    <View style={styles.tchildcontainer}>
                        <Text style={{
                            width: sizes.screenWidth*0.3,
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }} /><Text style={{ fontSize: 20, top: 8, }}>Todays</Text>
                        <Text style={{
                           width: sizes.screenWidth*0.3,
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }} />
                    </View>
                    <View style={styles.intrestprofilecontainer}>
                        <View style={{ marginVertical: sizes.screenHeight * 0.01, flexDirection: 'row', flexWrap: 'wrap', paddingBottom: sizes.screenHeight*0.09,justifyContent:'center', }}>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: "#fff", textTransform: 'capitalize', fontSize: fontSize.medium }}>name,  24</Text></View>
                                <View blurRadius={50} style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                        </View>

                    </View>

                </View>
                <View style={styles.todaysContainer}>
                    <View style={styles.tchildcontainer}>
                        <Text style={{
                           width: sizes.screenWidth*0.3,
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }} /><Text style={{ fontSize: 20, top: 8, paddingHorizontal: sizes.screenWidth * 0.06 }}>Yesterday</Text>
                        <Text style={{
                          width: sizes.screenWidth*0.3,
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }} />
                    </View>
                    <View style={styles.intrestprofilecontainer}>
                        <View style={{ marginVertical: sizes.screenHeight * 0.03, flexDirection: 'row', flexWrap: 'wrap', paddingBottom: sizes.screenHeight*0.09,justifyContent:'center' }}>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                            <ImageBackground style={styles.profileimage} resizeMode='cover' source={intrest}>

                                <View blurRadius={9} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#000", paddingHorizontal: 20, paddingVertical: 0 }}>
                                    <View><Entypo name="cross" size={40} color="#fff" /></View>
                                    <View><Entypo name="heart" size={40} color="#fff" /></View>
                                </View>

                            </ImageBackground>
                        </View>

                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default MatchScreen
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: sizes.screenWidth * 0.03,
        paddingVertical: sizes.screenHeight * 0.03,
    },
    profileimage: {
        justifyContent: 'flex-end',
        width: sizes.screenWidth * 0.4,
        height: sizes.screenHeight * 0.25,
        borderRadius: 50,
        marginHorizontal: sizes.screenWidth * 0.02,
        marginVertical: sizes.screenHeight * 0.02,
    },
    textContainer: {
        marginHorizontal: sizes.screenWidth * 0.05,
        marginVertical: sizes.screenHeight * 0.02,
    },
    headermessage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    viewicon: {
        width: sizes.screenWidth * 0.10,
        height: sizes.screenHeight * 0.05,
        borderWidth: 1,
        // padding: 10,
        borderRadius: 10,
        borderColor: "#E8E6EA",
        // backgroundColor:"red",
        justifyContent: 'center',
        alignItems: 'center',
    },
    hedmesstitle: {
        fontSize: fontSize.h1,
        fontWeight: '700',
        color: "#000",
        textTransform: 'capitalize'
    },
    viewiconfilter: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: "#E8E6EA"
    },
    text: {
        fontSize: fontSize.medium,
        fontWeight: '400',
        color: "#000",
        // textTransform: 'capitalize'
    },
    tchildcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    }
})