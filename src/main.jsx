import React from "react";
import "./utils/darkMode";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJDGcyftyTU3NF62uAilB2M9y5q875heQ",
  authDomain: "ecommerce-coderhouse-8f369.firebaseapp.com",
  projectId: "ecommerce-coderhouse-8f369",
  storageBucket: "ecommerce-coderhouse-8f369.appspot.com",
  messagingSenderId: "62894965759",
  appId: "1:62894965759:web:5cf2ecd3d3894f2cda1dca",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
