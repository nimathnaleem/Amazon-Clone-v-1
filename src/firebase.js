import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBB-3aCKGmncRy9I8G6ZA9A0L8p--HvI_0",
    authDomain: "clone-ee7ee.firebaseapp.com",
    projectId: "clone-ee7ee",
    storageBucket: "clone-ee7ee.appspot.com",
    messagingSenderId: "1012751039925",
    appId: "1:1012751039925:web:5681dc78ae6a06902badfc",
    measurementId: "G-B2MGJJP7J5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
  
export { db, auth };