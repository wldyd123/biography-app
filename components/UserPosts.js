import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import Post from './Post';

function UserPosts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      category: '[사랑] 운명을 느낀 순간이 있다면 언제인가요?',
      title: "드뷔시'아름다운 저녁'",
      content:
        '2012년 5월, 11년 전 그녀를 처음 만났다. 친구의 친구로 만난 우리의 이야기는 여기서 시작된다...',
    },
    {
      id: 2,
      category: '[일] 삶에서 성취감이 가장 높았던 순간.',
      title: '입사 2년차, 대리의 업무',
      content:
        '우리 회사엔 매주 회의가 있었다. 그날의 주제는 이번 달 매출 하락에 대한 해결 방안을 강구하는...',
    },
  ]);
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={posts}
      renderItem={({item}) => (
        <Post
          category={item.category}
          title={item.title}
          content={item.content}
        />
      )}
    />
  );
}

export default UserPosts;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});
