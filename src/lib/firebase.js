import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALHUxzbVJfxwkILBz00HgrTvw66_IqBy0",
  authDomain: "careerconnect-80b53.firebaseapp.com",
  projectId: "careerconnect-80b53",
  storageBucket: "careerconnect-80b53.firebasestorage.app",
  messagingSenderId: "836079096417",
  appId: "1:836079096417:web:4d0771ced2aaa199521020",
  measurementId: "G-E8FBF36061"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// FIRESTORE
export const db = getFirestore(app);