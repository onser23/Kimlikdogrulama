import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

import {db} from '../src/firebase/firebase-config';
import {collection, getDocs} from 'firebase/firestore/lite';

const Books = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(async () => {
    try {
      const bookCol = collection(db, 'books');
      const bookSnapshot = await getDocs(bookCol);
      const books = bookSnapshot.docs.map(doc => doc.data());
      setBookData(books);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  // const datas = async () => {
  //   const bookCol = collection(db, 'books');
  //   const bookSnapshot = await getDocs(bookCol);
  //   const books = bookSnapshot.docs.map(doc => doc.data());
  //   setBookData(books);
  // };

  return (
    <View>
      <FlatList
        data={bookData}
        renderItem={({item}) => <Text>{item.author}</Text>}
      />
    </View>
  );
};

export default Books;
