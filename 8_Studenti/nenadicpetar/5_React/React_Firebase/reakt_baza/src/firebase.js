// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0gbyui1-NlPztxQkFc523fmYSCjcBV54",
  authDomain: "reakt-baza.firebaseapp.com",
  projectId: "reakt-baza",
  storageBucket: "reakt-baza.firebasestorage.appspot.com",
  messagingSenderId: "266173253689",
  appId: "1:266173253689:web:8f76dbf23176fe475de5e8",
  measurementId: "G-03L5TG1SMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
