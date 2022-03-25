import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import {db} from './firebase/firebase-config';
import {collection, getDocs} from 'firebase/firestore/lite';

import DetailEmployee from './DetailEmployee';

const Employee = ({navigation}) => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(async () => {
    try {
      const employeeCol = collection(db, 'employee');
      const eployeeSnapshot = await getDocs(employeeCol);
      const employee = eployeeSnapshot.docs.map(doc => doc.data());
      setEmployeeData(employee);
      console.log(employee);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <View>
      <FlatList
        data={employeeData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('İşçi məlumatları', {employee: item});
            }}>
            <Text>
              {item.ad} {item.soyad}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Employee;
