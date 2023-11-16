import React from 'react';
import {StyleSheet, View, Pressable, Text, Platform} from 'react-native';

function CustomButton({onPress, title, hasMarginBottom, theme, size}) {
  const isPrimary = theme === 'primary';
  const isFullButton = size === 'full';

  return (
    <View
      style={[!isFullButton && styles.block, hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.fullWrapper,
          !isFullButton && styles.wrapper,
          isPrimary && styles.primaryWrapper,
          Platform.OS === 'ios' && pressed && {opacity: 0.5},
        ]}
        android_ripple={{
          color: isPrimary ? '#ffffff' : '#FDD3D5',
        }}>
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
  block: {
    alignItems: 'flex-end',
  },
  overflow: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  fullWrapper: {
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor 제거
  },
  wrapper: {
    width: 70,
    height: 30,
    margin: 8,
  },
  primaryWrapper: {
    backgroundColor: '#FDD3D5',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: '#FDD3D5',
  },
  margin: {
    marginBottom: 16,
  },
});

export default CustomButton;
