import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import { fontSize, sizes } from '../../utilities';

const countries = [
    'Chicago USA',
    'USA',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'China',
    'India',
    'Brazil',
];

const CustomDropdown = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('Select a country');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        toggleModal();
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={toggleModal}>
                <View style={styles.dropdownButton}>
                    <Text style={styles.selectedCountry}>{selectedCountry}</Text>
                </View>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible} animationIn="fadeIn" animationOut="fadeOut">
                <Animatable.View style={styles.modalContent} animation="slideInUp">
                    {countries.map((country, index) => (
                        <TouchableOpacity key={index} onPress={() => handleCountrySelect(country)}>
                            <Text style={styles.countryOption}>{country}</Text>
                        </TouchableOpacity>
                    ))}
                </Animatable.View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownButton: {
        flexDirection: 'row',
        borderWidth: 1,
        width: sizes.screenWidth * 0.8,
        height: sizes.screenHeight * 0.07,
        justifyContent: 'space-between',
        paddingHorizontal: sizes.screenWidth * 0.05,
        borderRadius: 5,
        alignItems: 'center',
    },
    selectedCountry: {
        color: '#000',
        fontSize: fontSize.medium,
        fontWeight: '400',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: sizes.screenWidth * 0.04,
        borderRadius: 5,
    },
    countryOption: {
        fontSize: fontSize.large,
        paddingVertical: sizes.screenHeight * 0.01,
    },
});

export default CustomDropdown;