import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Registration from './Registration';
import Login from './Login';
import Profile from './Profile';
import Employee from './Employee';
// import AddData from './AddEmployee';
import AddEmployee from './AddEmployee';
import DetailEmployee from './DetailEmployee';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="İşçilər">
        <Stack.Screen name="Registrationn" component={Registration} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="İşçilər" component={Employee} />
        <Stack.Screen name="İşçi əlavə et" component={AddEmployee} />
        <Stack.Screen name="İşçi məlumatları" component={DetailEmployee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
