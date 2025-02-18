// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTq5suoIs2vHz6nEol172c5qPPBmcbs8I",
  authDomain: "nckh-1d727.firebaseapp.com",
  projectId: "nckh-1d727",
  storageBucket: "nckh-1d727.firebasestorage.app",
  messagingSenderId: "694561656154",
  appId: "1:694561656154:web:eedde35d3c48eb60a9b763",
  measurementId: "G-SFQ89CG5Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const analytics = getAnalytics(app);
const db = getFirestore(app);  // Firestore
const auth = getAuth(app);  // Authentication

// Export services to use in other parts of your app
export { app, analytics, db, auth };
