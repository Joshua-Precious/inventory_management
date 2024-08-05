// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo9lwoDTUuRtjmKqcqDgBW3TayBCasgnI",
  authDomain: "inventory-management-326de.firebaseapp.com",
  projectId: "inventory-management-326de",
  storageBucket: "inventory-management-326de.appspot.com",
  messagingSenderId: "167667726658",
  appId: "1:167667726658:web:a955a8cdb4ce43f6e430db",
  measurementId: "G-HH4QL0RQPB"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export { firestore };