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
  Image,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View
        style={{
          margin: 10,
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Button
          title="ذخیره اطلاعات"
          style={{
            margin: 10,
            alignItems: 'center',
          }}
        />

        <View
          style={{
            marginStart: 5,
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#000',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./src/images/baseline_call_black_24dp.png')}
            style={{
              margin: 5,
              padding: 10,
              width: 25,
              height: 25,
              alignItems: 'center',
            }}
          />
          <TextInput
            style={{flex: 1}}
            placeholder="شماره تلفن خود را وارد کنید"
            value={this.state.text}
            onChangeText={text => this.setState({text})}
          />
        </View>
      </View>
    );
  }
}
