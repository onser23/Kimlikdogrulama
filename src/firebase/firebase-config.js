import React, {useState} from 'react';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// import AsyncStorage from '@react-native-community/async-storage';
// men import

import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: 'AIzaSyAeG9vTQALUz7TthCsR9mVLvc6aoiziFvs',
  authDomain: 'kimlikdogrulama-fae9c.firebaseapp.com',
  databaseURL:
    'https://kimlikdogrulama-fae9c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'kimlikdogrulama-fae9c',
  storageBucket: 'kimlikdogrulama-fae9c.appspot.com',
  messagingSenderId: '673782442352',
  appId: '1:673782442352:web:6843a78d929e5c9d9fc7b5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//men yazan
const db = getFirestore(app);
const dbBooks = collection(db, 'books');

// const getBooks = () => {
//   getDocs(colRef).then(snapshot => {
//     let books = [];
//     snapshot.docs.map(doc => {
//       books.push({...doc.data(), id: doc.id});
//     });
//     console.log(books);
//   });
// };
//men yazan

const authentication = getAuth(app);
export {dbBooks, db, authentication};
