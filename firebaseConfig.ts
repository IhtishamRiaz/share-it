// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBWqOjcpMKTjPTfqP13DEhqeuQqnCnmMzI",
   authDomain: "share-it-da01c.firebaseapp.com",
   projectId: "share-it-da01c",
   storageBucket: "share-it-da01c.appspot.com",
   messagingSenderId: "238990525349",
   appId: "1:238990525349:web:606c4cf4f6791a52565e4c",
   measurementId: "G-DCBGHVLZQP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
