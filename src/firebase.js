// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6-Ij-h_w0PPPQ2mXppc_L4m-9V2baLN8",
  authDomain: "employee-management-webs-68dc0.firebaseapp.com",
  projectId: "employee-management-webs-68dc0",
  storageBucket: "employee-management-webs-68dc0.firebasestorage.app",
  messagingSenderId: "210331318422",
  appId: "1:210331318422:web:12dacc8333dc19bf7e2ab7",
  measurementId: "G-XXDM2EX0YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);