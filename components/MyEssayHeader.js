import React, {useState} from 'react';
import {Pressable, StyleSheet, View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MyEssayHeader(props) {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <Pressable
          style={styles.iconButton}
          onPress={onGoBack}
          android_ripple={{color: '#ededed'}}>
          <Icon name="chevron-left" size={30} color="#424242" />
        </Pressable>
      </View>

      <View style={styles.twoButtons}>
        <Pressable style={styles.reviseButton}>
          <Text>수정하기</Text>
        </Pressable>
        <Pressable style={styles.deleteButton}>
          <Text>삭제</Text>
        </Pressable>
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
  reviseButton: {
    width: 65,
    height: 32,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AEE0FC',
    borderColor: '#0052F2',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  deleteButton: {
    marginLeft: 8,
    backgroundColor: '#AEE0FC',
    width: 45,
    height: 28,
    borderRadius: 30,
    borderColor: '#0052F2',
    borderStyle: 'solid',
    borderWidth: 1,
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
  twoButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MyEssayHeader;
