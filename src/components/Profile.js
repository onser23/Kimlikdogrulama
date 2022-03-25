import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {authentication} from '../firebase/firebase-config';
import {onAuthStateChanged} from 'firebase/auth';

const Profile = ({navigation}) => {
  // movcud user
  const [currentUser, setCurrentUser] = useState('');

  onAuthStateChanged(authentication, user => {
    if (user) {
      const email = user.email;
      setCurrentUser(email);
    }
  });

  return (
    <View>
      <Text>{currentUser}</Text>
    </View>
  );
};
export default Profile;
