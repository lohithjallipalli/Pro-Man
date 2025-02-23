// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUIWh8bYV3igV5giP9tzjR6TnXXaBvR9s",
  authDomain: "pro-man-b200c.firebaseapp.com",
  projectId: "pro-man-b200c",
  storageBucket: "pro-man-b200c.firebasestorage.app",
  messagingSenderId: "578362412671",
  appId: "1:578362412671:web:20af99a097b04dff0fb94a",
  measurementId: "G-FS3YBE60K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);