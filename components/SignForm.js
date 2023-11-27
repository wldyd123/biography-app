import React, {useRef} from 'react';
import {Text, Alert, StyleSheet} from 'react-native';
import BorderedInput from './BorderedInput';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';
import {sendMailAuth} from '../lib/auth';

function SignForm({isSignUp, onSubmit, form, createChangeTextHandler}) {
  const navigation = useNavigation();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  const {email, password, confirmPassword, authNumber} = form;

  const passwordCheck = password => {
    if (password.match(passwordRegEx) === null) {
      Alert.alert('실패', '유효하지 않은 비밀번호 입니다.');
    } else if (isSignUp && password !== confirmPassword) {
      Alert.alert('실패', '비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <>
      <BorderedInput
        hasMarginBottom={!isSignUp}
        placeholder="이메일"
        value={form.email}
        onChangeText={createChangeTextHandler('email')}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
      />

      {isSignUp && (
        <>
          <CustomButton
            title="인증하기"
            onPress={() => {
              sendMailAuth(form.email);
            }}
          />
          <BorderedInput
            placeholder="인증번호"
            value={form.authNumber}
            returnKeyType="done"
            onChangeText={createChangeTextHandler('authNumber')}
          />
          <CustomButton title="확인" />
        </>
      )}

      <BorderedInput
        placeholder="비밀번호"
        secureTextEntry
        // hasMarginBottom={isSignUp}
        value={form.password}
        onChangeText={createChangeTextHandler('password')}
        ref={passwordRef}
        returnKeyType={isSignUp ? 'next' : 'done'}
        onSubmitEditing={() => {
          if (isSignUp) {
            confirmPasswordRef.current.focus();
          } else {
            onSubmit();
          }
        }}
      />
      {isSignUp && (
        <>
          <Text style={styles.text}>
            영문/숫자/특수문자 중 2개 이상 조합 8자 이상
          </Text>
          <BorderedInput
            hasMarginBottom
            placeholder="비밀번호 확인"
            secureTextEntry
            value={form.confirmPassword}
            onChangeText={createChangeTextHandler('confirmPassword')}
            ref={confirmPasswordRef}
            returnKeyType="done"
            // onSubmitEditing={onSubmit}
          />
          <CustomButton
            title={'다음'}
            size="full"
            onPress={() => {
              passwordCheck(password);
              navigation.navigate('SignUp', {email: email});
            }}
          />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 8,
  },
});
export default SignForm;
