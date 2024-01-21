import React from 'react';
import {SafeAreaView, TextInput, StyleSheet, View, Text} from 'react-native';
import WriteHeader from '../components/WriteHeader';

function Question(props) {
  return (
    <View style={styles.question}>
      <Text style={styles.questionText}>{props.ask}</Text>
    </View>
  );
}

function PageScreen({route, navigation, title, body}) {
  const {question} = route.params;

  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader />
      <View style={styles.listItemSeparatorStyle} />
      <View style={styles.block}>
        <Question ask={question} />

        <TextInput
          placeholder="제목을 입력하세요"
          style={styles.titleInput}
          returnKeyType="next"
          value={title}
        />

        <TextInput
          placeholder="내용을 입력하세요"
          style={styles.bodyInput}
          multiline
          textAlignVertical="top"
          value={body}
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
