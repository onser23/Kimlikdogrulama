import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import {db} from './firebase/firebase-config';
import {collection, getDocs, doc, setDoc} from 'firebase/firestore/lite';

import Button from './ortaq/Button';
import Card from './ortaq/Card';
import CardSection from './ortaq/CardSection';
import Spinner from './ortaq/Spinner';

const AddEmployee = () => {
  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [vezife, setVezife] = useState('');
  const [id, setId] = useState('1');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      var id = '';
      var possible = 'ABC0123456789abc';
      for (var i = 0; i < 6; i++)
        id += possible.charAt(Math.floor(Math.random() * possible.length));
      setId(id);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const addnewData = async () => {
    setLoading(true);
    await setDoc(doc(db, 'employee', id), {
      ad: ad,
      soyad: soyad,
      vezife: vezife,
    });
    Alert.alert('Mesaj', 'İşçi əlavə edildi', [
      {text: 'Bağla', onPress: () => null},
    ]);
    setAd('');
    setSoyad('');
    setVezife('');
    setLoading(false);
  };

  const addButton = () => {
    if (!loading) {
      return <Button onPress={addnewData}>Əlavə et</Button>;
    } else {
      return <Spinner size={'small'} />;
    }
  };

  return (
    <Card>
      <CardSection>
        <TextInput
          style={styles.inputStyle}
          placeholder="İşçinin adı"
          value={ad}
          onChangeText={text => setAd(text)}
        />
      </CardSection>

      <CardSection>
        <TextInput
          style={styles.inputStyle}
          placeholder="İşçinin soyadı"
          value={soyad}
          onChangeText={soyad => setSoyad(soyad)}
        />
      </CardSection>

      <CardSection>
        <TextInput
          style={styles.inputStyle}
          placeholder="İşçinin vəzifəsi"
          value={vezife}
          onChangeText={vezife => setVezife(vezife)}
        />
      </CardSection>

      <CardSection>{addButton()}</CardSection>
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

export default AddEmployee;
