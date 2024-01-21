import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

function SignButtons({isSignUp, onSubmit, loading}) {
  const navigation = useNavigation();

  // const onSecondaryButtonPress = () => {
  //   if (isSignUp) {
  //     navigation.goBack();
  //   } else {
  //     navigation.push('SignIn', {isSignUp: true});
  //   }
  // };

  if (loading) {
    return (
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator size={32} color="#FDD3D5" />
      </View>
    );
  }

  return (
    <View style={styles.buttons}>
      <CustomButton
        title={'로그인'}
        hasMarginBottom
        onPress={onSubmit}
        size="full"
      />
      <CustomButton
        title={'회원가입'}
        theme="secondary"
        onPress={() => {
          navigation.push('SignIn', {isSignUp: true});
        }}
        size="full"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  spinnerWrapper: {
    marginTop: 64,
    height: 104,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    marginTop: 64,
    marginBottom: 25,
  },
});

export default SignButtons;
