import React, {useState} from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import essaysStorage from '../storages/essaysStorage';
import {CommonActions} from '@react-navigation/native';

function WriteHeader({onSave}) {
  const navigation = useNavigation();
  const [isPublic, setIsPublic] = useState(true);
  const toggleVisibility = () => {
    setIsPublic(!isPublic);
  };

  const onGoBack = () => {
    navigation.pop();
  };

  const onNavigateToEssay = async () => {
    await onSave(); //onSave호출하여 essay 저장.

    const storedEssays = await essaysStorage.get(); //글 목록 갱신.
    navigation.navigate('Essay');

    const essayScreen = navigation
      .getState()
      .routes.find(route => route.name === 'Essay'); //'Essay'라는 스크린을 찾아 essayScreen변수에 할당.
    if (essayScreen) {
      //essay 스크린이 존재하는 경우에만 다음 동작 수행.
      navigation.dispatch({
        //setParams로 essay스크린에 전달할 파라미터 설정.
        ...CommonActions.setParams({refresh: storedEssays}), //refresh라는 파라미터 설정하고, 이 값으로 storedEssays를 전달함.
        source: essayScreen.key, //이 액션이 어디서 시작되었는지 지정. essayScreen에서 시작되었음을 나타내기 위함.
      });
    }
  };

  return (
    <View style={styles.block}>
      <View flexDirection="row">
        <View style={styles.iconButtonWrapper}>
          <Pressable
            style={styles.iconButton}
            onPress={onGoBack}
            android_ripple={{color: '#ededed'}}>
            <Icon name="arrow-back" size={24} color="#424242" />
          </Pressable>
        </View>
        <Text style={styles.headerfont}>페이지</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.public}>
          <Pressable onPress={toggleVisibility}>
            <Text style={styles.buttonText}>
              {isPublic ? '공개' : '비공개'}
            </Text>
          </Pressable>
        </View>

        <View style={styles.complete}>
          <Pressable onPress={onNavigateToEssay}>
            <Text style={styles.buttonText}>완료</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  public: {
    width: 60,
    height: 32,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FDD3D5',
    borderStyle: 'solid',
    borderWidth: 3,
  },
  complete: {
    marginLeft: 8,
    backgroundColor: '#FDD3D5',
    width: 45,
    height: 32,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  headerfont: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default WriteHeader;
