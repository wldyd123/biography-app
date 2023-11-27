import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Category from '../components/Category';

function WriteScreen({navigation}) {
  return (
    <SafeAreaView>
      <Category />
      <Button title="페이지" onPress={() => navigation.navigate('Page')} />
    </SafeAreaView>
  );
}

export default WriteScreen;
