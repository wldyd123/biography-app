import React from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';

function KakaoLogin({onPress}) {
  return (
    <Pressable style={styles.logo} onPress={onPress}>
      <Image source={require('../assets/kakao_login_button.png')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    paddingTop: 25,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
});

export default KakaoLogin;
