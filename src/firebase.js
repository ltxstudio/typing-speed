import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXkIMxlRbEU2DyNYrgVrwNywPSxKgmyH4",
  authDomain: "binlistio.firebaseapp.com",
  databaseURL: "https://binlistio-default-rtdb.firebaseio.com",
  projectId: "binlistio",
  storageBucket: "binlistio.appspot.com",
  messagingSenderId: "10459136687",
  appId: "1:10459136687:web:0b614249a85b0297af0a5a",
  measurementId: "G-HMH7WT44TT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
