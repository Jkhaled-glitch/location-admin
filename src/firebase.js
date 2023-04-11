import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "location-5716b.firebaseapp.com",
  databaseURL: process.env.DTABASE_URL,
  projectId: "location-5716b",
  storageBucket: "location-5716b.appspot.com",
  messagingSenderId: "414206980561",
  appId: "1:414206980561:web:8e2cccab2d9b48a0d030f0"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
