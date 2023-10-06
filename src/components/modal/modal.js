import React, { useState } from 'react'
import Modal from "react-native-modal";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { create } from 'react-test-renderer';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import { colors, sizes, fontSize } from '../../utilities';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Modalpop = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    
   
 
    return (
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
                                       
                                     style={isFocused ? styles.paymentfocus : styles.paymentbox}  ><Text style={styles.paymenttext}>12</Text><Text style={styles.paymonth}>months</Text><Text style={styles.payyear}>$09/yr</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.paymentfocus}><Text style={styles.paymenttextactive}>1</Text><Text style={styles.paymonthactive}>months</Text><Text style={styles.payyearactive}>$1/mo</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.paymentbox}><Text style={styles.paymenttext}>6</Text><Text style={styles.paymonth}>months</Text><Text style={styles.payyear}>$4/mo</Text></TouchableOpacity>
                            </View>

                        </View>
                        <View style={styles.sbcontainer}>
                                <TouchableOpacity onPress={()=>{setModalVisible(false)}}>
                            <TouchableOpacity style={styles.btn}
                              
                            >
                                    <Text style={styles.btnText}>subscribe</Text>
                            </TouchableOpacity>
                                    </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </Modal>
            {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
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
    }

})



export default Modalpop





