// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAffeGX4i5O-h_RgHw8xV8tiejg-S09fVE",
  authDomain: "pk-portfolio-dc1e6.firebaseapp.com",
  projectId: "pk-portfolio-dc1e6",
  storageBucket: "pk-portfolio-dc1e6.appspot.com",
  messagingSenderId: "464107563576",
  appId: "1:464107563576:web:270e4839ca9fef7ca614cd",
  measurementId: "G-3LTMC28FL4",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
