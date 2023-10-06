
import { Text, View, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import { fontSize, sizes } from '../../utilities';
import Slider from '@react-native-community/slider';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomDropdown from '../countrymodal';

const Filter = ({ isModalVisible, closeModal }) => {
    const [sliderValue, setSliderValue] = useState(0);
    const [SliderValueAge, setSliderValueAge] = useState(0)

    const handleSliderChange = (newValue) => {
        setSliderValue(newValue.toFixed(0));
    };


    const handleSliderChangeAge = (newValueAge) => {


        setSliderValueAge(newValueAge.toFixed(0)); // Round the value to 0 decimal places
    };
    return (
        <Modal swipeDirection="up" isVisible={isModalVisible}>
            <SafeAreaView style={{paddingVertical:sizes.screenHeight*0.03, borderTopLeftRadius: 20, borderTopRightRadius: 20, top: sizes.screenHeight * 0.10, left: -10, backgroundColor: "white", width: sizes.screenWidth * 0.95, height: sizes.screenHeight * 0.79, }} >
                <Text onPress={closeModal} style={{ alignSelf: 'flex-end',marginHorizontal:sizes.screenWidth*0.02, }}><Entypo name="cross" size={40} color="#000" /></Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                        color: "#000",
                        fontSize: fontSize.extraLarge,
                        marginHorizontal: sizes.screenWidth * 0.05,
                        fontWeight: "900",




                    }}>Filter</Text><Text style={{
                        color: "#0087C8",
                        fontSize: fontSize.medium,
                        fontWeight: "900",
                        marginHorizontal: sizes.screenWidth * 0.05
                    }} >clear</Text>
                </View>
                <CustomDropdown/>
                {/* <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: sizes.screenHeight * 0.03 }}>
                    <View style={{ flexDirection: 'row', borderWidth: 1, width: sizes.screenWidth * 0.8, height: sizes.screenHeight * 0.07, justifyContent: 'space-between', paddingHorizontal: sizes.screenWidth * 0.02, borderRadius: 5, alignItems: 'center' }}>
                        <Text style={{
                            color: "#000", fontSize: fontSize.extraLarge,
                            fontWeight: "400"
                        }} >Chicago, USA</Text><Entypo name="chevron-small-right" size={30} color={"#7BCFF6"} />
                    </View>
                </View> */}
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: sizes.screenWidth * 0.8 }}>
                        <Text style={{
                            color: "#000",
                            fontSize: fontSize.medium,
                            fontWeight: "900",
                            marginHorizontal: sizes.screenWidth * 0.0
                        }}>DISTANCE</Text>
                        <Text style={{
                            color: "#000",
                            fontSize: fontSize.medium,
                            fontWeight: "200",
                            marginHorizontal: sizes.screenWidth * 0.25
                        }}>{sliderValue}km</Text></View>

                    <View style={{ width: sizes.screenWidth * 0.8, justifyContent: 'center', height: sizes.screenHeight * 0.05, marginVertical: sizes.screenHeight * 0.03 }}>
                        <Slider
                            // style={{ width: 200, height: 40 }}
                            minimumValue={1}
                            maximumValue={100}
                            minimumTrackTintColor="#00000"
                            maximumTrackTintColor="#000000"
                            value={parseFloat(sliderValue)}
                            onValueChange={handleSliderChange}
                        />
                    </View>

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: sizes.screenWidth * 0.8 }}>
                        <Text style={{
                            color: "#000",
                            fontSize: fontSize.medium,
                            fontWeight: "900",
                            marginHorizontal: sizes.screenWidth * 0.0
                        }}>Age</Text>
                        <Text style={{
                            color: "#000",
                            fontSize: fontSize.medium,
                            fontWeight: "200",
                            marginHorizontal: sizes.screenWidth * 0.40,
                            width: sizes.screenWidth * 0.09
                        }}>{SliderValueAge}</Text></View>

                    <View style={{ width: sizes.screenWidth * 0.8, justifyContent: 'center', height: sizes.screenHeight * 0.05, marginVertical: sizes.screenHeight * 0.03 }}>
                        <Slider

                            minimumValue={1}
                            maximumValue={100}
                            minimumTrackTintColor="#000"
                            maximumTrackTintColor="#000000"
                            value={parseFloat(SliderValueAge)} // Parse it as a float when setting the value
                            onValueChange={handleSliderChangeAge}
                        />
                    </View>

                </View>

                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity style={{ backgroundColor: "#F4F4F6", paddingHorizontal: sizes.screenWidth * 0.09, height: sizes.screenHeight * 0.08, justifyContent: 'center', alignItems: 'center', borderRadius: sizes.screenWidth * 0.125 }}>
                            <Text style={{
                                color: "#000",
                                fontSize: fontSize.medium,
                                fontWeight: "900",
                            }}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#0087C8", paddingHorizontal: sizes.screenWidth * 0.09, height: sizes.screenHeight * 0.08, justifyContent: 'center', alignItems: 'center', borderRadius: sizes.screenWidth * 0.125 }}>
                            <Text style={{
                                color: "#fff",
                                fontSize: fontSize.medium,
                                fontWeight: "900",
                            }}

                            >Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </SafeAreaView>
        </Modal>
    )
}

export default Filter
