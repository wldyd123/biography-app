import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import MainTab from './MainTab';
import WelcomeScreen from './WelcomeScreen';

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
    </Stack.Navigator>
  );
}

export default RootStack;
