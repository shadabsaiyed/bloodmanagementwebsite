// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBEiUlfNDmPEbXmS5gITrjsDlYcWMBRo0Q',
  authDomain: 'blood-donation-website-d51de.firebaseapp.com',
  projectId: 'blood-donation-website-d51de',
  storageBucket: 'blood-donation-website-d51de.appspot.com',
  messagingSenderId: '850718044645',
  appId: '1:850718044645:web:fbe6e8f792dc43e925ff0c',
  measurementId: 'G-69V3P4TYV3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
