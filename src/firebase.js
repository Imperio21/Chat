import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYUHPImx0V-YK1yyeG35K5LDg-nnjOj2E",
  authDomain: "chat-4ad61.firebaseapp.com",
  projectId: "chat-4ad61",
  storageBucket: "chat-4ad61.appspot.com",
  messagingSenderId: "720017182327",
  appId: "1:720017182327:web:3f194c5154d996e9894072",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
