import React from 'react';
import {StyleSheet, Pressable, Text, View, TextInput} from 'react-native';

import SettingHeader from '../components/SettingHeader';
import Icon from 'react-native-vector-icons/Feather';

const Menu = props => {
  return (
    <View style={styles.menuBlock}>
      <Text style={styles.menuText}>{props.title}</Text>
    </View>
  );
};

function ModifyProfileScreen({navigation}) {
  return (
    //전체블럭과 헤더블럭
    <View style={styles.block}>
      {/*헤더블럭*/}
      <View style={styles.headerBlock}>
        <SettingHeader title="프로필 관리" />
        {/*변경하기버튼*/}
        <View style={styles.btnWrapper}>
          <View style={styles.changeBtn}>
            <Pressable>
              <Text>변경하기</Text>
            </Pressable>
          </View>
        </View>
        {/*변경하기 버튼 블럭*/}
      </View>
      {/*헤더블럭*/}
      <View style={styles.profileBlock}>
        <View style={styles.imageBlock}>
          <Menu title={'이미지'} />
          {/*그 뭐냐, icon은 closed tag즉 view같은 걸로 감싸줘야 함다...*/}
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.pictureBlock}>
              <Icon name="user" color="black" size={70} />
            </View>
            <View style={styles.twoBtn}>
              <Pressable style={styles.imageBtn}>
                <Text style={styles.btnText}>등록</Text>
              </Pressable>
              <Pressable style={styles.imageBtn}>
                <Text style={styles.btnText}>삭제</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.nameBlock}>
          <Menu title={'닉네임'} />
          <View>
            <TextInput style={{borderBottomWidth: 1, marginHorizontal: 10}} />
          </View>
        </View>
        <View style={styles.introduceBlock}>
          <Menu title={'한줄 소개'} />
          <View>
            <TextInput
              style={{borderWidth: 1, borderRadius: 15, marginTop: 10}}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
export default ModifyProfileScreen;

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    flex: 1,
  },
  headerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBlock: {flex: 2, justifyContent: 'center'},

  nameBlock: {flex: 1, marginVertical: 5},
  introduceBlock: {flex: 3},
  btnWrapper: {
    height: 50,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 65,
    height: 25,
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1.5,
  },
  profileBlock: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 30,
  },
  menuBlock: {
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  pictureBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  imageBtn: {
    width: 40,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 5,
  },
  btnText: {
    fontSize: 14,
  },
  twoBtn: {
    marginTop: 10,
    flexDirection: 'row',
  },
});
