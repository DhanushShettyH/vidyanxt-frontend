// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore"; // Add this for db
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp6BExNY8w2ZwLElXq2-m6xWgPucJ1oKA",
  authDomain: "vidyanxt-c5816.firebaseapp.com",
  projectId: "vidyanxt-c5816",
  storageBucket: "vidyanxt-c5816.firebasestorage.app",
  messagingSenderId: "400977849683",
  appId: "1:400977849683:web:d74cae4e89b76ddba005a6",
  measurementId: "G-Z0N8TDQYVE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

// Export all services
export { auth, db, functions, app, analytics };
