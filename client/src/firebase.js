// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "afrihomes-86956.firebaseapp.com",
  projectId: "afrihomes-86956",
  storageBucket: "afrihomes-86956.appspot.com",
  messagingSenderId: "404942117522",
  appId: "1:404942117522:web:8f2a4b00c46ea997d4244b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
