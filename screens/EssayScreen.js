import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Pressable, Button} from 'react-native';
import SettingHeader from '../components/SettingHeader';
import essaysStorage from '../storages/essaysStorage';

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

function EssayScreen() {
  const [essayTitle, setEssayTitle] = useState('');
  const [essayBody, setEssayBody] = useState('');
  const [essayTime, setEssayTime] = useState();
  const [essayQuestion, setEssayQuestion] = useState('');

  useEffect(() => {
    const getStoredEssay = async () => {
      try {
        const storedEssays = await essaysStorage.get();
        if (storedEssays.length > 0) {
          const lastEssay = storedEssays[storedEssays.length - 1];
          setEssayTitle(lastEssay.title);
          setEssayBody(lastEssay.body);
          setEssayTime(lastEssay.createdAt);
          setEssayQuestion(lastEssay.question);
        }
      } catch (error) {
        console.error('Error retrieving essay:', error);
      }
    };
    getStoredEssay();
  }, []);

  const clearAsyncStorage = async () => {
    try {
      await essaysStorage.clear();
    } catch (error) {
      console.error('Failed to clear AsyncStorage:', error);
    }
  };

  const formatDate = time => {
    const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
    const formattedDate = new Date(time).toLocaleString(undefined, options);
    const [year, month, day] = formattedDate.split(/\D+/);

    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <View style={styles.block}>
      <View>
        <SettingHeader />
        <Button title="Clear AsyncStorage" onPress={clearAsyncStorage} />
      </View>
      <Header />
      <Text style={styles.question}>{essayQuestion}</Text>
      <Text style={styles.title}>{essayTitle}</Text>
      <View>
        <Text style={styles.content}>{essayBody}</Text>
      </View>
      <Text style={styles.date}>{formatDate(essayTime)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
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
  question: {
    fontSize: 13,
    paddingBottom: 2,
    paddingHorizontal: 15,
    paddingBottom: 15,
    fontWeight: 'normal',
    color: 'gray',
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
export default EssayScreen;
