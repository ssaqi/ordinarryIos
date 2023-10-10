import React, { useRef, useState } from 'react'
import { Animated, Text, View, StyleSheet, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, ImageBackground, TextInput, Dimensions, Image } from 'react-native';
import { colors, sizes, fontSize } from '../../utilities';
import background from '../../Assets/background.png';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import { Arrowback } from '../../components';
import DP from '../../Assets/photo.png';
import DP4 from '../../Assets/DP4.jpg';
import date1 from "../../Assets/date1.png"
import AntDesign from 'react-native-vector-icons/AntDesign';
function viewScreen({ navigation,route  }) {
    const { imageUri } = route.params || {}; // Use object destructuring with a default empty object
    console.log(imageUri,"===>imageuri");
    const [current, setcurrent] = useState(0)
    const [content, setcontent] = useState([
        {
            content: require('../../Assets/DP4.jpg'),
            type: 'image',
            finish: 0,
        },
        {
            content: require('../../Assets/date1.png'),
            type: 'image',
            finish: 0,
        },
        {
            content: require('../../Assets/2.jpg'),
            type: 'image',
            finish: 0,
        },
        {
            content: require('../../Assets/4.jpg'),
            type: 'image',
            finish: 0,
        },

    ]);

    const progress = useRef(new Animated.Value(0)).current;
    const start = () => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false,

        }).start(({ finished }) => {
            if (finished) {
                next();
            }
        });
    }
    const next = () => {
        if (current != content.length - 1) {
            let tempData = content;
            tempData[current].finish = 1;
            setcontent(tempData);
            progress.setValue(0);
            setcurrent(current + 1);

        } else close()

    }
    const previous = () => {
        if (current - 1 >= 0) {
            let tempData = content;
            tempData[current].finish = 0;
            setcontent(tempData);
            setcurrent(current - 1);
            progress.setValue(0);

        } else close()

    }
    const close = () => {
        progress.setValue(0)
    }

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>

<Image source={{ uri: imageUri }} style={{ width: sizes.screenWidth, height: sizes.screenHeight, resizeMode: "cover" }}
                onLoadEnd={() => {
                    progress.setValue(0);
                    start();
                }}
            />
            
            {/* <Image source={content[current].content} style={{ width: sizes.screenWidth, height: sizes.screenHeight, resizeMode: "cover" }}
                onLoadEnd={() => {
                    progress.setValue(0);
                    start();
                }}
            /> */}
            

            <SafeAreaView style={{ width: sizes.screenWidth, position: 'absolute', top: 20, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }}>
                {content.map((index) => {
                    return (

                        <View style={{ flex: 1, height: sizes.screenHeight * 0.006, backgroundColor: 'rgba(255,255,255,.2)', marginLeft: sizes.screenWidth * 0.03, }}>

                            <Animated.View style={{ flex: content == index ? content[index].finish : progress, height: sizes.screenHeight * 0.006, backgroundColor: 'rgba(255,255,255,1)', marginLeft: sizes.screenWidth * 0.02, }}></Animated.View>


                        </View>



                    )
                })}
            </SafeAreaView>
            <SafeAreaView style={styles.profileContainer}>
        <Image source={DP} style={styles.profileImage} />
      </SafeAreaView>

      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={24} color="white" />
      </TouchableOpacity>

            <View
                style={{
                    width: sizes.screenWidth,
                    height: sizes.screenHeight,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    position: 'absolute',

                }}

            >
                <TouchableOpacity style={{ width: "30%", height: "100%" }}
                    onPress={() => {
                        previous()
                    }}
                >
                    <View></View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "30%", height: "100%" }} onPress={() => {
                    next()
                }}>
                    <View></View>
                </TouchableOpacity>




            </View>


        </SafeAreaView>







    )
}

const styles = StyleSheet.create({

    view: {

        width: sizes.screenWidth * 1,
        height: sizes.screenHeight * 1,
        // backgroundColor: "red",
        flexDirection: "row",

    },
    mainview: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    showDp: {

        width: sizes.screenWidth * 0.6,
        height: sizes.screenHeight * 0.09,
        // marginHorizontal: sizes.screenHeight * 0.05,
        marginVertical: sizes.screenWidth * 0.03,
        flexDirection: "row"
    },
    profile1: {

        width: sizes.screenWidth * 0.12,
        height: sizes.screenHeight * 0.07,
        backgroundColor: "#fff",
        marginVertical: sizes.screenHeight * 0.015,
        marginHorizontal: sizes.screenWidth * 0.02,
        borderColor: "#88CFF1",
        borderWidth: 2,
        borderRadius: 50
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
        marginHorizontal: sizes.screenWidth * 0.03
    },
    icon: {

        width: sizes.screenWidth * 0.09,
        height: sizes.screenHeight * 0.04,
        backgroundColor: "#C2EBFF",
        marginVertical: sizes.screenHeight * 0.05,
        left: sizes.screenWidth * 0.28,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.7,
        borderColor: "#7BCFF6",
        borderWidth: 2,
        borderRadius: 10


    },
    text: {
        fontSize: fontSize.h6,
        fontWeight: "800"
    },

    profileContainer: {
        position: 'absolute',
        top: sizes.screenHeight*0.04,
        left: sizes.screenWidth*0.04,
        zIndex: 1,
        ...Platform.select({
            ios: {
                position: 'absolute',
                top: sizes.screenHeight*0.05,
                left: sizes.screenWidth*0.05,
                zIndex: 1,
            },
          
          }),
      },
      profileImage: {
        width: sizes.screenWidth*0.2,
        height: sizes.screenHeight*0.09,
        borderRadius: 20,
        ...Platform.select({
            ios: {
                width: sizes.screenWidth*0.14,
                height: sizes.screenHeight*0.08,
                borderRadius: 20,
            },
          
          }),
      },
      closeButton: {
        position: 'absolute',
        top: sizes.screenHeight*0.07,
        right: sizes.screenWidth*0.04,
        zIndex: 1,
      },


})

export default viewScreen
