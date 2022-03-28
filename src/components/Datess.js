import React, {useState} from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

const Datess = props => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    props.deyer(value.toString());
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Display the selected date */}
      <Text style={styles.textDogumTarixi}>Doğum tarixi:</Text>
      <TouchableOpacity onPress={showPicker} style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>
          {date.getDate()} - {date.getMonth()} - {date.getFullYear()}
        </Text>
      </TouchableOpacity>

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

// Kindacode.com
// just add some styles to make our app look more beautiful
// This is not the focus of this article
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    flex: 1,
    // justifyContent: 'center',
    // padding: 50,
  },
  pickedDateContainer: {
    padding: 4,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textDogumTarixi: {
    fontSize: 20,
    marginRight: 30,
    marginLeft: 5,
  },
});

export default Datess;
