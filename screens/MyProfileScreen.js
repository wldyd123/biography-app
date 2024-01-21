import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import UserPosts from '../components/UserPosts';
import UserProfile from '../components/UserProfile';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MyProfileScreen({navigation}) {
  return (
    <View style={styles.block}>
      <Pressable
        style={styles.SettingButton}
        onPress={() => navigation.navigate('Setting')}>
        <Icon name="settings" size={24} />
      </Pressable>
      <UserProfile />
      <UserPosts />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  SettingButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
});

export default MyProfileScreen;
