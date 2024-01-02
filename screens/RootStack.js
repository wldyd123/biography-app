import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import MainTab from './MainTab';
import WelcomeScreen from './WelcomeScreen';
import WebviewScreen from './WebviewScreen';
import SignUpScreen from './SignUpScreen';
import SetupProfileScreen from './SetupProfileScreen';
import ListScreen from './ListScreen';
import PageScreen from './PageScreen';
import SettingScreen from './SettingScreen';
import ProfileScreen from './ProfileScreen';
import InformationScreen from './InformationScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        options={{title: '글쓰기'}}
        component={ListScreen}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Information"
        component={InformationScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="WebView" component={WebviewScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="SetupProfile"
        component={SetupProfileScreen}
        options={{headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Page"
        options={{title: '페이지', headerShown: false}}
        component={PageScreen}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
