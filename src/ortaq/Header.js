import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Image
        style={styles.imageStyle}
        source={require('../images/sr-group.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#810993',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    elevation: 9,
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 30,
  },
  imageStyle: {
    width: 170,
    height: 50,
  },
});
export default Header;
