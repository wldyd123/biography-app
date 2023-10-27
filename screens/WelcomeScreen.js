import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function WelcomeScreen({navigation, route}) {
  return (
    <View style={styles.block}>
      <Text>
        질문을 통해 나의 삶을 정리해보는 자서전 커뮤니티 '가벼운 자서전'
      </Text>
      <Button title="로그인" onPress={() => navigation.navigate('SignIn')} />
      {/* <Button title="회원가입" onPress={}></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
export default WelcomeScreen;
