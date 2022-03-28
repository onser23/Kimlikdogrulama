import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

const DetailEmployee = ({route}) => {
  const ad = route.params.employee.ad;
  const soyad = route.params.employee.soyad;
  const vezife = route.params.employee.vezife;

  return <View>{<Text>{ad}</Text>}</View>;
};

export default DetailEmployee;
