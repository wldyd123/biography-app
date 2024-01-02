import React from 'react';
import {View, StyleSheet, Text, Pressable, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SettingScreen({navigation}) {
  const onGoBack = () => {
    navigation.pop();
  };

  const withdrawAlert = () =>
    Alert.alert('', '탈퇴하시겠습니까? \n모든 글과 활동들이 영구삭제됩니다. ', [
      {
        text: '취소',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: '확인', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={styles.block}>
      <View style={styles.header}>
        <Pressable onPress={onGoBack} android_ripple={{color: '#ededed'}}>
          <Icon name="chevron-left" size={45} color="#424242" />
        </Pressable>
      </View>
      <View style={styles.allMenu}>
        <View style={styles.menu}>
          <Pressable onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.menuText}>프로필 관리</Text>
          </Pressable>
        </View>
        <View style={styles.menu}>
          <Pressable onPress={() => navigation.navigate('Information')}>
            <Text style={styles.menuText}>내정보관리</Text>
          </Pressable>
        </View>
        <View style={styles.menu}>
          <Pressable>
            <Text style={styles.menuText}>로그아웃</Text>
          </Pressable>
        </View>
        <View style={styles.menu} backgroundColor="#AC2525">
          <Pressable onPress={withdrawAlert}>
            <Text style={styles.menuText}>탈퇴 하기</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flex: 0.1,
  },
  allMenu: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  menu: {
    backgroundColor: '#D9D9D9',
    flex: 0.09,
    justifyContent: 'center',
  },
  menuText: {
    paddingLeft: '5%',
    fontSize: 20,
    color: 'black',
  },
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
});

export default SettingScreen;
