import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBybSTRSlL7cE7jzLefTSCwnNlGrN1oDn4",
  authDomain: "before-trip.firebaseapp.com",
  databaseURL: "https://before-trip.firebaseio.com",
  projectId: "before-trip",
  storageBucket: "before-trip.appspot.com",
  messagingSenderId: "1006065764366",
  appId: "1:1006065764366:web:bc403f3afb655fe5df145f",
  measurementId: "G-BMZGKYC9E0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;