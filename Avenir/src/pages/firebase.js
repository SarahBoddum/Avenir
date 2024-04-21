// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbZ-IVJSkQEENI0mlNbYu8WGTCTopN6ZU",
  authDomain: "avenir-4f05a.firebaseapp.com",
  projectId: "avenir-4f05a",
  storageBucket: "avenir-4f05a.appspot.com",
  messagingSenderId: "628420128652",
  appId: "1:628420128652:web:f843b4138482f31ff2b0a9"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

export default Firebase;