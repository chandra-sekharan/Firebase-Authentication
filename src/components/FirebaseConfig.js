import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvyHHsSI4JxRFpBfkwcZMkrTwL9kTcIxo",
    authDomain: "fir-40e6f.firebaseapp.com",
    projectId: "fir-40e6f",
    storageBucket: "fir-40e6f.appspot.com",
    messagingSenderId: "131283345062",
    appId: "1:131283345062:web:b5385cb562171ad4291e67",
    measurementId: "G-XKPYV4RS0K"
  };
 
  firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db   = firebase.firestore();

  