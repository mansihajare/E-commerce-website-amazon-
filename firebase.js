// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDuM-Ii4SdnwiQRYRcxbwi3MfO8grKpioU",
    authDomain: "clone-3a082.firebaseapp.com",
    projectId: "clone-3a082",
    storageBucket: "clone-3a082.appspot.com",
    messagingSenderId: "883466181080",
    appId: "1:883466181080:web:1517b2374c295e3031faad",
    measurementId: "G-M26L3EG4J6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export  {db,auth};