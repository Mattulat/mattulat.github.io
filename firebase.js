// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8JoFk4_mSC4SZFr3TRufxcV9jslz0Zy4",
  authDomain: "microwavemp4.firebaseapp.com",
  projectId: "microwavemp4",
  storageBucket: "microwavemp4.appspot.com",
  messagingSenderId: "906356391616",
  appId: "1:906356391616:web:f39ac301c5cc085f317725",
  measurementId: "G-QCQBYH9772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);