import { initializeApp } from "firebase/app";
import { useContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyD5_XBJb10V4hFHwIq8H3eXWLNfVIa-qso",
  authDomain: "bookify-77b14.firebaseapp.com",
  projectId: "bookify-77b14",
  storageBucket: "bookify-77b14.appspot.com",
  messagingSenderId: "1065070129242",
  appId: "1:1065070129242:web:08bf5911b22dabecb1e863"
};

const app = initializeApp(firebaseConfig);
