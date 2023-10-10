import React from 'react';
import {

    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Button,
    Platform,
    SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { sizes } from "../../utilities/Sizes"
import { images } from '../../utilities/Images';
import { fontSize } from '../../utilities';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Component = ({name,next}) => {
    
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.imgContainer}>
                <Image source={images.matches} style={styles.imagemeasure} />

                <View style={styles.logo}>

                    <Image source={images.Logo} />
                </View>

                <View style={styles.matchcenter}>
                    <Text style={styles.matchfonts}>Matches</Text>
                </View>
                <View style={styles.logo}>
                    <Text style={styles.matchfontphyra}>We match you with people that have a </Text>
                </View>
                <View style={styles.logo}>
                    <Text style={styles.matchfontphyra}>large array of similar interests.</Text>
                </View>




            </View>
                {/* <View style={styles.buttoncontainer}>
            <TouchableOpacity onPress={next}>

                    <Text style={styles.buttontext}>{name}</Text>
                
            </TouchableOpacity>
                </View> */}
        </SafeAreaView>
    );
};

const Componentsecond = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={images.algorithum} style={styles.imagemeasure2} />

                <View style={styles.logo}>

                    <Image source={images.Logo} />
                </View>

                <View style={styles.matchcenter}>
                    <Text style={styles.matchfonts}>Algorithm</Text>
                </View>
                <View style={styles.logo}>
                    <Text style={styles.matchfontphyra}>Users going through a vetting process to </Text>
                </View>
                <View style={styles.logo}>
                    <Text style={styles.matchfontphyra}> ensure you never match with bots.</Text>
                </View>
            </View>
            {/* <TouchableOpacity>
                <View style={styles.buttoncontainer}>
                    <Text style={styles.buttontext}>Next</Text>
                </View>
            </TouchableOpacity> */}
        </SafeAreaView>
    );
};

const Componentthrd = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={images.premium} style={styles.imagemeasure3} />

                <View style={styles.logo}>

                    <Image source={images.Logo} />
                </View>

                <View style={styles.matchcenter}>
                    <Text style={styles.matchfonts}>Premium</Text>
                </View>
                <View style={styles.logo}>
                    <Text style={styles.matchfontphyra}>Sign up today and enjoy the first month
                    </Text>
                </View>
                <View style={styles.logo}>
                    <Text style={styles.matchfontphyra}>of premium benefits on us..</Text>
                </View>
            </View>
     
            
              

        </SafeAreaView>
    );
};
// const ComponentFour = () => {

//   return (
//     <>
//   <View style={styles.container}>
//      <Text>component3</Text>
//     </View>
//     </>
//   );
// };

export { Component, Componentsecond, Componentthrd };
const styles = StyleSheet.create(
    {
        container: {
        //   flex:1,
            // height: sizes.screenHeight,
            // justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#7BCFF6"
        },
        imgContainer: {

            //    width:sizes.screenWidth*0.99,
            // height: sizes.screenHeight * 0.6,
            borderBottomRightRadius: 250,
            //    borderBottomLeftRadius:100

        },
        imagemeasure: {
            width: sizes.screenWidth,
            height: sizes.screenHeight * 0.7,
            borderBottomRightRadius: 300,
            borderBottomLeftRadius: 5,

        },
        imagemeasure2: {
            width: sizes.screenWidth * 0.999999,
            height: sizes.screenHeight * 0.7,
            borderBottomRightRadius: 170,
            borderBottomLeftRadius: 170,

        },
        imagemeasure3: {
            width: sizes.screenWidth,
            height: sizes.screenHeight * 0.7,
            borderBottomLeftRadius: 300,
            borderBottomRightRadius: 5,

        },

        logo: {
            // left:sizes.screenWidth*0.3,
            bottom: sizes.screenHeight * 0.4,
            justifyContent: "center",
            alignItems: 'center'
        },
        matchcenter: {
            // left:sizes.screenWidth*0.3,
            bottom: sizes.screenHeight * 0.4,
            justifyContent: "center",
            alignItems: 'center'
        },
        matchfonts: {
            fontFamily: "poppins",
            fontWeight: 'bold',
            fontSize: fontSize.h4,
            color: "white"
        },
        matchfontphyra: {
            fontFamily: "poppins",
            fontWeight: 'regular',
            fontSize: fontSize.regular,
            color: "white"
        },

        buttoncontainer: {
            backgroundColor: "white",
            width: sizes.screenWidth * 0.5,
            height: sizes.screenHeight * 0.07,
            bottom: sizes.screenHeight * 0.2,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,


        },
        buttontext: {
            fontSize: fontSize.h5,
            color: "#88CFF1",
            fontWeight: 'bold'
        }


        //   img: {
        //     width: deviceWidth,
        //     height: deviceHeight * 0.5,
        //   },
        //   icon: {
        //     width: deviceWidth * 0.12,
        //     height: deviceHeight * 0.06,
        //     marginTop: deviceHeight * -0.03,
        //   },
        //   container: {
        //     width: deviceWidth,
        //     // height:sizes.screenHeight,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //   },
        //   payragraphcon: {
        //     paddingLeft: deviceWidth * 0.09,
        //     paddingRight: deviceHeight * 0.05,
        //     marginTop: deviceHeight * 0.1,
        //     paddingBottom: deviceHeight * 0.1,
        //   },
        //   payragraphcontext: {
        //     fontSize: fontSize.h5,
        //     textAlign: 'center',
        //     color: colors.primary,
        //     fontFamily: fontFamily.appTextRegular,
        //   },
        //   bold: {
        //     fontWeight: 'bold',
        //   },
        //   three: {
        //     width: deviceWidth * 0.33,
        //     height: deviceHeight * 0.16,
        //   },
        //   three1: {
        //     width: deviceWidth * 0.15,
        //     height: deviceHeight * 0.08,
        //     marginRight: deviceWidth * 0.05,
        //   },
        //   three3: {
        //     marginLeft: deviceWidth * 0.05,
        //     width: deviceWidth * 0.15,
        //     height: deviceHeight * 0.08,
        //   },
        //   screnintro2img: {
        //     width: deviceWidth * 0.5,
        //     height: deviceHeight * 0.2,
        //   },
        //   margintop: {
        //     marginTop: deviceHeight * 0.1,
        //   },
        //   loc: {
        //     width: deviceWidth * 0.6,
        //     height: deviceHeight * 0.4,
        //   },
        //   kidd: {
        //     position: 'absolute',
        //     // top: deviceHeight * 0.26,
        //     width: deviceWidth * 0.99,
        //     height: deviceHeight * 0.30,
        //   },
        //   but: {
        //     backgroundColor: colors.secondary,
        //     height: sizes.screenHeight * 0.06,
        //     width: sizes.screenWidth * 0.94,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     // position: 'absolute',
        //   },
        //   footer: {
        //     width: sizes.screenWidth,
        //     marginTop: deviceHeight * 0.09,
        //     flexDirection: 'row',
        //     justifyContent: 'space-between',
        //     paddingLeft: deviceWidth * 0.05,
        //     paddingRight: deviceWidth * 0.05,
        //     borderTopWidth: deviceWidth * 0.001,
        //     paddingTop: deviceHeight * 0.02,
        //   },
        //   fontsiginandsignup: {
        //     fontSize: fontSize.h5,
        //     color: colors.secondary,
        //   },
        //   forslid: {
        //     width: deviceWidth,
        //     height: deviceHeight,
        //   },
        //   forslidtext: {
        //     marginTop: deviceHeight * 0.08,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     paddingLeft: deviceWidth * 0.09,
        //     paddingRight: deviceHeight * 0.05,
        //   },
        //   imgRound: {width: '100%', height: '100%', borderRadius: 200},
        //   imgRoundIOS: {
        //     width: sizes.screenWidth * 0.35,
        //     height: sizes.screenHeight * 0.17,
        //     borderRadius: 200,
        //     left: sizes.screenWidth * 0.02,
        //   },
        //   three3img: {width: '100%', height: '100%', borderRadius: 100},
        //   three3imgIOS: {
        //     width: sizes.screenWidth * 0.2,
        //     height: sizes.screenHeight * 0.09,
        //     borderRadius: 100,
        //   },
    });