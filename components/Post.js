import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

function Post({category, title, content}) {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://likethiz.com/data/file/gallery/2077540943_90KxelSh_13f1251162a192e90feb5359ae276044abce20de.jpg',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {padding: 15, alignsItems: 'center', flexDirection: 'row'},
  category: {flex: 1, fontSize: 12, color: '#808080'},
  title: {
    flex: 1,
    padding: 3,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  content: {flex: 1, fontSize: 14, color: '#505050'},
  image: {borderRadius: 20, flex: 1},
});

export default Post;
