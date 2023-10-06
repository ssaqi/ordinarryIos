import React from 'react'

import { View, Text, StyleSheet, ScrollView, Image,SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native'
import { sizes, fontSize } from '../../utilities'
import { AppHeader, TabBar } from '../../components'
import date1 from '../../Assets/date1.png'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import g1 from '../../Assets/g1.png'
import g2 from '../../Assets/g2.png'
import g3 from '../../Assets/g3.png'
import g4 from '../../Assets/g4.png'
import g5 from '../../Assets/g5.png'








const UserProfile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imview}>
                <Image source={date1} style={{ width: "100%" }} />
            </View>
            <View style={styles.modalpro}>
                <View style={styles.likedislikeContainer}>
                    <View style={styles.iconview}><View style={styles.iconstyle}><Entypo name={"cross"} size={40} color={"black"} /></View></View>
                    <View style={styles.iconview}><View style={styles.iconstyleb}><Entypo name={"star"} size={50} color={"white"} /></View></View>
                    <View style={styles.iconview}><View style={styles.iconstyleb1}><Entypo name={"heart"} size={35} color={"white"} /></View></View>
                </View>
<ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.scroll}>
                <View style={styles.nameview}>
                    <View style={styles.viewname}>
                        <Text style={styles.name}>
                            Jessica Parker, 23
                        </Text>
                        <Text style={styles.status}>
                            Professional model
                        </Text>
                    </View>
                    <View style={styles.iconviewsend}>
                        <Feather name="send" size={30} color={"#88CFF1"} />
                    </View>
                </View>

                <View style={styles.nameview}>
                    <View style={styles.viewname}>
                        <Text style={styles.name}>
                            Location
                        </Text>
                        <Text style={styles.status}>
                            Chicago, IL United States
                        </Text>
                    </View>
                    <View style={styles.iconvkilom}>
                        <EvilIcons name="location" size={15} color={"#0087C8"} />
                        <Text style={styles.kmname}>15 km</Text>
                    </View>
                </View>
                <View style={styles.viewname}>
                    <Text style={styles.name}>
                        About
                    </Text>
                    <Text style={styles.statusphy}>
                        My name is Jessica Parker and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading..
                    </Text>
                    <Text style={styles.readmore}>Read more...</Text>
                </View>

                <View style={styles.intrstView}>
                    <Text style={styles.intrsttext}>
                        Intreset
                    </Text>
                    <View style={styles.intresView}>
                        <View style={styles.intrestpointbox}><Text style={styles.intrestesxactivet}><FontAwesome5 name={"check-double"} />Travelling</Text></View>
                        <View style={styles.intrestpointbox}><Text style={styles.intrestesxactivet}><FontAwesome5 name={"check-double"} />Books</Text></View>
                        <View style={styles.intrestpointbox}><Text style={styles.intrestesxt}>Music</Text></View>
                        <View style={styles.intrestpointbox}><Text style={styles.intrestesxt}>Dancing</Text></View>
                        <View style={styles.intrestpointbox}><Text style={styles.intrestesxt}>Modeling</Text></View>
                    </View>


                </View>

                <View>
                    <View style={styles.galrytext}>

                        <Text style={styles.galery}>Gallery</Text>


                        <Text style={styles.seeall}> See all</Text>

                    </View>

                </View>

                <View style={styles.gView}>
                    <View  style={styles.gViewflex}>
                    <View style={styles.gimage}>
                        <Image source={g4} />
                    </View>
                    <View style={styles.gimage}>
                        <Image source={g5}/>
                    </View>
                    </View>
                    <View  style={styles.gViewflex2}>
                    <View style={styles.gimage2}>
                        <Image source={g1} />
                    </View>
                    <View style={styles.gimage2}>
                        <Image source={g2}/>
                    </View>
                    <View style={styles.gimage2}>
                        <Image source={g3}/>
                    </View>
                    </View>



                </View>
                </View>
</ScrollView>

            </View>
            

        </SafeAreaView>
    )
}

export default UserProfile

const styles = StyleSheet.create({

    container: {
        flex: 1,

        //  paddingHorizontal:sizes.screenWidth*0.04,
        //  paddingVertical:sizes.screenHeight*0.02
    },
    imview: {
        width: sizes.screenWidth,
        height: sizes.screenHeight * 0.6
    },
    likedislikeContainer: {
       top:sizes.screenHeight*-0.05,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    iconstyle: {
        backgroundColor: "white",
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: sizes.screenWidth * 0.17,
        height: sizes.screenHeight * 0.08,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.41,
        elevation: 2,
        ...Platform.select({
            ios: {
 
           backgroundColor: "white",
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: sizes.screenWidth * 0.17,
        height: sizes.screenHeight * 0.09,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.41,
        elevation: 2,
               
            },
          
          }),


    },
    iconstyleb: {

        borderRadius: 40,
        backgroundColor: "#88CFF1",
        width: sizes.screenWidth * 0.19,
        height: sizes.screenHeight * 0.09,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
 
                borderRadius: 40,
                backgroundColor: "#88CFF1",
                width: sizes.screenWidth * 0.19,
                height: sizes.screenHeight * 0.10,
                justifyContent: 'center',
                alignItems: 'center',
               
            },
          
          }),
    },
    iconstyleb1: {

        borderRadius: 40,
        backgroundColor: "#88CFF1",
        width: sizes.screenWidth * 0.17,
        height: sizes.screenHeight * 0.08, 
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
 
                borderRadius: 40,
                backgroundColor: "#88CFF1",
                width: sizes.screenWidth * 0.17,
                height: sizes.screenHeight * 0.09, 
                justifyContent: 'center',
                alignItems: 'center',
            },
          
          }),
    },
    iconview: {
        marginHorizontal: sizes.screenWidth * 0.03
    },
     modalpro: {
        paddingHorizontal: sizes.screenWidth * 0.04,
        bottom: sizes.screenHeight * 0.15,
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    nameview: {
        paddingVertical: sizes.screenHeight * 0.03,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    iconviewsend: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: sizes.screenWidth * 0.15,
        borderRadius: 5,
        borderColor: "#E8E6EA"
    },
    viewname: {

    },
    name: {
        color: "#000",
        fontSize: fontSize.h5,
        fontWeight: '700'

    },

    status: {
        color: "#000",
        fontSize: fontSize.h6,
        fontWeight: '400',
        lineHeight: sizes.screenHeight * 0.05,
        opacity: 0.5
    },
    status: {
        color: "#000",
        fontSize: fontSize.h6,
        fontWeight: '400',
        lineHeight: sizes.screenHeight * 0.05,
        opacity: 0.5
    },
    iconvkilom: {
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',
        width: sizes.screenWidth * 0.18,
        height: sizes.screenHeight * 0.05,
        borderRadius: 5,
        backgroundColor: "#88CFF1",

    },
    kmname: {
        color: "#0087C8"
    },
    statusphy: {
        marginVertical: sizes.screenHeight * 0.02,
        color: "#000",
        fontSize: fontSize.h6,
        fontWeight: '500',
        lineHeight: sizes.screenHeight * 0.03,

    },
    readmore: {
        color: "#88CFF1",
        fontFamily: "poppin",
        fontWeight: '400',
    },
    intrstView: {
        marginVertical: sizes.screenHeight * 0.03
    },
    intrsttext: {
        color: "#000",
        fontFamily: "poppin",
        fontWeight: '400',
        textTransform: 'capitalize'
    },
    intrestpointbox: {
        borderWidth: 1,
        paddingHorizontal: sizes.screenWidth * 0.03,
        paddingVertical: sizes.screenHeight * 0.02,
        marginHorizontal: sizes.screenWidth * 0.02,
        marginVertical: sizes.screenHeight * 0.01,
        borderColor: "#0087C8",
        borderRadius: 5
    },
    intresView: {
        paddingVertical: sizes.screenHeight * 0.03,

        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    intrestesxt: {
        color: "#000",
        fontSize: fontSize.medium,
        fontWeight: "700"
    },
    intrestesxactivet: {
        color: "#0087C8",
        fontSize: fontSize.medium,
        fontWeight: "700"
    },
    galrytext: {

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    galery: {
        color: "#000",
        fontSize: fontSize.h6,
        fontWeight: "700"
    },
    seeall: {
        color: "#0087C8",
        fontSize: fontSize.h6,
        fontWeight: "700"
    },
    gView:{
        marginVertical:sizes.screenHeight*0.03,
        // alignItems:'center',
        // justifyContent:'center'
    },
    gViewflex:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    gimage:{
        width:sizes.screenWidth*0.4
    },
    gViewflex2:{
        flexDirection:'row',
        // width:sizes.screenWidth,
        // justifyContent:'center',
        // alignItems:'center'
        marginLeft:sizes.screenWidth*0.06,
        marginTop:sizes.screenHeight*0.01,
    },
    gimage2:{
        width:sizes.screenWidth*0.24,
        marginHorizontal:sizes.screenWidth * 0.01
    },

    scroll:{
   
           height:sizes.screenHeight * 2
    }



})