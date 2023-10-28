import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

function WelcomeScreen({navigation, route}) {
  return (
    <>
      <View style={styles.block}>
        <Text style={styles.text}>
          질문을 통해 나의 삶을 정리해보는 자서전 커뮤니티 '가벼운 자서전'
        </Text>
      </View>
      <View style={styles.button}>
        <CustomButton
          theme="primary"
          title="시작하기"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  text: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#505050',
  },
  button: {
    flex: 0.5,
    // width: '50%',
    paddingHorizontal: 16,
  },
});
export default WelcomeScreen;
