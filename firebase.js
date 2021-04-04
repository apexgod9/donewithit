import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBjIFqFX-jr2ghhVqaAm24U8-WcFX1uss",
  authDomain: "animetm-2fdcf.firebaseapp.com",
  projectId: "animetm-2fdcf",
  storageBucket: "animetm-2fdcf.appspot.com",
  messagingSenderId: "196343271437",
  appId: "1:196343271437:web:debe60cbc7f0a896ff0544",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth(); //some prefer app.auth()

export { db, auth };
