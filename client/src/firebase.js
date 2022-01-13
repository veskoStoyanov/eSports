// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyANnqbI64mwKSuXUp5sD5lcZm0V-bOCP_U",
  authDomain: "test-89505.firebaseapp.com",
  projectId: "test-89505",
  storageBucket: "test-89505.appspot.com",
  messagingSenderId: "794120639816",
  appId: "1:794120639816:web:9ddece4e0d4916b9ab4f7d",
  measurementId: "G-WXXH5NDNRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('yesssssssssssssssssssssssssssssss')
export const auth = getAuth(app);
