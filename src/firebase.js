// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwHhZYzGWf0BeOizui_JvyZ_0KXs7Wm3o",
  authDomain: "react-blog-8c949.firebaseapp.com",
  projectId: "react-blog-8c949",
  storageBucket: "react-blog-8c949.appspot.com",
  messagingSenderId: "221772474152",
  appId: "1:221772474152:web:239a204dd9d4b312e2521d"
};


//Initialize firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;


