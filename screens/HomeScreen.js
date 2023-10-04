import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserProfile from '../components/UserProfile';
import UserPosts from '../components/UserPosts';

function HomeScreen() {
  return (
    <View style={styles.block}>
      <UserProfile />
      <UserPosts />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
export default HomeScreen;
