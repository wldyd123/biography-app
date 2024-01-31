import React, {useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet, View, Text} from 'react-native';
import WriteHeader from '../components/WriteHeader';
import AsyncStorage from '@react-native-community/async-storage';

function Question(props) {
  return (
    <View style={styles.question}>
      <Text style={styles.questionText}>{props.ask}</Text>
    </View>
  );
}

function PageScreen({route, navigation}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const saveText = async () => {
    try {
      await AsyncStorage.setItem('essayTitle', title);
      await AsyncStorage.setItem('essayBody', body);
    } catch (error) {
      console.error('Error saving text:', error);
    }
  };
  const {question} = route.params || {};
  const SeparatorView = () => {
    return <View style={styles.listItemSeparatorStyle} />;
  };

  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader onSave={saveText} />
      <SeparatorView />
      <View style={styles.block}>
        {question && <Question ask={question} />}

        <TextInput
          placeholder="제목을 입력하세요"
          style={styles.titleInput}
          returnKeyType="next"
          value={title}
          onChangeText={value => setTitle(value)}
        />

        <TextInput
          placeholder="내용을 입력하세요"
          style={styles.bodyInput}
          multiline
          textAlignVertical="top"
          value={body}
          onChangeText={value => setBody(value)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  listItemSeparatorStyle: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#c8c8c8',
  },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    flex: 1,
  },
  bodyInput: {
    fontSize: 16,
    paddingTop: 10,
    color: '#263238',
    flex: 4,
  },
  listItemSeparatorStyle: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#c8c8c8',
  },
  question: {
    flex: 1,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default PageScreen;
