import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function MainEssay() {
  return (
    <View style={styles.block}>
      <View style={styles.upBlock}>
        <Image
          source={require('../assets/images/human.jpg')}
          style={styles.profile}
          borderRadius={100}
        />
        <View>
          <Text>김소라</Text>
          <Text>2023.09.25</Text>
        </View>
      </View>
      <View style={styles.borderLine}></View>
      <View style={styles.downBlock}>
        <Text style={styles.qeustion}>
          [관계] 운명을 느낀 순간이 있다면 언제인가요?{' '}
        </Text>
        <Text style={styles.title}>윈스턴처칠의 명언</Text>
        <Text style={styles.content}>
          태도는 사소한 것이지만, 그것이 만드는 차이는 엄청나다. 즉 어떤
          마음가짐을 갖느냐가 어떤 일을 하느냐보다 더 큰 가치를 만들 수 있다.
          가장 중요한 것은 질문을 멈추지 않는 것이다. 호기심은 그 자체만으로도
          존재 이유를 갖고 있다. 영원성, 생명, 그리고 현실의 놀라운 구조에 대해
          숙고하는 사람은 경외감을 느낄 수 밖에 없다. 매일 이러한 비밀의
          실타래를 한 가닥씩 푸는 것만으로도 충분하다. 신성한 호기심을 절대로
          잃지 말아라. 혁신은 연구개발 자금을 얼마나 갖고 있냐와 상관없습니다.
          애플이 매킨토시를 출시했을 때 IBM은 연구개발에 최소 100배 이상의
          비용을 쏟고 있었습니다. 돈이 문제가 아닙니다. 어떤 인력을 갖고 있느냐,
          어떤 방향으로 가느냐, 결과가 얼마나 나오느냐에 관한 문제입니다. 혁신은
          연구개발 자금을 얼마나 갖고 있냐와 상관없습니다. 애플이 매킨토시를
          출시했을 때 IBM은 연구개발에 최소 100배 이상의 비용을 쏟고 있었습니다.
        </Text>
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
