import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.block}>
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
export default HomeScreen;
