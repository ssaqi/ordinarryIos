import React, { useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, TextInput, Dimensions, Image, ScrollView } from 'react-native';
import { colors, sizes, fontSize } from '../../utilities';
import background from '../../Assets/background.png';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import { Arrowback, Loader } from '../../components';
import DP from '../../Assets/photo.png';
import ICON from '../../Assets/proicons1.png';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setProfileImage } from '../../store/userActions';
function EditProfile({ navigation }) {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user);

    console.log(userData.user?.birthdate
        , "====>userdataeditscreen");
    const [selectedImage, setSelectedImage] = useState('')

    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingNumber, setIsEditingNumber] = useState(false);
    const [isEditingBirthdate, setIsEditingBirthdate] = useState(false);

    const [name, setname] = useState(userData.user?.firstName);
    const [number, setphonenumber] = useState(userData.user?.number);
    const [birthdate, setbirthdate] = useState(userData.user?.birthdate);

    const toggleEditingName = () => setIsEditingName(!isEditingName);
    const toggleEditingNumber = () => setIsEditingNumber(!isEditingNumber);
    const toggleEditingBirthdate = () => setIsEditingBirthdate(!isEditingBirthdate);
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const saveChanges = () => {
        // Capture the updated values
        const updatedName = name;
        const updatedNumber = number;
        const updatedBirthdate = birthdate;

        // Update Redux store
        openModal();

        setTimeout(() => {
            // Save user data to AsyncStorage
            dispatch(setUser({ ...userData, firstName: updatedName, phoneNumber: updatedNumber, dateOfBirth: updatedBirthdate }));
            closeModal();
        }, 2000);

        // Disable editing mode
        setIsEditingName(false);
        setIsEditingNumber(false);
        setIsEditingBirthdate(false);

    };






    const imagepicker = () => {

        let option = {

            storageoption: {
                path: "images"
            }
        }

        launchImageLibrary(option, async (response) => {
            if (response.assets && response.assets.length > 0) {
                const uri = response.assets[0].uri;
                setSelectedImage(uri);

                dispatch(setProfileImage(uri)); // Dispatch an action to update the profileImage property
                setSelectedImage(uri);
            }
        })
    }




    return (<>
        <Loader isModalVisible={isModalVisible} closeModal={closeModal} />
        <SafeAreaView style={styles.container}>
            <Arrowback />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.logincontainer}>
                    <Text style={styles.loginText}>Profile</Text>
                </View>

                <View style={styles.imgPicCon}>
                    <View style={styles.proDiv}>


                        <View>
                            {selectedImage ? (
                                <View style={styles.img}>
                                    <Image resizeMode='center' style={styles.img} source={{ uri: selectedImage }} />
                                </View>
                            ) : (
                                <View style={styles.img}>
                                    <Image resizeMode='center' style={styles.img} source={{ uri: userData.user?.profileImage }} />
                                </View>
                            )}


                            <TouchableOpacity
                                style={{
                                    width: sizes.screenWidth * 0.09, height: sizes.screenHeight * 0.05, bottom: sizes.screenHeight * 0.14, left: sizes.screenWidth * 0.15, justifyContent: 'center',
                                    alignItems: 'center',
                                }} onPress={imagepicker}>
                                <View style={styles.icon}>

                                    <Image source={ICON} />
                                </View>

                            </TouchableOpacity>

                        </View>






                    </View>
                </View>




                <View style={styles.incontainer}>


                    <View style={styles.inpDiv}>
                        <TextInput
                            placeholder='Name'
                            placeholderTextColor={'#000'}
                            style={styles.inp}
                            editable={isEditingName}
                            value={name}
                            onChangeText={(text) => setname(text)}
                        />
                        {!isEditingName && (
                            <View style={styles.eicon}>
                                <TouchableOpacity onPress={toggleEditingName}>
                                    <AntDesign name='edit' size={20} color='#000' />
                                </TouchableOpacity>
                            </View>
                        )}



                    </View>

                    <View style={styles.inpDiv}>
                        <TextInput
                            placeholder='Phone number'
                            placeholderTextColor={'#000'}
                            style={styles.inp}
                            editable={isEditingNumber}
                            value={userData.user?.number} // Display the user's phone number from Redux
                            onChangeText={(text) => setphonenumber(text)} // Handle changes if needed
                        />
                        {!isEditingNumber && (
                            <View style={styles.eicon}>
                                <TouchableOpacity onPress={toggleEditingNumber}>
                                    <AntDesign name='edit' size={20} color='#000' />
                                </TouchableOpacity>
                            </View>
                        )}


                    </View>


                    <View style={styles.inpDiv}>
                        <TextInput
                            placeholder='Date of birth'
                            placeholderTextColor={'#000'}
                            style={styles.inp}
                            editable={isEditingBirthdate}
                            value={userData.user?.birthdate} // Display the user's date of birth from Redux
                            onChangeText={(text) => setbirthdate(text)} // Handle changes if needed
                        />
                        {!isEditingBirthdate && (
                            <View style={styles.eicon}>
                                <TouchableOpacity onPress={toggleEditingBirthdate}>
                                    <AntDesign name='edit' size={20} color='#000' />
                                </TouchableOpacity>
                            </View>
                        )}


                    </View>


                    {/* <View style={styles.inpDiv}>
                        <TextInput
                        placeholder='Email'
                        placeholderTextColor={'#000'}
                        style={styles.inp}
                        >
                        </TextInput>
                        
                    </View> */}

                    <View style={styles.line}></View>

                    <View style={styles.inpDiv}>
                        <Text style={styles.planText}> Plan Settings </Text>
                    </View>

                    <View style={styles.inpDiv}>
                        <TextInput
                            placeholder='Current Plan'
                            placeholderTextColor={'#000'}
                            style={styles.inp}
                        >
                        </TextInput>
                    </View>


                </View>


                {isEditingName || isEditingNumber || isEditingBirthdate ? (
                    <View style={styles.buttoncontainer}>
                        <TouchableOpacity style={styles.button} onPress={saveChanges}>
                            <Text style={styles.logintext}>Save Changes</Text>
                        </TouchableOpacity></View>
                ) : <View style={styles.buttoncontainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("datingpage",{})}
                    >

                        <Text style={styles.logintext}>Save Changes</Text>

                    </TouchableOpacity>
                </View>}


            </ScrollView>



        </SafeAreaView>
    </>
    )
}


const styles = StyleSheet.create({

    bgImg: {

        width: deviceWidth,
        height: deviceHeight,
        //  flex:1,
        display: "flex",
        // alignItems: "center"
    },
    container: {
        flex: 1,
        paddingHorizontal: sizes.screenWidth * 0.02,
        paddingVertical: sizes.screenHeight * 0.02,
        backgroundColor: "#fff"

    },

    imgPicCon: {
        marginTop: sizes.screenHeight * 0.04,
        width: sizes.screenWidth * 0.9,
        height: sizes.screenHeight * 0.2,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        ...Platform.select({
            ios: {
                marginTop: sizes.screenHeight * 0.04,
        width: sizes.screenWidth * 0.99,
        height: sizes.screenHeight * 0.15,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
            },
          
          }),
        

    },
    proDiv: {

        width: sizes.screenWidth * 0.5,
        height: sizes.screenHeight * 0.2,
        // backgroundColor:"#fff",
        justifyContent: 'center',
        alignItems: 'center'


    },
    logincontainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    loginText: {
        fontFamily: "poppins",
        color: "#7BCFF6",
        fontSize: fontSize.h3,
        fontWeight: '700',
        // marginRight:sizes.screenWidth * 0.4,

    },
    enternumberText: {
        marginVertical: sizes.screenHeight * 0.02,
        fontFamily: "poppins",
        color: "#7BCFF6",
        fontSize: fontSize.h5,

    },

    line: {
        width: sizes.screenWidth * 0.9,
        borderBottomWidth: 1,
        borderColor: "#C4C4C4",
        marginVertical: sizes.screenHeight * 0.02

    },

    inputnumber: {
        justifyContent: "center",
        alignItems: "center",
    },

    inpDiv: {
        marginVertical: sizes.screenHeight * 0.01,

    },

    inpText: {
        marginVertical: sizes.screenHeight * -0.001,
        alignItems: "center",
        fontSize: fontSize.medium,
        fontWeight: "700",
        fontFamily: "popin",

    },
    inp: {
        color: "#000",
        borderColor: "#7BCFF6",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: sizes.screenWidth * 0.06,
        ...Platform.select({
            ios: {
            color: "#000",
          borderColor: "#7BCFF6",
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: sizes.screenWidth * 0.07,
          paddingVertical:sizes.screenHeight*0.015,
            },
          
          }),

    },
    tt2: {

        color: "#7BCFF6",
        fontSize: fontSize.medium,
        fontWeight: "700",
        fontFamily: "popin",
        left: 120
    },
    incontainer: {
        paddingHorizontal: sizes.screenWidth * 0.04,
        marginVertical: sizes.screenHeight * 0.06,
    },

    buttoncontainer: {
        marginVertical: sizes.screenHeight * 0.01,
        justifyContent: "center",
        alignItems: "center"


    },
    eicon: { alignSelf: 'flex-end', bottom: sizes.screenHeight * 0.04, right: sizes.screenWidth * 0.03, }

    ,
    button: {
        backgroundColor: "#fff",
        width: sizes.screenWidth * 0.70,
        height: sizes.screenHeight * 0.06,
        borderRadius: 10,
        borderColor: "#C6C6C6",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                backgroundColor: "#fff",
                width: sizes.screenWidth * 0.70,
                height: sizes.screenHeight * 0.06,
                borderRadius: 10,
                borderColor: "#C6C6C6",
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                bottom:sizes.screenHeight * 0.02
            },
          
          }),
    },
    logintext: {
        color: "#7BCFF6",
        fontFamily: "poppins",
        fontWeight: "700",
        fontSize: fontSize.h5,
      
    },
    pdiv: {

        width: sizes.screenWidth * 0.29,
        height: sizes.screenHeight * 0.16,
        alignItems: "center",
        borderRadius: 200


    },
    img: {
        width: sizes.screenWidth * 0.26,
        height: sizes.screenHeight * 0.12,
        borderRadius: sizes.screenWidth * 0.15,
        ...Platform.select({
            ios: {
                width: sizes.screenWidth * 0.26,
                height: sizes.screenHeight * 0.14,
                borderRadius: sizes.screenWidth * 0.15,
                resizeMode:"cover"
                
            },
          
          }),


    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: sizes.screenWidth * 0.05,
        //   height:sizes.screenHeight*0.15
        // flexDirection: "row",
        // bottom: sizes.screenWidth * 0.27,
        // left: sizes.screenWidth * 0.19
    },
    planText: {

        fontFamily: "popin",
        fontSize: fontSize.h5,
        color: "#000",
        fontWeight: "600"
    }


})




export default EditProfile
