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
      <View style={styles.buttonContainer}>
        <CustomButton
          theme="primary"
          title="시작하기"
          onPress={() => navigation.navigate('SignIn')}
          style={styles.button}
          size="full"
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
    padding: 75,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#505050',
  },
  buttonContainer: {
    flex: 0.5,
    // width: '50%',
    paddingHorizontal: 16,
  },
});
export default WelcomeScreen;
