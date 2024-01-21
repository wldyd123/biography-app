import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import HomeScreen from './HomeScreen';

import MyProfileScreen from './MyProfileScreen';
import WriteScreen from './WriteScreen';
import SettingScreen from './SettingScreen';
import Icon from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

function MainTab() {
  //TODO : tabBarIcon 구현
  return (
    <View style={styles.block}>
      <Tab.Navigator
        initialRouteName="Mypage"
        activeColor="#e91e63"
        screenOptions={{tabBarShowLabel: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
          }}
        />
        <Tab.Screen
          name="Write"
          component={WriteScreen}
          options={{
            title: '글쓰기',
          }}
        />
        <Tab.Screen
          name="MyProfile"
          component={MyProfileScreen}
          options={{
            title: '기록들',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerShown: false,
            tabBarButton: () => null,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    Index: 0,
  },
});

export default MainTab;
