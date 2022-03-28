import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, Text, View} from 'react-native';

import Registration from './Registration';
import Login from './Login';
import Profile from './Profile';
import Employee from './Employee';
import AddEmployee from './AddEmployee';
import DetailEmployee from './DetailEmployee';
import Datess from './Datess';
import Home from './Home';

import Header from '../ortaq/Header';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Əsas"
      activeColor="#fff"
      inactiveColor="#858B90"
      // labelStyle={{fontSize: 17}}
      barStyle={{backgroundColor: '#810993'}}>
      <Tab.Screen
        name="Əsas"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="İşçilər"
        component={Employee}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Login}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-arrow-up"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Main = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BottomTabsNavigator">
          <Stack.Screen
            options={{headerShown: false}}
            name="BottomTabsNavigator"
            component={BottomTabsNavigator}
          />

          <Stack.Screen name="Qeydiyyat" component={Registration} />
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen name="Profile" component={Profile} />

          <Stack.Screen name="İşçi əlavə et" component={AddEmployee} />
          <Stack.Screen name="DetailEmployee" component={DetailEmployee} />
          <Stack.Screen name="İşçi məlumatları" component={DetailEmployee} />
          <Stack.Screen name="Datess" component={Datess} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Main;
