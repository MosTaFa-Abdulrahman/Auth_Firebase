import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhObhvZ30_Nss5mDdi3hU4IwoDtUQphjA",
  authDomain: "authentication-firebase-45fbe.firebaseapp.com",
  projectId: "authentication-firebase-45fbe",
  storageBucket: "authentication-firebase-45fbe.appspot.com",
  messagingSenderId: "144129906982",
  appId: "1:144129906982:web:a8ee25f3825feb935f09e7",
  measurementId: "G-9JEFCF23W1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
