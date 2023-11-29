import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WriteEditor from '../components/WriteEditor';

function PageScreen() {
  return (
    <SafeAreaView style={styles.block}>
      <WriteEditor />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default PageScreen;
