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
import ModalExample from './src/views/jinPostView';

const App: () => React$Node = () => {


  getData() = {
    fetch('https://req.jin724.com/beta/v2/getStructureList/JIN-3382-2df1bc-8bfeea-4123c7-9f096d-b43b7e', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: '0',
        structureId: '291220',
        ownerId: '1',
        more: '0',
        filter: '',
      }),
  });
}

return (
  <View>
    <ModalExample />
  </View>
);
};

export default App;
