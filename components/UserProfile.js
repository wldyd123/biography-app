import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function UserProfile() {
  const [userImage, setUserImage] = useState(null);
  const [introText, setIntroText] = useState('');
  const userName = 'Benseo';

  useEffect(() => {
    const getStoredContent = async () => {
      try {
        //Async에서 프로필 이미지 가져옴.
        const storedImage = await AsyncStorage.getItem('profileImage');
        //Async에서 소개글 가져옴.
        const storedIntroText = await AsyncStorage.getItem('oneliner');

        if (storedImage !== null) {
          setUserImage(storedImage);
        }
        if (storedIntroText !== null) {
          setIntroText(storedIntroText);
        }
      } catch (error) {
        console.error('Error retrieving content:', error);
      }
    };

    getStoredContent();
  }, []);

  return (
    <View style={styles.block}>
      <Image source={{uri: userImage}} style={styles.image} />
      <Text style={styles.name}>{userName}</Text>
      <Text style={styles.presentation}>{introText}</Text>
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
