import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Text} from 'react-native';

import Registration from './Registration';
import Login from './Login';
import Profile from './Profile';
import Employee from './Employee';
import AddEmployee from './AddEmployee';
import DetailEmployee from './DetailEmployee';
import Button from '../ortaq/Button';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Qeydiyyat" component={Registration} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="İşçilər"
          component={Employee}
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('İşçi əlavə et')}>
                <Text style={{fontSize: 35, marginRight: 25}}>+</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="İşçi əlavə et" component={AddEmployee} />
        <Stack.Screen name="İşçi məlumatları" component={DetailEmployee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
