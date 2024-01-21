import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MainEssay from '../components/MainEssay';

function HomeHeader() {
  return (
    <View style={styles.homeHeader}>
      <Text>어플 로고</Text>
    </View>
  );
}

function MenuTab() {
  return (
    <View style={styles.menuTab}>
      <Text style={styles.newest}>최신글</Text>
      <View style={styles.line}></View>
    </View>
  );
}
//스크롤 뷰 넣을 것.
function HomeScreen() {
  return (
    <View style={styles.block}>
      <HomeHeader />
      <MenuTab />

      <View style={styles.essay}>
        <ScrollView>
          <View style={styles.essayZone}>
            <MainEssay />
            <MainEssay />
            <MainEssay />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  essay: {
    marginTop: 10,
  },
  homeHeader: {
    height: 50,
  },
  menuTab: {
    height: 30,
    alignItems: 'center',
  },
  essayZone: {
    alignItems: 'center',
  },
  line: {
    height: 2,
    width: '20%',
    backgroundColor: '#EC8F8F',
    borderStyle: 'dotted',
  },

  //텍스트
  newest: {
    fontSize: 20,
    paddingBottom: 8,
  },
});
export default HomeScreen;
