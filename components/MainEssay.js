import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function MainEssay({question, title, body, time, nickname, image}) {
  const formatDate = time => {
    const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
    const formattedDate = new Date(time).toLocaleString(undefined, options);
    const [year, month, day] = formattedDate.split(/\D+/);

    return `${year}.${month}.${day}`;
  };
  return (
    <View style={styles.block}>
      <View style={styles.upBlock}>
        <Image
          source={{uri: image}}
          style={styles.profile}
          borderRadius={100}
        />
        <View>
          <Text>{nickname}</Text>
          <Text>{formatDate(time)}</Text>
        </View>
      </View>
      <View style={styles.borderLine}></View>
      <View style={styles.downBlock}>
        <Text style={styles.qeustion}>{question}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{body}</Text>
      </View>
    </View>
  );
}
export default MainEssay;

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'red',
    width: 300,
    height: 180,
    borderRadius: 20,
    marginVertical: 20,
  },
  borderLine: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#c8c8c8',
    borderStyle: 'dotted',
  },
  image: {
    height: 50,
    weight: 50,
    paddingRight: 6,
  },
  upBlock: {flexDirection: 'row', paddingLeft: 10, padding: 10},
  downBlock: {},
  profile: {
    height: 40,
    width: 40,
    paddingRight: 10,
  },

  //텍스트
  qeustion: {
    paddingHorizontal: 10,
    fontSize: 12,
    paddingBottom: 3,
    paddingTop: 2,
  },
  title: {fontSize: 16, paddingBottom: 2, paddingHorizontal: 10},
  content: {fontSize: 14, paddingHorizontal: 10},
  nickname: {},
  date: {},
});
