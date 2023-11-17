import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';

function SignUpScreen({navigation, route}) {
  const [form, setForm] = useState({
    userName: '',
    telNumber: '',
    birthday: '',
    nickname: '',
  });

  const createChangeTextHandler = name => value => {
    setForm({...form, [name]: value});
  };
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.instruction}>
          아래 칸에 해당 정보를 기입해주세요.
        </Text>
        <View style={styles.formArea}>
          <BorderedInput
            hasMarginBottom
            placeholder="이름"
            autoCorrect={false}
            returnKeyType="next"
          />
          <BorderedInput
            hasMarginBottom
            autoCorrect={false}
            placeholder="전화번호 "
          />
          <BorderedInput
            hasMarginBottom
            autoCorrect={false}
            placeholder="생년월일 예: 19920708"
          />
          <BorderedInput
            hasMarginBottom
            autoCorrect={false}
            placeholder="닉네임"
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  instruction: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  fullscreen: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default SignUpScreen;
