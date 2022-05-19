import firebase from 'firebase';
import "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6nOG6UiVAKaWO39ynQ5FvoDBsZWb9IHk",
    authDomain: "facebook-20ffd.firebaseapp.com",
    projectId: "facebook-20ffd",
    storageBucket: "facebook-20ffd.appspot.com",
    messagingSenderId: "578260614490",
    appId: "1:578260614490:web:89fc9166b7f9d91c010763",
    measurementId: "G-0L4T31WJ1L"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db,storage};