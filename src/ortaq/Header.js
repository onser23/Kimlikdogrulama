import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#f8f8f8',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    elevation: 9,
  },
  textStyle: {
    fontSize: 30,
  },
});
export default Header;
