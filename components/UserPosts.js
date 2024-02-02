import React, {useState, useEffect} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Post from './Post';
import essaysStorage from '../storages/essaysStorage';

function UserPosts() {
  const [essays, setEssays] = useState([]);
  useEffect(() => {
    const loadEssays = async () => {
      try {
        const storedEssays = await essaysStorage.get();
        setEssays(storedEssays);
      } catch (error) {
        console.error('Error loading essays:', error);
      }
    };
    loadEssays();
  }, []); //빈 배열을 넣어 한 번만 실행되도록 한다?!
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={essays}
      keyExtractor={item => item.id.toString()} //각 아이템의 고유 키 지정
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
