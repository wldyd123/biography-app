import React, {useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Text,
  Pressable,
} from 'react-native';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';
import {setUserOneliner} from '../lib/users';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';

function SetupProfileScreen({navigation, route}) {
  const [oneliner, setOneliner] = useState('');
  const [response, setResponse] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
      },
      res => {
        if (res.didCancel) {
          return;
        }
        setResponse(res);
        AsyncStorage.setItem('profileImage', res?.assets[0]?.uri);
        //이미지를 AsyncStorage에 저장.
      },
    );
  };

  const onChangeText = () => {
    AsyncStorage.setItem('oneliner', oneliner);
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.imageUpload}>이미지 등록 (선택)</Text>
        <Pressable onPress={onSelectImage}>
          <Image
            style={styles.circle}
            source={
              response
                ? {uri: response?.assets[0]?.uri}
                : require('../assets/user.png')
            }
          />
        </Pressable>

        <View style={styles.form}>
          <BorderedInput
            placeholder="한 줄 소개 작성 (선택)"
            value={oneliner}
            profile={styles.profile}
            onChangeText={onChangeText}
            returnKeyType="done"
          />
          <CustomButton
            title="완료"
            onPress={() => {
              navigation.navigate('MainTab');
            }}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    // flex: 1,
  },
  fullscreen: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 64,
  },
  imageUpload: {
    padding: 20,
  },
  circle: {
    // flex: 1,
    marginBottom: 80,
    backgroundColor: '#cdcdcd',
    borderRadius: 64,
    width: 128,
    height: 128,
  },
  form: {justifyContent: 'center'},
  profile: {height: 128, width: 128},
});

export default SetupProfileScreen;
