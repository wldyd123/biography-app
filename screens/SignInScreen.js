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

function SignInScreen({navigation, route}) {
  const {isSignUp} = route.params || {};
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    authNumber: '',
  });
  const [loading, setLoading] = useState();

  const createChangeTextHandler = name => value => {
    setForm({...form, [name]: value});
  };

  const onSubmit = async () => {
    Keyboard.dismiss();

    const {email, password, confirmPassword} = form;

    setLoading(true);
    const info = {email, password};

    try {
      const {user} = isSignUp ? await signUp(info) : await signIn(info);
      console.log(user);
    } catch (e) {
      const messages = {
        'auth/email-already-in-use': '이미 가입된 이메일입니다.',
        'auth/wrong-password': '잘못된 비밀번호입니다.',
        'auth/user-not-found': '존재하지 않는 계정입니다.',
        'auth/invalid-email': '유효하지 않은 이메일 주소입니다.',
      };
      const msg = messages[e.code] || `${isSignUp ? '가입' : '로그인'} 실패`;
      Alert.alert('실패', msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.fullscreen}>
        {!isSignUp ? (
          <Text style={styles.text}>SignInScreen</Text>
        ) : (
          <Text style={styles.instruction}>
            아래 칸에 해당 정보를 기입해주세요.
          </Text>
        )}
        <View style={styles.form}>
          <SignInForm
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            form={form}
            createChangeTextHandler={createChangeTextHandler}
          />
          {!isSignUp && (
            <>
              <SignButtons
                isSignUp={isSignUp}
                onSubmit={onSubmit}
                loading={loading}
              />
              <KakaoLogin
                onPress={() => {
                  navigation.navigate('WebView');
                }}
              />
            </>
          )}
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
    backgroundColor: 'white',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  instruction: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default SignInScreen;
