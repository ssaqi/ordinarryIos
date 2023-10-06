import React from 'react'
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, } from 'react-native'
  
import { colors, sizes, fontSize } from '../../utilities';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const Arrowback = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity  onPress={() => navigation.goBack()} style={styles.ArrowContainer} >
            <View style={styles.arrowborder}>
                <Entypo name="chevron-left" size={30} color={"#7BCFF6"} />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create(
    {
        ArrowContainer: {
                       width:sizes.screenWidth*0.15,
                       justifyContent:'center',
                       alignItems:'center',
                       
                       paddingHorizontal:sizes.screenWidth*0.01,
                       paddingVertical:sizes.screenHeight*0.02,

        },
        arrowborder:{
          borderWidth:1,
          borderColor:"#CBCBCB"  ,
          borderRadius:5
        }





    })

export default Arrowback
