import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import MainTab from './MainTab';
import WelcomeScreen from './WelcomeScreen';
import WebviewScreen from './WebviewScreen';
import SignUpScreen from './SignUpScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
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
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="WebView" component={WebviewScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
