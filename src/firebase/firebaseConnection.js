// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ8k5HkzOsxvErWjewR7WgWG_10nEuWsk",
  authDomain: "aula01-46875.firebaseapp.com",
  databaseURL: "https://aula01-46875-default-rtdb.firebaseio.com",
  projectId: "aula01-46875",
  storageBucket: "aula01-46875.appspot.com",
  messagingSenderId: "579381805789",
  appId: "1:579381805789:web:9472a8e1bda160088a1134",
  measurementId: "G-1XBSE1CVP6"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;