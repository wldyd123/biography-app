import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SettingHeader from '../components/SettingHeader';
import AsyncStorage from '@react-native-community/async-storage';
import MyEssayHeader from '../components/MyEssayHeader';

function Header() {
  return (
    <View style={styles.headerBlock}>
      <Image
        source={require('../assets/images/human.jpg')}
        borderRadius={100}
        style={styles.image}
      />
      <Text style={styles.name}>김소라</Text>
    </View>
  );
}

function MyEssayScreen() {
  const [essayTitle, setEssayTitle] = useState('');
  const [essayBody, setEssayBody] = useState('');

  useEffect(() => {
    const getStoredText = async () => {
      try {
        const storedTitle = await AsyncStorage.getItem('essayTitle');
        const storedBody = await AsyncStorage.getItem('essayBody');

        if (storedTitle !== null) {
          setEssayTitle(storedTitle);
        }
        if (storedBody !== null) {
          setEssayBody(storedBody);
        }
      } catch (error) {
        console.error('Error retrieving text:', error);
      }
    };
    getStoredText();
  }, [essayTitle, essayBody]);

  return (
    <View style={styles.block}>
      <MyEssayHeader />
      <View style={styles.content}>
        <Header />
        <Text style={styles.title}>{essayTitle}</Text>
        <View>
          <Text style={styles.content}>{essayBody}</Text>
        </View>
        <Text style={styles.date}>2023.09.25</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 40,
    paddingHorizontal: 15,
  },
  image: {
    height: 40,
    width: 40,
  },
  settingHeader: {},
  //텍스트
  name: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    paddingBottom: 2,
    paddingHorizontal: 15,
    paddingBottom: 30,
    fontWeight: 'bold',
  },
  content: {fontSize: 14, paddingHorizontal: 30, paddingBottom: 70},
  date: {paddingLeft: 10},
});
export default MyEssayScreen;
