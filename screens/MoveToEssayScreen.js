import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Pressable, Button} from 'react-native';
import SettingHeader from '../components/SettingHeader';
import essaysStorage from '../storages/essaysStorage';
import usersStorage from '../storages/usersStorage';
import {useNavigation, useRoute} from '@react-navigation/native';

function Header({image, nickname}) {
  return (
    <View style={styles.headerBlock}>
      <Image source={{uri: image}} borderRadius={100} style={styles.image} />
      <Text style={styles.name}>{nickname}</Text>
    </View>
  );
}

function MoveToEssayScreen() {
  const [essayData, setEssayData] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const {question, title, body, time, nickname, image} = route.params;
    setEssayData({question, title, body, time, nickname, image});
  }, [route.params, navigation]);

  if (!essayData) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

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

  const moveToMyPage = () => {
    navigation.navigate('MyPage');
  };
  const moveToHomeScreen = () => {
    navigation.navigate('Home');
  };
  const moveToListScreen = () => {
    navigation.navigate('List');
  };
  return (
    <View style={styles.block}>
      <View>
        <SettingHeader />
        <Button title="Clear AsyncStorage" onPress={clearAsyncStorage} />
      </View>
      <Header image={essayData.image} nickname={essayData.nickname} />
      <Text style={styles.question}>{essayData.question}</Text>
      <Text style={styles.title}>{essayData.title}</Text>
      <View>
        <Text style={styles.content}>{essayData.body}</Text>
      </View>
      <Text style={styles.date}>{formatDate(essayData.time)}</Text>
      <Button title="Move to MyPage" onPress={moveToMyPage} />
      <Button title="Move to HomeScreen" onPress={moveToHomeScreen} />
      <Button title="Move to ListScreen" onPress={moveToListScreen} />
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
export default MoveToEssayScreen;
