// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_mVr45oXULIL-xxRqgoCgxKqtu9rqZZo",
  authDomain: "netflixgpt-3ce1b.firebaseapp.com",
  projectId: "netflixgpt-3ce1b",
  storageBucket: "netflixgpt-3ce1b.appspot.com",
  messagingSenderId: "266909453176",
  appId: "1:266909453176:web:7f6f20f63614d38068d68d",
  measurementId: "G-7PJ4CQV78R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
