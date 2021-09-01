// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGR6TNeFqSRxz1xE1zXOxEDPDYkkyg2nc",
  authDomain: "oscar-api-test-runner-bf891.firebaseapp.com",
  databaseURL:
    "https://oscar-api-test-runner-bf891-default-rtdb.firebaseio.com",
  projectId: "oscar-api-test-runner-bf891",
  storageBucket: "oscar-api-test-runner-bf891.appspot.com",
  messagingSenderId: "76829730434",
  appId: "1:76829730434:web:d6f6e6793d9b1fec03b69b",
  measurementId: "G-H8GX9GKZQB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
