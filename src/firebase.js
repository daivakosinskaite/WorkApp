import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7UILjXEMHvKVz7d1VBvanWdKJxukGGnI",
  authDomain: "crud-project-3e720.firebaseapp.com",
  projectId: "crud-project-3e720",
  storageBucket: "crud-project-3e720.appspot.com",
  messagingSenderId: "1019317747207",
  appId: "1:1019317747207:web:7906a2fa8e9d17fa5134a2",
  measurementId: "G-CTBY4MH4ZN"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;
export {
    app
}