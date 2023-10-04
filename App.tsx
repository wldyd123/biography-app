import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import MyPage from './screens/MyPage';

const Tab = createBottomTabNavigator();

function App() {

  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Notification" component={NotificationScreen}/>
        <Tab.Screen name="Mypage" component={MyPage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
