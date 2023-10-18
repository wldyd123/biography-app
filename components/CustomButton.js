import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

function CustomButton({onPress, title, hasMarginBottom}) {
  return (
    <View
      style={[styles.block, styles.overflow, hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [styles.wrapper]}
        android_ripple={{color: '#ffffff'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overflow: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  wrapper: {
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6200ee',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
  margin: {
    marginBottom: 8,
  },
});

export default CustomButton;
