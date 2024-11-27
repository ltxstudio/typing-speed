// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
