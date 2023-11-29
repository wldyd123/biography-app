import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function WriteEditor({title, body, onChangeTitle, onChangeBody}) {
  const SeparatorView = () => {
    return <View style={styles.listItemSeparatorStyle} />;
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
      />
      <SeparatorView />
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
  block: {flex: 1, padding: 16},
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
  listItemSeparatorStyle: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#c8c8c8',
  },
});

export default WriteEditor;
