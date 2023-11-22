import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';
import {createUser} from '../lib/users';

function SetupProfileScreen({navigation, route}) {
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.fullscreen}>
        <View style={styles.circle} />
        <View style={styles.form}>
          <BorderedInput placeholder="한 줄 소개 작성 (선택)" />
          <CustomButton title="다음" />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  fullscreen: {
    flex: 1,
    justifyContent: 'center',
  },
  circle: {
    padding: '32',
    backgroundColor: '#cdcdcd',
    borderRadius: 64,
    width: 128,
    height: 128,
  },
});

export default SetupProfileScreen;
