import * as React from 'react';
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, Border, FontSize, FontFamily} from '../GlobalStyles';
import SettingHeader from '../components/SettingHeader';
import Icon from 'react-native-vector-icons/Feather';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function InformationScreen({navigation}) {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.entireBlock}>
        <View style={styles.headerBlock}>
          <SettingHeader title={'내 정보 관리'} />
        </View>
        <View style={styles.contentBlock}>
          <View style={styles.informBox}>
            <View style={styles.firstBlock}>
              <View style={styles.block}>
                <Text style={styles.textBlock}>이메일</Text>
                <View style={styles.emailBox}>
                  <View style={styles.emailBlock}></View>
                  <Text>@</Text>
                  <View style={styles.emailBlock}></View>
                </View>
              </View>
              <View style={styles.block}>
                <Text style={styles.textBlock}>비밀번호</Text>
                <TextInput style={styles.passwordInput} />
              </View>
              <View justifyContent="flex-end">
                <Text style={styles.passwordText}>
                  영문/숫자/특수문자 중 2개 이상 조합 8자 이상
                </Text>
              </View>
              <View style={styles.block}>
                <Text style={styles.textBlock}>비밀번호 확인</Text>
                <TextInput style={styles.passwordInput} />
              </View>
            </View>
            <Pressable style={styles.reviseBtn}>
              <Text style={styles.reviseText}>수정신청</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  reviseText: {
    fontSize: 16,
  },
  email: {
    alignItems: 'flex-end',
  },
  emailBlock: {
    borderWidth: 1,
    height: 30,
  },
  emailText: {
    marginRight: 50,
  },
  reviseBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 100,
  },
  passwordText: {
    fontSize: 10,
  },
  entireBlock: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerBlock: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentBlock: {
    flex: 10,
    backgroundColor: 'white',
  },
  informBox: {
    borderRadius: 30,
    flex: 0.7,
    margin: 20,
    borderWidth: 2,
    padding: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textBlock: {
    width: 150,
    height: 30,
    backgroundColor: 'gray',
    marginRight: 50,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
  },
  emailBox: {
    flex: 1,
  },
  block: {flexDirection: 'row', margin: 5, marginBottom: 3},
  firstBlock: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export default InformationScreen;
