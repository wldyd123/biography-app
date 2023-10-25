import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserPosts from '../components/UserPosts';
import UserProfile from '../components/UserProfile';

function MyPage() {
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

export default MyPage;
