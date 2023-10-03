import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCh8hMalYU2VlsCkdTxazU7h6to_IMCwKA",
  authDomain: "challenge-162dc.firebaseapp.com",
  projectId: "challenge-162dc",
  storageBucket: "challenge-162dc.appspot.com",
  messagingSenderId: "1043068300757",
  appId: "1:1043068300757:web:e01742bb6de9ac2ee7215c",
  measurementId: "G-Q37GXZFT9S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
