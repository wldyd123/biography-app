import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import UserPosts from '../components/UserPosts';
import UserProfile from '../components/UserProfile';

function MyPage({navigation}) {
  const moveToListScreen = () => {
    navigation.navigate('List');
  };
  return (
    <View style={styles.block}>
      <Button title="Move to ListScreen" onPress={moveToListScreen} />
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
