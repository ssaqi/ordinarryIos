import React, { useCallback, useEffect, useRef, useState } from 'react'

import { View, Text, Animated, PanResponder, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'
import { sizes, fontSize } from '../../utilities'
import { AppHeader, Swipe, TabBar } from '../../components'
import date1 from '../../Assets/date1.png'
import date2 from '../../Assets/date1.png'
import date3 from '../../Assets/3.jpg'
import date4 from '../../Assets/4.jpg'
import date5 from '../../Assets/5.jpg'
import date6 from '../../Assets/9.jpg'
import date7 from '../../Assets/10.jpg'
import date8 from '../../Assets/11.jpg'
import Entypo from 'react-native-vector-icons/Entypo';

const SwipPAge = ({navigation}) => {
  
    const [data, setData] = useState([
        { image: date1, id: 1, title: 'Hulk' },
        { image: date2, id: 2, title: 'Ironman' },
        { image: date3, id: 3, title: 'Thor' },
        { image: date4, id: 4, title: 'Superman' },
        { image: date5, id: 5, title: 'Groot' },
        {
            image: date6,
            id: 6,
            title: 'Black Panther',
        },
        { image: date6, id: 7, title: 'Dr Strange' },
        { image: date7, id: 8, title: 'Black Widow' },
    ]);

    useEffect(() => {
        if (!data.length) {
          setData([
            { image: date8, id: 1, title: 'Hulk' },
            { image: date2, id: 2, title: 'Ironman' },
            { image: date3, id: 3, title: 'Thor' },
            { image: date4, id: 4, title: 'Superman' },
            { image: date5, id: 5, title: 'Groot' },
            {
                image: date6,
                id: 6,
                title: 'Black Panther',
            },
            { image: date7, id: 7, title: 'Dr Strange' },
            { image: date8, id: 8, title: 'Black Widow' },
          ]);
        }
      }, [data.length]);
      const swipe = useRef(new Animated.ValueXY()).current;
      const panResponder = useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderMove: (_, { dx, dy }) => {
            swipe.setValue({ x: dx, y: dy });
          },
          onPanResponderRelease: (_, { dx, dy }) => {
            let direction = Math.sign(dx);
            let isSwipeRight = direction === 1;
            let isSwipeLeft = direction === -1;
    
            if (isSwipeRight) {
                navigation.navigate('userprofile');
                // Swipe right logic
              navigateToDetailPage(); // Navigate to the detail page
            } else if (isSwipeLeft) {
              removeCard();
            } else {
              Animated.spring(swipe, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: true,
                friction: 5,
              }).start();
            }
          },
        })
      ).current;
      const navigateToDetailPage = useCallback(() => {
        const nextCard = data[0]; // Get the next card data
        if (nextCard) {
          setData(prevState => prevState.slice(1));
          swipe.setValue({ x: 0, y: 0 });
    
          // Use navigation to go to the detail screen
          navigation.navigate('userprofile');
        }
      }, [swipe, data, navigation]);
    
      const removeCard = useCallback(() => {
        // This function is called when the "Remove Card" button is pressed
        const leftSwipeValue = -100; // Adjust this value to control how much left swipe you want
        Animated.timing(swipe, {
          toValue: { x: leftSwipeValue, y: 0 },
          useNativeDriver: true,
          duration: 300, // You can adjust the duration as per your preference
        }).start(() => {
          // After the animation is complete, remove the card from the data
          setData((prevState) => prevState.slice(1));
          swipe.setValue({ x: 0, y: 0 });
        });
      }, [swipe]);
    return (
        <SafeAreaView style={styles.container}>
            <AppHeader />
            <View style={styles.paddcontainer}>
                <View style={styles.bgbtn}>
                    <View style={styles.btnDiv}>
                        <TouchableOpacity
                            style={styles.btn1}
                            onPress={() => navigation.navigate("msgs")}
                        >
                            <Text style={styles.txx1}>Search partners</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn2}
                          onPress={() => navigation.navigate("discoverscreen")}
                        
                        >
                            <Text style={styles.txx2}>Make  friends </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.swippadinfcontainer}>
                    <View style={styles.Card}>

                        { data.map((item,index)=>{
                             let isFirst=index==0;
                             let dragHandlers = isFirst ? panResponder.panHandlers : {};
                            return <Swipe 
                            key={item.id}
                            image={item.image} 
                            isFirst={isFirst}
                            swipe={swipe}
                            {...dragHandlers}
                            />
                        }).reverse()}

                        <View style={styles.likedislikeContainer}>
                            <TouchableOpacity onPress={removeCard} style={styles.iconview}><View style={styles.iconstyle}><Entypo name={"cross"} size={40} color={"black"} /></View></TouchableOpacity>
                            <View style={styles.iconview}><View style={styles.iconstyleb}><Entypo name={"star"} size={30} color={"white"} /></View></View>
                            <TouchableOpacity  onPress={navigateToDetailPage} style={styles.iconview}><View style={styles.iconstyleb}><Entypo name={"heart"} size={26} color={"white"} /></View></TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
            <View style={styles.bottombar}>
                <TabBar />
            </View>

        </SafeAreaView>
    )
}

export default SwipPAge
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,

    },
    paddcontainer: {
        paddingHorizontal: sizes.screenWidth * 0.04,
        paddingVertical: sizes.screenHeight * 0.02,
    },
    btnDiv: {

        width: sizes.screenWidth * 0.9,
        height: sizes.screenHeight * 0.06,
        backgroundColor: "#88CFF1",
        borderRadius: 10,

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
                marginVertical: sizes.screenHeight * 0.012,
                marginHorizontal: sizes.screenWidth * 0.08,
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
        ...Platform.select({
            ios: {
                textAlign: "center",
                color: "#fff",
                fontSize: fontSize.medium,
                fontWeight: "700",
                marginVertical: sizes.screenHeight * 0.012,
                marginHorizontal: sizes.screenWidth * 0.06,
                fontFamily: "popin",
            },
          
          }),

    },
    bgbtn: {

        backgroundColor: "#fff"
    },
    swippadinfcontainer: {
        paddingHorizontal: sizes.screenWidth * 0.01,
        paddingVertical: sizes.screenHeight * 0.02,
        // justifyContent:'center',
        // alignItems: 'center',
    },
  
    Card: {
        width: "100%",
        height: sizes.screenHeight * 0.57,
        backgroundColor: "white",
        paddingHorizontal: sizes.screenWidth * 0.03,
        alignItems: 'center',
        // paddingVertical: sizes.screenHeight * 0.03,
        borderRadius: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.00,
        elevation: 1
    },
  
    likedislikeContainer: {
        marginTop: sizes.screenHeight * 0.47,
        flexDirection: 'row',

    },
    iconstyle: {
        backgroundColor: "white",
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: sizes.screenWidth * 0.13,
        height: sizes.screenHeight * 0.06,
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
                width: sizes.screenWidth * 0.13,
                height: sizes.screenHeight * 0.059,
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
        width: sizes.screenWidth * 0.12,
        height: sizes.screenHeight * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
           
                borderRadius: 40,
                backgroundColor: "#88CFF1",
                width: sizes.screenWidth * 0.13,
                height: sizes.screenHeight * 0.059,
                justifyContent: 'center',
                alignItems: 'center',
            },
          
          }),

    },
    iconview: {
        marginHorizontal: sizes.screenWidth * 0.02
    },
    bottombar: {
        // marginTop: sizes.screenHeight * 0.01,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:sizes.screenHeight * 0.09  
    }

})