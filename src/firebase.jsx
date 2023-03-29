import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCwDj5XpQGH0_J_inBLmdL9QekyyUER_WY",
  authDomain: "videostreaming-webapps.firebaseapp.com",
  projectId: "videostreaming-webapps",
  storageBucket: "videostreaming-webapps.appspot.com",
  messagingSenderId: "857815011523",
  appId: "1:857815011523:web:2cc449d06e03157b651276",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const stroage = firebaseApp.storage();

export { auth, provider, stroage };
export default db;
