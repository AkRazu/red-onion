// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYm4UZalhtDHvEBlo5KRYg9B9Zt4BGYmw",
  authDomain: "redonion-e815d.firebaseapp.com",
  projectId: "redonion-e815d",
  storageBucket: "redonion-e815d.appspot.com",
  messagingSenderId: "72806603352",
  appId: "1:72806603352:web:83feffff666d8594f7082d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;