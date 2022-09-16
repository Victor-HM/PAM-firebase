// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsZ2DV3t29miX8BrLNRittk-PFMXd1TRI",
  authDomain: "aula1-caff4.firebaseapp.com",
  projectId: "aula1-caff4",
  storageBucket: "aula1-caff4.appspot.com",
  messagingSenderId: "843022331297",
  appId: "1:843022331297:web:60a63c92cf0774cdc56fe0",
  measurementId: "G-3MQ45XCN9R"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;