import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUvji1lkXu5jv4QEEPn7--tubI6Lvamls",
  authDomain: "crud-project-8b82e.firebaseapp.com",
  projectId: "crud-project-8b82e",
  storageBucket: "crud-project-8b82e.appspot.com",
  messagingSenderId: "192297530208",
  appId: "1:192297530208:web:f1f4486ca936c8bd342405"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;

export {
    app
}