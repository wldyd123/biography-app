import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function UserProfile() {
  const userName = 'Benseo';
  const userPresentation = '하루하루 채워가는 삶을 사는 벤세오입니다.';

  return (
    <View style={styles.block}>
      <Image
        source={{
          uri: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        }}
        style={styles.image}
      />
      <Text style={styles.name}>{userName}</Text>
      <Text style={styles.presentation}>{userPresentation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 200,
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
  },
  presentation: {
    fontSize: 15,
  },
});
export default UserProfile;
