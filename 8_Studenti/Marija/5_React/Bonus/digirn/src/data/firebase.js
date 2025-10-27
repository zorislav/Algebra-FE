import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA78_KeYTspqK2WFPafBmd9wmLBPz4CcX4",
  authDomain: "algebra-fe.firebaseapp.com",
  databaseURL:
    "https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "algebra-fe",
  storageBucket: "algebra-fe.firebasestorage.app",
  messagingSenderId: "571085426340",
  appId: "1:571085426340:web:14f5f7516da972c369e031",
  measurementId: "G-0DE0LNCWFN",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export default database;
