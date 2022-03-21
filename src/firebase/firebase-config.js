// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAPOWzGzP-aRTOMwCFlbrELFnlV6rGXjJA',
  authDomain: 'yeniproject-6164e.firebaseapp.com',
  projectId: 'yeniproject-6164e',
  storageBucket: 'yeniproject-6164e.appspot.com',
  messagingSenderId: '176199631824',
  appId: '1:176199631824:web:61ff631a3176886a6b6fd5',
  measurementId: 'G-4577QJL99Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
