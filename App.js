/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import styles from './src/styles/mainStyle';

const App: () => React$Node = () => {

return (
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <View style={{width:50,height:50,backgroundColor:'red'}}></View>
    <View style={{width:50,height:50,backgroundColor:'green'}}></View>
    <View style={{width:50,height:50,backgroundColor:'blue'}}></View>
  </View>
);
};

export default App;
