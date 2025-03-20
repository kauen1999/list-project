// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnAhDCr3TSXWVrla6ThggY_CjW-31EuOs",
  authDomain: "to-do-list-3f78c.firebaseapp.com",
  projectId: "to-do-list-3f78c",
  storageBucket: "to-do-list-3f78c.firebasestorage.app",
  messagingSenderId: "59405813042",
  appId: "1:59405813042:web:d9d904ea762d368207c32b",
  measurementId: "G-7Y6SZR6Z2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);