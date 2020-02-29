/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';

import styles from './src/styles/mainStyle';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{backgroundColor: 'red'}}>
          salam {this.state.text} aziz
        </Text>
        <TextInput
          style={{flex: 1, height: 40}}
          placeholder="enter your name"
          value={this.state.text}
          onTextChange={(text)=>this.setState({text})}
        />
        
      </View>
    );
  }
}
