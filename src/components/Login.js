import React, {useState} from 'react';
import {StyleSheet, TextInput, Alert, Text} from 'react-native';
import {authentication} from '../firebase/firebase-config';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import Button from '../ortaq/Button';
import Card from '../ortaq/Card';
import CardSection from '../ortaq/CardSection';
import Spinner from '../ortaq/Spinner';

const Login = ({navigation}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const LoginUser = () => {
    setLoading(true);
    signInWithEmailAndPassword(authentication, email, password)
      .then(re => {
        setIsSignedIn(true);
        setLoading(false);
        navigation.navigate('İşçilər');
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        Alert.alert('Mesaj', 'İstifadəçi adı və ya şifrə yanlışdır', [
          {text: 'Anladım', onPress: () => null},
        ]);
      });
  };

  const LogoutUser = () => {
    setLoading(true);
    signOut(authentication)
      .then(re => {
        setIsSignedIn(false);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const loginButton = () => {
    if (!loading) {
      return <Button onPress={LoginUser}>Daxil Ol</Button>;
    } else {
      return <Spinner size={'small'} />;
    }
  };

  const logoutButton = () => {
    if (!loading) {
      return <Button onPress={LogoutUser}>Çıxış</Button>;
    } else {
      return <Spinner size={'small'} />;
    }
  };

  return (
    <Card>
      <CardSection>
        <TextInput
          style={styles.inputStyle}
          placeholder="E-poçt"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </CardSection>

      <CardSection>
        <TextInput
          style={styles.inputStyle}
          placeholder="Şifrə"
          value={password}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </CardSection>
      <CardSection>
        {isSignedIn === false ? loginButton() : logoutButton()}
      </CardSection>
      <CardSection>
        {isSignedIn === false ? (
          <Button onPress={() => navigation.navigate('Qeydiyyat')}>
            <Text>Hebab yarat</Text>
          </Button>
        ) : null}
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 20,
    lineHeight: 23,
    backgroundColor: '#fff',
  },
});
export default Login;
