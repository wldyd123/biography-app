import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import usersStorage from '../storages/usersStorage';

function UserProfile() {
  const [userImage, setUserImage] = useState(null);
  const [oneliner, setOneliner] = useState('');
  const userName = 'Benseo';

  useEffect(() => {
    const getStoredContent = async () => {
      try {
        const line = await usersStorage.getLine();
        const image = await usersStorage.getImage();

        if (line || image) {
          const imageUri = image || '';
          setUserImage(imageUri.toString());
          setOneliner(line || '');

          console.log('oneliner', line || '');
        } else {
          setUserImage('');
        }
      } catch (error) {
        console.error('Error retrieving content:', error);
      }
    };

    getStoredContent();
  });

  return (
    <View style={styles.block}>
      <Image
        source={userImage ? {uri: userImage} : require('../assets/user.png')}
        style={styles.image}
      />
      <Text style={styles.name}>{userName}</Text>
      <Text style={styles.presentation}>{oneliner}</Text>
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
