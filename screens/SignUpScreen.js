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

import SignButtons from '../components/SignButtons';
import SignInForm from '../components/SignForm';
import KakaoLogin from '../components/KakaoLogin';
import {signIn, signUp} from '../lib/auth';

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
      <SafeAreaView styles={styles.fullscreen} />
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
