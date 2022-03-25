import React from 'react';
import {View, Text} from 'react-native';

import Header from '../ortaq/Header';
import StackNavigation from './StackNavigation';

const Main = () => {
  return (
    <View style={{flex: 1}}>
      <Header title="fsfs" />
      <StackNavigation />
    </View>
  );
};

export default Main;
