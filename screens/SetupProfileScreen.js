import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Text,
  Pressable,
  Image,
} from 'react-native';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';
import {setUserOneliner} from '../lib/users';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

function SetupProfileScreen({navigation, route}) {
  const [oneliner, setOneliner] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const onChangeText = value => {
    setOneliner(value);
  };
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
      },
    );
  };
  const onSubmit = async () => {
    setLoading(true);

    let photoURL = null;

    if (response) {
      const asset = response.assets[0];
      const extension = asset.fileName.split('.').pop();
      const reference = storage().ref(`/profile/${uid}.${extension}`);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.fullscreen}>
        <View style={styles.container}>
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
        </View>
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
              setUserOneliner(oneliner, route.params.id);
              // navigation.navigate('MainTab');
            }}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {flex: 1},
  fullscreen: {flex: 1},
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageUpload: {marginBottom: 20},
  circle: {
    backgroundColor: '#cdcdcd',
    borderRadius: 64,
    width: 128,
    height: 128,
  },
  form: {flex: 1, margin: 50, justifyContent: 'flex-start'},
  profile: {marginBottom: 5, height: 128},
});

export default SetupProfileScreen;
