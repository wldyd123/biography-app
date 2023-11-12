import React from 'react';
import {SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import WebView from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WebviewScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={styles.webview}
        source={{
          uri: 'https://kauth.kakao.com/oauth/authorize?client_id=7338375e54725825fcbef315481e6452&redirect_uri=http://localhost:8082/auth/kakao/callback&response_type=code',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});

export default WebviewScreen;
