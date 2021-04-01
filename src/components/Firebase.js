// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4iSWJ-1adwFtQMAh0GJnQYeeVDZGHAgY",
  authDomain: "twitter-clone-53edf.firebaseapp.com",
  projectId: "twitter-clone-53edf",
  storageBucket: "twitter-clone-53edf.appspot.com",
  messagingSenderId: "75105280859",
  appId: "1:75105280859:web:8c5feb879b4b435d3df07e",
  measurementId: "G-VVNNVEN83Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
