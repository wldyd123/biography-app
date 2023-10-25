import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, View} from 'react-native';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import MyPage from './MyPage';

const Tab = createBottomTabNavigator();
function MainTab() {
  <View style={styles.block}>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Mypage" component={MyPage} />
    </Tab.Navigator>
  </View>;
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    Index: 0,
  },
});

export default MainTab;
