import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Registration from './Registration';
import Login from './Login';
import Profile from './Profile';
import Books from './Books';

const Stack = createStackNavigator();

function LoginAndRegister() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Books">
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Books" component={Books} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginAndRegister;
