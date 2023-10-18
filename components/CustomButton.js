import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

function CustomButton({onPress, title, hasMarginBottom, theme}) {
  const isPrimary = theme === 'primary';

  return (
    <View
      style={[styles.block, styles.overflow, hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={[styles.wrapper, isPrimary && styles.primaryWrapper]}
        android_ripple={{color: isPrimary ? '#ffffff' : '#FDD3D5'}}>
        <Text
          style={[
            styles.text,
            isPrimary ? styles.primaryText : styles.secondaryText,
          ]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
}
CustomButton.defaultProps = {
  theme: 'primary',
};
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
  },
  primaryWrapper: {
    backgroundColor: '#FDD3D5',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
  primaryText: {color: 'white'},
  secondaryText: {
    color: '#FDD3D5',
  },
  margin: {
    marginBottom: 8,
  },
});

export default CustomButton;
