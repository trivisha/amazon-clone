import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcF-nTkIVCw9Ad7iAVMKH3PNf9Q--RzQ4",
  authDomain: "ecommerce-clone-839dd.firebaseapp.com",
  projectId: "ecommerce-clone-839dd",
  storageBucket: "ecommerce-clone-839dd.appspot.com",
  messagingSenderId: "732939924996",
  appId: "1:732939924996:web:ce5d11b36b9a1eb5282751",
  measurementId: "G-MTBN34JXQN"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
