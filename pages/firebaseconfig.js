// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe9C1QEn1Rd-Lo5Kkj13_MM9ezt5tJ8qE",
  authDomain: "messageme-f027f.firebaseapp.com",
  projectId: "messageme-f027f",
  storageBucket: "messageme-f027f.appspot.com",
  messagingSenderId: "786494030941",
  appId: "1:786494030941:web:c172aeac95c77a28bbf9b4",
  measurementId: "G-25GF64XMK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };