import React from 'react';
import {View, Text} from 'react-native';

import Header from './ortaq/Header';
import LoginAndRegister from './LoginAndRegister';

const Main = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Header title={'Daxil ol'} /> */}
      <LoginAndRegister />
    </View>
  );
};

export default Main;
