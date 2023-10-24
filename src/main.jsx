import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXtPJEDPhGIgYw5HoCz03F_fuj-vhgC9E",
  authDomain: "miportfolio-b19eb.firebaseapp.com",
  projectId: "miportfolio-b19eb",
  storageBucket: "miportfolio-b19eb.appspot.com",
  messagingSenderId: "389124315571",
  appId: "1:389124315571:web:f06d8e1214c4c3d72113c6",
  measurementId: "G-YX5D543EG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
