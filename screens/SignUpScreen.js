import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import BorderedInput from '../components/BorderedInput';

function SignUpScreen({navigation, route}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    authNumber: '',
  });

  const createChangeTextHandler = name => value => {
    setForm({...form, [name]: value});
  };
  return (
    <KeyboardAvoidingView
      style={styles.KeyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView styles={styles.fullscreen}>
        <BorderedInput placeholder="이름" />
        <BorderedInput placeholder="전화번호 " />
        <BorderedInput placeholder="생년월일 예: 19920708" />
        <BorderedInput placeholder="닉네임" />
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
    backgroundColor: 'white',
  },
});

export default SignUpScreen;
