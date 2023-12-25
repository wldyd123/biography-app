import React, {useState} from 'react';
import {Pressable, StyleSheet, View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function WriteHeader() {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };

  const [isPublic, setIsPublic] = useState(true);
  const toggleVisibility = () => {
    setIsPublic(!isPublic);
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
          <Pressable>
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
