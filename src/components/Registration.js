import React, {useState} from 'react';
import {StyleSheet, TextInput, Alert} from 'react-native';
import {authentication} from '../firebase/firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

import Button from '../ortaq/Button';
import Card from '../ortaq/Card';
import CardSection from '../ortaq/CardSection';
import Spinner from '../ortaq/Spinner';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const registerUser = () => {
    setLoading(true);
    if (email === '' || password === '' || password.length < 5) {
      setLoading(false);
      Alert.alert('Mesaj', 'İstifadəçi adı və ya şifrə boş ola bilməz', [
        {text: 'Anladım', onPress: () => null},
      ]);
    } else {
      createUserWithEmailAndPassword(authentication, email, password)
        .then(re => {
          console.log(re);
          setLoading(false);
          Alert.alert(
            'Mesaj',
            'Qeydiyyat tamamlandı. Login səhifəsinə yönləndirilirsiniz',
            [{text: 'Yaxşı', onPress: () => null}],
          );
          navigation.navigate('Login');
        })
        .catch(re => {
          console.log(re);
          setLoading(false);
          Alert.alert('Mesaj', 'E-poçt adresinizdə yanlışlıq var', [
            {text: 'Anladım', onPress: () => null},
          ]);
        });
    }
  };

  const registrationButton = () => {
    if (!loading) {
      return <Button onPress={registerUser}>Qeydiyyat</Button>;
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

      <CardSection>{registrationButton()}</CardSection>
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
export default Registration;
