import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDWoCG0FeCHGQxWxBuNq4iU8PPNlmTUaEY",
    authDomain: "shopka-shop.firebaseapp.com",
    projectId: "shopka-shop",
    storageBucket: "shopka-shop.appspot.com",
    messagingSenderId: "816613689025",
    appId: "1:816613689025:web:23fc24411ae53ddd0ff640"
});

const db = firebase.firestore();
const storage = firebase.storage()
export { firebaseConfig, db, storage };