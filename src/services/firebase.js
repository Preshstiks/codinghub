import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTM52flPQEpfalunYjZwBqatV91J_laPw",
  authDomain: "coding-hub-2619e.firebaseapp.com",
  projectId: "coding-hub-2619e",
  storageBucket: "coding-hub-2619e.appspot.com",
  messagingSenderId: "68464272515",
  appId: "1:68464272515:web:f693b98374792e1793e7b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
