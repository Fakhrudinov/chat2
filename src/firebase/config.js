import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCURB1TSrd4LEt-bbvE6egLQxxr5s57lbw",
    authDomain: "geekreactchat.firebaseapp.com",
    databaseURL: "https://geekreactchat-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "geekreactchat",
    storageBucket: "geekreactchat.appspot.com",
    messagingSenderId: "143082503224",
    appId: "1:143082503224:web:3e908f270b6d561cdabacd"
  };

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();