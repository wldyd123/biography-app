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
          <BorderedInput
            placeholder="한 줄 소개 작성 (선택)"
            profile={styles.profile}
          />
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 64,
  },

  form: {justifyContent: 'center'},
  circle: {
    // flex: 1,
    marginBottom: 80,
    backgroundColor: '#cdcdcd',
    borderRadius: 64,
    width: 128,
    height: 128,
  },
  profile: {height: 128, width: },
});

export default SetupProfileScreen;
