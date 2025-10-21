// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "", // unijeti API key
  authDomain: "reakt-baza.firebaseapp.com",
  projectId: "reakt-baza",
  storageBucket: "reakt-baza.firebasestorage.app",
  messagingSenderId: "266173253689",
  appId: "1:266173253689:web:0d300b908c5984215de5e8",
  measurementId: "G-6CXDZVE63Y",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export default database;
