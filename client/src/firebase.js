// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-73522.firebaseapp.com",
  projectId: "mern-blog-73522",
  storageBucket: "mern-blog-73522.appspot.com",
  messagingSenderId: "334436415182",
  appId: "1:334436415182:web:3d3a432129fa0deb71029f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);