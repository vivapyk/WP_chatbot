// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCc7vrUiW6GicH0ZMDd9aki7Z3iuy2E1_c",
    authDomain: "rabbitturtle-7f26b.firebaseapp.com",
    projectId: "rabbitturtle-7f26b",
    storageBucket: "rabbitturtle-7f26b.appspot.com",
    messagingSenderId: "889785955653",
    appId: "1:889785955653:web:e9d5944880ecc31654fa2c",
    measurementId: "G-WJ15JSCX8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
