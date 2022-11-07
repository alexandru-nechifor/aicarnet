// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyAooBPvHYpqcrVt5gNWcS4qzsmgNCVE10Q',

  authDomain: 'aicarnet-d56e8.firebaseapp.com',

  databaseURL:
    'https://aicarnet-d56e8-default-rtdb.europe-west1.firebasedatabase.app',

  projectId: 'aicarnet-d56e8',

  storageBucket: 'aicarnet-d56e8.appspot.com',

  messagingSenderId: '710418327202',

  appId: '1:710418327202:web:d08008dbe7e5e23d12d9fb',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const quizDatabase = getDatabase(app);

export default app;
