import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const XeberCardSection = props => {
  return <View style={styles.subContainer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  subContainer: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative',
    marginTop: 11,
  },
});

export default XeberCardSection;
