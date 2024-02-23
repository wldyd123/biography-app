import React, {useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet, View, Text} from 'react-native';
import essaysStorage from '../storages/essaysStorage';
import EditWriteHeader from '../components/EditWriteHeader';
import updateEssay from '../api/essayapi';

function Question(props) {
  return (
    <View style={styles.question}>
      <Text style={styles.questionText}>{props.ask}</Text>
    </View>
  );
}

function EditPageScreen({route, navigation}) {
  // title, body 구분에서 -> Essay로 수정.
  const {
    id,
    title: initialTitle,
    body: initialBody,
    question,
    isPublic: initialIsPublic,
  } = route.params || {};
  const [title, setTitle] = useState(initialTitle || '');
  const [body, setBody] = useState(initialBody || '');
  const [isPublic, setIsPublic] = useState(initialIsPublic);

  const saveEssay = async publicStatus => {
    console.log('publicStatus : ', publicStatus);
    setIsPublic(publicStatus);

    try {
      //새로운 Essay 객체 생성.
      // const updatedEssay = {
      //   id: id,
      //   title: title,
      //   body: body,
      //   createdAt: Date.now(),
      //   isPublic: publicStatus,
      // };
      // console.log('isPublic : ', isPublic);
      // //그리고 storage에 업데이트된 Essays 저장.
      // await essaysStorage.update(id, updatedEssay);

      const essayId = id;
      const updatedTitle = title;
      const updatedContent = body;

      updateEssay(essayId, updatedTitle, updatedContent);

      console.log('Essay updated successfully');
      navigation.navigate('MoveToMyEssay', {
        id: id,
        question: question,
        title: title,
        body: body,
        time: Date.now(),
        isPublic: isPublic,
      });
    } catch (error) {
      console.error('Error saving essay:', error);
    }
  };

  const SeparatorView = () => {
    return <View style={styles.listItemSeparatorStyle} />;
  };

  return (
    <SafeAreaView style={styles.block}>
      <EditWriteHeader onSave={saveEssay} defaultPublic={isPublic} />
      <SeparatorView />
      <View style={styles.block}>
        {question && <Question ask={question} />}

        <TextInput
          placeholder="제목을 입력하세요"
          style={styles.titleInput}
          returnKeyType="next"
          defaultValue={initialTitle}
          onChangeText={value => setTitle(value)}
        />

        <TextInput
          placeholder="내용을 입력하세요"
          style={styles.bodyInput}
          multiline
          textAlignVertical="top"
          defaultValue={initialBody}
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

export default EditPageScreen;
