
import { Text, View ,TouchableOpacity,ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import { sizes } from '../../utilities';

const Loader = ({ isModalVisible, closeModal }) => {
  return (
    <Modal isVisible={isModalVisible}>
    <View style={{right:sizes.screenWidth*0.05, backgroundColor: "white",width:sizes.screenWidth,height:sizes.screenHeight,justifyContent:'center',opacity:0.5}}>
    <ActivityIndicator color={"#88CFF1"} size={50} />
      <TouchableOpacity title="Close" onPress={closeModal} />
    </View>
  </Modal>
  )
}

export default Loader
