// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD4QxI2FY3FWQbKvXDdHSj-vVlEGkCetU",
  authDomain: "netflixgpt-c3b4d.firebaseapp.com",
  projectId: "netflixgpt-c3b4d",
  storageBucket: "netflixgpt-c3b4d.firebasestorage.app",
  messagingSenderId: "338033297693",
  appId: "1:338033297693:web:0e47423540a83224d479f4",
  measurementId: "G-GBCEYK8J8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();