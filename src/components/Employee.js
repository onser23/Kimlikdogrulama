import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

import {db} from '../firebase/firebase-config';
import {collection, getDocs} from 'firebase/firestore/lite';
import DetailEmployee from './DetailEmployee';

const Employee = ({navigation}) => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    async function fetchCData() {
      try {
        const employeeCol = collection(db, 'employee');
        const eployeeSnapshot = await getDocs(employeeCol);
        const employee = eployeeSnapshot.docs.map(doc => doc.data());
        setEmployeeData(employee);
        console.log(employee);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchCData();
  }, []);

  return (
    <View>
      <View
        style={{
          alignItems: 'flex-end',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('İşçi əlavə et')}
          style={{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignContent: 'flex-end',
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: '#810993',
            position: 'absolute',
            zIndex: 9,
          }}>
          <Text style={{fontSize: 20, color: '#fff'}}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={2}
        data={employeeData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('İşçi məlumatları', {employee: item});
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                // marginHorizontal: '3.5%',
                marginRight: 13,
                marginTop: 12,
              }}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: 'gainsboro',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  padding: 5,
                }}>
                <Image
                  style={{height: 210, width: 189}}
                  source={require('../images/samad.jpg')}
                />
              </View>

              <View>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: '#000',
                    fontFamily: 'BodoniSvtyTwoITCTT-Bold',
                  }}>
                  {item.ad} {item.soyad}
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: '#000',
                    fontFamily: 'BodoniSvtyTwoITCTT-Bold',
                  }}>
                  {item.vezife}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Employee;
