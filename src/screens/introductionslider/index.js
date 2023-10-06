
import React, { useState, useRef } from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
  Platform
} from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

import Entypo from 'react-native-vector-icons/Entypo';
import { Component, Componentsecond, Componentthrd } from '../../components/Introcomponent';
import { colors, sizes, fontSize } from '../../utilities';

// import Loader from '../../components/Loader';


const Introductionliderscreen = ({ navigation }) => {
  const slides = [
    { id: 1, name: <Component  /> },
    { id: 2, name: <Componentsecond /> },
    { id: 3, name: <Componentthrd /> },

  ];
  const [imgActive, setImgActive] = useState(0);
  const scrollViewRef = useRef(null);

  const handleNext = () => {
    if (imgActive < slides.length - 0) {
      scrollViewRef.current.scrollTo({
        x: (imgActive + 1) * deviceWidth,
        animated: true,
      });
      setImgActive(imgActive + 1);
    }
  };
  console.log(imgActive, "imagactive");
  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#7BCFF6" }}>
      <ScrollView
      ref={scrollViewRef}
        onScroll={({ nativeEvent }) => onchange(nativeEvent)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.srollwidth}
        disableIntervalMomentum={true}>
        {slides.map((item, index) => {
          return <View>{item.name}</View>;
        })}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: deviceWidth * 0.01,
          right: deviceWidth * 0.40,
          position: 'absolute',
          top: sizes.screenHeight * 0.89,
        }}>
       {imgActive !=2 ?  
          <TouchableOpacity style={styles.buttoncontainer} onPress={handleNext} >

            <Text style={styles.buttontext}>next</Text>

          </TouchableOpacity>
        :""}

        <View style={styles.wrapDot}>
          {slides?.map((item, index) => {
            return (
              <View>
                {imgActive !== 3 && (
                  <View >
                    <Text
                      // key={index}
                      style={
                        imgActive == index ? styles.dotActive : styles.dot
                      }>
                      <Entypo
                        name="dot-single"
                        color={colors.white}
                        size={30}
                      />
                    </Text>
                  </View>
                )}


              </View>

            );
          })}

        </View>

      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  // dotActive:{
  //   bottom:sizes.screenHeight*0.3,
  //   justifyContent:'center',
  //   alignItems:'center'
  // },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  srollwidth: {
    width: deviceWidth,
  },
  footer: {
    //  marginTop: deviceHeight * 0.09,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // paddingLeft: deviceWidth * 0.07,
    // paddingRight: deviceWidth * 0.05,
    // borderTopWidth: deviceWidth * 0.001,
    //  paddingTop: deviceHeight * 0.02,
  },
  paginatiioncon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dot: {
    margin: sizes.screenHeight * 0.0,
    color: colors.secondary,
    opacity: 0.6,
    fontSize: fontSize.h3,
  },
  wrapDot: {

    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    // position:'absolute',
    bottom: sizes.screenHeight * 0.33,

    ...Platform.select({
      ios: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        // position:'absolute',
        bottom: sizes.screenHeight * 0.32,
      },
    
    }),

    // left:sizes.screenWidth*0.39,
  },
  wrapDot2: {

    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    // position:'absolute',
    bottom: sizes.screenHeight * 0.23,
    left: sizes.screenWidth * 0.39,

  },

  wrap: {
    width: sizes.screenWidth * 0.80,
  },
  dotActive: {
    // marginLeft:18,
    color: colors.secondary,
    fontSize: fontSize.h3,
  },
  top: {
    // top: sizes.screenHeight * -0.01,
  },
  fontsiginandsignup: {
    fontSize: fontSize.h5,
    color: colors.secondary,
    // fontFamily: fontFamily.appTextHeading,
    fontWeight: '700',
  },
  buttoncontainer: {
    backgroundColor: "white",
    width: sizes.screenWidth * 0.5,
    height: sizes.screenHeight * 0.07,
    bottom: sizes.screenHeight * 0.17,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    left: sizes.screenWidth * 0.39,
    // marginVertical:sizes.screenHeight*0.05,
    ...Platform.select({
      ios: {
        backgroundColor: "white",
        width: sizes.screenWidth * 0.5,
        height: sizes.screenHeight * 0.07,
        bottom: sizes.screenHeight * 0.17,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        left: sizes.screenWidth * 0.39,
        marginVertical:sizes.screenHeight*0.04,
      },
    
    }),


  },
  buttontext: {
    fontSize: fontSize.h5,
    color: "#88CFF1",
    fontWeight: 'bold'
  }



})


export default Introductionliderscreen;



