import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import MainTab from './MainTab';
import WelcomeScreen from './WelcomeScreen';
import WebviewScreen from './WebviewScreen';
import SignUpScreen from './SignUpScreen';
import SetupProfileScreen from './SetupProfileScreen';
import PageScreen from './PageScreen';
import SettingScreen from './SettingScreen';
import ProfileScreen from './ModifyProfileScreen';
import {UserContext} from '../contexts/UserContext';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  const {user} = useContext(UserContext);

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Page"
            options={{title: '페이지', headerShown: false}}
            component={PageScreen}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Write"
            options={{title: '글쓰기'}}
            component={WriteScreen}
          />
        </>
      ) : (
        <>
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
          <Stack.Screen name="WebView" component={WebviewScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen
            name="SetupProfile"
            component={SetupProfileScreen}
            options={{headerTitleAlign: 'center'}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default RootStack;
