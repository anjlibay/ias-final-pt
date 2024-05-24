// src/firebase.tsx
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKu6EzykzzOo2GFmXqQDFFMgrDTUJBvvc",
  authDomain: "final-pt-d0d28.firebaseapp.com",
  projectId: "final-pt-d0d28",
  storageBucket: "final-pt-d0d28.appspot.com",
  messagingSenderId: "980227001920",
  appId: "1:980227001920:web:41296ae6d93c6bf72799a5",
  measurementId: "G-FCFQ1DDRWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances
