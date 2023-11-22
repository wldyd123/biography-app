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
import {createUser} from '../lib/users';

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

  const onSubmit = () => {
    createUser({
      id: route.params.email,
      userName: form.userName,
      telNumber: form.telNumber,
      birthday: form.birthday,
      nickname: form.nickname,
    });
    navigation.navigate('SetupProfile');
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
            onChangeText={createChangeTextHandler('userName')}
          />
          <BorderedInput
            hasMarginBottom
            autoCorrect={false}
            placeholder="전화번호 "
            onChangeText={createChangeTextHandler('telNumber')}
          />
          <BorderedInput
            hasMarginBottom
            autoCorrect={false}
            placeholder="생년월일 예: 19920708"
            onChangeText={createChangeTextHandler('birthday')}
          />
          <BorderedInput
            hasMarginBottom
            autoCorrect={false}
            placeholder="닉네임"
            onChangeText={createChangeTextHandler('nickname')}
          />
          <CustomButton title="다음" onPress={onSubmit} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {flex: 1, backgroundColor: 'white'},
  fullscreen: {
    flex: 1,
    justifyContent: 'center',
  },

  instruction: {
    flex: 0.3,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  formArea: {
    paddingHorizontal: 16,
  },
});

export default SignUpScreen;
