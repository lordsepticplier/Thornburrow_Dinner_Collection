// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"; // For Cloud Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkexDND6fZpFJ2UPv8T4_xiEkFxzjUBr8",
  authDomain: "thornburrow-dinner-collection.firebaseapp.com",
  projectId: "thornburrow-dinner-collection",
  storageBucket: "thornburrow-dinner-collection.firebasestorage.app",
  messagingSenderId: "1049823886151",
  appId: "1:1049823886151:web:c87b8f461952f63f13ea62"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
