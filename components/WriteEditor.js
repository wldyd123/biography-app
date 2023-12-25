import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

function Question({route, navigation}) {
  return (
    <View style={styles.question}>
      <Text style={styles.questionText}>{question.ask}</Text>
    </View>
  );
}

function WriteEditor({title, body, onChangeTitle, onChangeBody}) {
  const SeparatorView = () => {
    return <View style={styles.listItemSeparatorStyle} />;
  };

  return (
    <View style={styles.block}>
      <Question ask={question} />

      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
      />

      <TextInput
        placeholder="내용을 입력하세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
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
  },
});

export default WriteEditor;
