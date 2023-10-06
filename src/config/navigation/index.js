import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateAccount,
          GenderScreen,
           IntrestScreen, 
           Introductionliderscreen, 
           LoginWithNumber,
           VerificationCode,
            NameScreen, 
            SignUp,
            Login, 
            Forget, 
            NewPassword,
            ProfileDetails, 
            DatingPage, 
            EditProfile, 
            ViewStory,
            MassageScreen,
            SwipPAge, 
            UserProfile,
            DiscoverScreen,
            ChatScreen, 
            TextScreen,
            MatchScreen,PaymentScreen } from '../../screens';

const Stack = createNativeStackNavigator();
const Navbar = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >

        <Stack.Screen name="intro" component={Introductionliderscreen} />
        <Stack.Screen name="creataccount" component={CreateAccount} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="loginscreen" component={LoginWithNumber} />
        <Stack.Screen name="Verify" component={VerificationCode} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="profile" component={ProfileDetails} />
        <Stack.Screen name="forget" component={Forget} />
        <Stack.Screen name="newpassword" component={NewPassword} />
        <Stack.Screen name="FirstName" component={NameScreen} />
        <Stack.Screen name="genderscreen" component={GenderScreen} />
        <Stack.Screen name="interestscreen" component={IntrestScreen} />
        <Stack.Screen name="editprofile" component={EditProfile} />

        <Stack.Screen name="msgs" component={MassageScreen} />
        <Stack.Screen name="datingpage" component={DatingPage} />
        <Stack.Screen name="swippage" component={SwipPAge} /> 
         <Stack.Screen name="userprofile" component={UserProfile} />
        <Stack.Screen name="discoverscreen" component={DiscoverScreen} />
        <Stack.Screen name="matchscreen" component={MatchScreen} />

        <Stack.Screen name="view" component={ViewStory} /> 
        <Stack.Screen name="chatscreen" component={ChatScreen} />
        <Stack.Screen name="textsrcn" component={TextScreen} />
        <Stack.Screen name="pay" component={PaymentScreen} />
        {/* <Stack.Screen name="view" component={ViewStory} /> */}
        {/* <Stack.Screen name="datingpage" component={DatingPage} />  */}





      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navbar


