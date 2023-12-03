import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import MyPage from './MyPage';
import IconRenderer from '../components/Icon';

const Tab = createBottomTabNavigator();
function MainTab({navigation}) {
  return (
    <View style={styles.block}>
      <Tab.Navigator initialRouteName="Mypage">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: '알림',
          }}
        />
        <Tab.Screen
          name="Mypage"
          component={MyPage}
          options={{
            title: '기록들',
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
