import React from 'react';
import {SafeAreaView, View, Button, StyleSheet} from 'react-native';

function Category() {
  return (
    <SafeAreaView>
      <View>
        <Button title="관계" />
        <Button title="소망" />
        <Button title="경험" />
        <Button title="일" />
        <Button title="일상" />
        <Button title="자유글" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: 60,
    height: 50,
    borderRadius: 28,
  },
});

export default Category;
