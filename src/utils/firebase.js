// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1UYthMzCvU5WeOjMgi2HWm_Mvrlf14Yo",
  authDomain: "netflixgpt-40a14.firebaseapp.com",
  projectId: "netflixgpt-40a14",
  storageBucket: "netflixgpt-40a14.appspot.com",
  messagingSenderId: "437145816034",
  appId: "1:437145816034:web:666220abe80e45513a47bb",
  measurementId: "G-ZNT5BVQ9T5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
