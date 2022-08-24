// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSsTX5rtZPlsdbVuVLdBLITNH88OfBcco",
  authDomain: "ecommerce-react-c6f39.firebaseapp.com",
  projectId: "ecommerce-react-c6f39",
  storageBucket: "ecommerce-react-c6f39.appspot.com",
  messagingSenderId: "573188134666",
  appId: "1:573188134666:web:ba958b0298b5e2983d8cf3"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app)

export default firestoreDB