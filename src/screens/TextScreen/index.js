import React, { useState, useEffect } from 'react'
import { PermissionsAndroid, FlatList, TextInput, View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'
import { sizes, fontSize } from '../../utilities'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'
import DP3 from '../../Assets/DP3.jpg';
import stickers from '../../Assets/stickers.png';
import { useRoute } from '@react-navigation/native';
import AudioRecord from 'react-native-audio-record';
import Sound from 'react-native-sound';
import waves from '../../Assets/waves.png'
// import waves from '../../Assets/AudiWaveBackground.png'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
async function requestAudioPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Audio Permission',
        message: 'App needs access to your microphone to record audio.',
        buttonPositive: 'OK',
        buttonNegative: 'Cancel',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Audio permission granted');
      return true;
    } else {
      console.log('Audio permission denied');
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
}

function TextScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route.params;
  // const { UserData } = route.params;
  console.log(name, "===>");
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [audioFile, setAudioFile] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [sound, setSound] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  useEffect(() => {
    Sound.setCategory('Playback'); // This is required for iOS

    return () => {
      // Release the sound player when the component unmounts
      if (sound) {
        sound.release();
      }
    };
  }, []);


  const startRecording = async () => {
    const hasPermission = await requestAudioPermission();

    if (!hasPermission) {
      return;
    }

    const options = {
      sampleRate: 16000,
      channels: 1,
      bitsPerSample: 16,
    };

    AudioRecord.init(options);

    try {
      await AudioRecord.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };
  const stopRecording = async () => {
    try {
      const audioPath = await AudioRecord.stop();
      setAudioFile(audioPath);
      setIsRecording(false);
      // Implement sending the audio file here (e.g., to a server)
      sendAudioMessage(audioPath);
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  };
  const sendAudioMessage = (audioPath) => {
    // Simulate sending the audio message by adding it to the messages state
    if (audioPath) {
      const newMessage = {
        type: 'audio',
        audioPath: audioPath,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      // Play the audio immediately after sending
      playAudio(audioPath);
    }
  };
  const playAudio = (audioPath) => {
    // Pause the currently playing sound (if any)
    if (currentlyPlaying) {
      currentlyPlaying.pause(() => {
        currentlyPlaying.release();
        setCurrentlyPlaying(null);
      });
    }
    const newSound = new Sound(audioPath, null, (error) => {
      if (error) {
        console.error('Error initializing sound player:', error);
      } else {
        newSound.play((success) => {
          if (success) {
            console.log('Successfully finished playing audio');
          } else {
            console.error('Error playing audio');
          }
          newSound.release(); // Release the sound player when done
          setCurrentlyPlaying(null);
        });
      }
    });

    setCurrentlyPlaying(newSound);
  };
  const pauseAudio = () => {
    if (currentlyPlaying) {
      currentlyPlaying.pause(() => {
        console.log('Paused audio');
      });
    }
  };


  const sendMessage = () => {
    if (inputText.trim() === '') {
      return;
    }
    const newMessage = {
      type: 'text',
      text: inputText,
      sender: 'user', // You can specify the sender (e.g., 'user' or 'receiver')
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };


  const sendVoicemessage = () => {

  }


  return (

    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.headermessage}>
        <View>
          <TouchableOpacity style={styles.viewicon}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="chevron-left" size={30} color={"#7BCFF6"} />
          </TouchableOpacity>
        </View>
        <View><Text style={styles.hedmesstitle}>message</Text></View>
        <TouchableOpacity
          style={styles.viewiconfilter}>
          <FontAwesome
            name="sliders"
            size={30}
            color={"#88CFF1"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: sizes.screenHeight * 0.06 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.imageconmess}>
            <Image source={DP3}

            />

          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.messagetext}>{name}</Text>
            <Text style={styles.onlinestatus}>
              <Octicons name="dot-fill" color="#88CFF1" size={20} style={styles.icon} />
              online
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.viewiconfilterdot}

        >
          <Entypo
            name="dots-three-vertical"
            color="#000"
          />
        </TouchableOpacity>
      </SafeAreaView>



      <FlatList
        showsVerticalScrollIndicator={false}
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <SafeAreaView style={item.sender === 'user' ? styles.msgconright : styles.msgcon}>


            <View style={styles.msg}>
              {item.type === 'text' ? (
                <View style={styles.ChatDiv}>
                  <Text style={styles.msgtxtt}>{item.text}</Text>
                </View>
              ) : (
                <TouchableOpacity onPress={() => { currentlyPlaying ? pauseAudio : playAudio(item.audioPath) }} >
                  <View style={styles.ChatDivoic}>
                    <Entypo name={currentlyPlaying ? 'controller-paus' : 'controller-play'} size={30} />
                    <View style={styles.waves}>
                      <Image
                        source={waves}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              )}

            </View>
          </SafeAreaView>
        )}
      />





      <View style={styles.inpDiv}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 1,
          width: sizes.screenWidth * 0.81,
          borderRadius: 10,
          borderColor: "#E8E6EA",
          paddingHorizontal: sizes.screenWidth * 0.03
        }}>
          <TextInput
            placeholder='Your message'
            placeholderTextColor={"#000"}
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            style={styles.inp}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Image source={stickers} />
          </TouchableOpacity>
        </View>
        {isRecording ? <TouchableOpacity onPress={stopRecording} style={{
          borderWidth: 1,
          padding: 15,
          borderRadius: 10,
          borderColor: "#E8E6EA"
        }}>
          <FontAwesome
            name={isRecording ? 'stop-circle' : 'microphone'}
            size={19}
            color="#88CFF1"
          />
        </TouchableOpacity> : <TouchableOpacity onPress={startRecording} style={{
          borderWidth: 1,
          padding: 15,
          borderRadius: 10,
          borderColor: "#E8E6EA"
        }}>
          <FontAwesome
            name={isRecording ? 'stop-circle' : 'microphone'}
            size={19}
            color="#88CFF1"
          />
        </TouchableOpacity>}
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: sizes.screenWidth * 0.03,
    paddingVertical: sizes.screenHeight * 0.02,
    ...Platform.select({
      ios: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: sizes.screenWidth * 0.03,
        paddingVertical: sizes.screenHeight * 0.05,
      },

    }),
  },

  headermessage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: sizes.screenWidth * 0.02,
        paddingVertical: sizes.screenHeight * 0.02
      },

    }),
  },
  viewiconfilter: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#E8E6EA",


  },
  viewiconfilterdot: {
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#E8E6EA",
    ...Platform.select({
      ios: {
        width: sizes.screenWidth * 0.15,
        height: sizes.screenHeight * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: "#E8E6EA",
        right: sizes.screenWidth * 0.02
      },

    }),

  },
  hedmesstitle: {
    fontSize: fontSize.h1,
    fontWeight: '700',
    color: "#88CFF1",
    textTransform: 'capitalize'
  },
  imageconmess: {
    width: sizes.screenWidth * 0.20,
    height: sizes.screenHeight * 0.09,
    borderRadius: 75,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#88CFF1",
    marginHorizontal: sizes.screenWidth * 0.03,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        width: sizes.screenWidth * 0.16,
        height: sizes.screenHeight * 0.09,
        borderRadius: 75,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#88CFF1",
        marginHorizontal: sizes.screenWidth * 0.03,
        overflow: 'hidden',
      },

    }),
  },
  imagecon1: {
    width: sizes.screenWidth * 0.14,
    height: sizes.screenHeight * 0.07,
    // borderWidth: 1,
    borderRadius: 40,
    borderWidth: 2,
    // borderColor: "#88CFF1",
  },
  messagetext: {
    fontSize: fontSize.h5,
    fontWeight: '700',
    color: "#000",
    textTransform: 'capitalize',
    ...Platform.select({
      ios: {
        fontSize: fontSize.h5,
        fontWeight: '700',
        color: "#000",
        textTransform: 'capitalize',
      },

    }),
  },
  onlinestatus: {
    fontSize: fontSize.medium,
    fontWeight: '400',
    color: "#000",
    textTransform: 'capitalize',
    opacity: 0.5,


  },

  mainDiv: {
    justifyContent: "center",
    alignItems: "center"

  },
  today: {

    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.04,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    bottom: sizes.screenHeight * 0.028,


  },
  line: {

    width: sizes.screenWidth * 0.9,
    borderBottomWidth: 1,
    backgroundColor: "#E8E6EA",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: sizes.screenWidth * 0.02
  },
  txt: {

    fontSize: fontSize.medium,
    fontFamily: "popin",
    fontWeight: "700"
  },

  msg: {

    // width: sizes.screenWidth * 0.9,
    //   height:sizes.screenHeight * 0.2,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginVertical: sizes.screenHeight * 0.02,


  },
  ChatDiv: {

    // width: sizes.screenWidth * 0.8,
    // height: sizes.screenHeight * 0.12,
    backgroundColor: "#0087C8",
    opacity: 0.4,
    //   marginHorizontal:sizes.screenWidth * 0.02,
    paddingHorizontal: sizes.screenWidth * 0.03,
    alignItems: "flex-end",
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    left: sizes.screenWidth * 0.8,
  },
  ChatDivoic: {
    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.08,
    backgroundColor: "#F3F3F3",
    //   marginHorizontal:sizes.screenWidth * 0.02,
    paddingHorizontal: sizes.screenWidth * 0.03,
    justifyContent: 'center',
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    left: sizes.screenWidth * 0.09,
    flexDirection: 'row', alignItems: 'center'
  },
  ChatDivv: {

    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.12,
    backgroundColor: "#C8EDFF",
    //   marginHorizontal:sizes.screenWidth * 0.02,

    alignItems: "center",
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10
  },

  msgtxtt: {

    fontFamily: "popin",
    fontSize: fontSize.regular,
    color: "#000",
    fontWeight: "600",
    textAlign: "justify",
    marginVertical: sizes.screenHeight * 0.03
  },

  inpDiv: {
    marginVertical: sizes.screenHeight * 0.03,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    ...Platform.select({
      ios: {
        marginVertical: sizes.screenHeight * 0.03,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: sizes.screenWidth * 0.03
      },

    }),

  },
  msgcon: {
    alignSelf: 'flex-start'
  },
  msgconright: {
    alignSelf: 'flex-start'
  },
  viewicon: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#E8E6EA"
  },
  inp: {
    width: sizes.screenWidth * 0.70,
    color: "#000",
    ...Platform.select({
      ios: {
        width: sizes.screenWidth * 0.70,
        height: sizes.screenHeight * 0.07,
        color: "#000",
      },

    }),

  },
  voiceplayer: {
    width: sizes.screenWidth * 0.6,
    height: sizes.screenHeight * 0.07,
    backgroundColor: "red",
    // justifyContent:'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  waves: {

    width: sizes.screenWidth * 0.7,
    height: sizes.screenHeight * 0.04,
    //  marginHorizontal:sizes.screenWidth*0.3
  }



})

export default TextScreen
