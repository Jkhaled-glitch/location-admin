import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyA09VWMR_wcxZqpbmNMmLhQhd0KGGZxWbo",
  authDomain: "location2-5379d.firebaseapp.com",
  projectId: "location2-5379d",
  storageBucket: "location2-5379d.appspot.com",
  messagingSenderId: "1060108893141",
  appId: "1:1060108893141:web:6a415e2f8a13ea71a4db5c",
  measurementId: "G-PSMH8W377R"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
