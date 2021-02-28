import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDjH6Y-srzJ4eRgR_DTWPe-EFEQI6uyq-A",
    authDomain: "todo-or-not-todo-4d66f.firebaseapp.com",
    projectId: "todo-or-not-todo-4d66f",
    storageBucket: "todo-or-not-todo-4d66f.appspot.com",
    messagingSenderId: "539763262707",
    appId: "1:539763262707:web:d085201857d6af3a2da386"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

const auth = firebaseApp.auth();
var provider = new firebase.auth.GoogleAuthProvider();

// export default db;
export { auth, provider }