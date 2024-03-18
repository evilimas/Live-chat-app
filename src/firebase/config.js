import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC0kUkja76I_eikL53EsIE4w4_KvLJ8uQQ',
  authDomain: 'live-chat-297b8.firebaseapp.com',
  projectId: 'live-chat-297b8',
  storageBucket: 'live-chat-297b8.appspot.com',
  messagingSenderId: '251493500131',
  appId: '1:251493500131:web:84dbe0f324b148a908b1d6',
};

//init firebase

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
