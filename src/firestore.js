import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBy5o5bVCspbVavWAxBdxGoqqjgruXiqME",
    authDomain: "with-love-delaney.firebaseapp.com",
    projectId: "with-love-delaney",
    storageBucket: "with-love-delaney.appspot.com",
    messagingSenderId: "609166224570",
    appId: "1:609166224570:web:0a1a3092da6e122997a683"
 };

firebase.initializeApp(config);
const db = firebase.firestore();
  
export default db;
