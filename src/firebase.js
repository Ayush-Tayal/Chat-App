import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAOwxTyyCgO8xW5ToWxQBG99KMm5RNCqME",
  authDomain: "chat-app-fe5e8.firebaseapp.com",
  databaseURL: "https://chat-app-fe5e8-default-rtdb.firebaseio.com",
  projectId: "chat-app-fe5e8",
  storageBucket: "chat-app-fe5e8.appspot.com",
  messagingSenderId: "310926895675",
  appId: "1:310926895675:web:0de4528e0cf9def1b18a1e"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();