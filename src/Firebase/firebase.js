// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
     apiKey: "AIzaSyCdGb_iqcqTc3cZJOOuIsCmbofqS-X_q4k",
     authDomain: "fir-setup-a57a5.firebaseapp.com",
     projectId: "fir-setup-a57a5",
     storageBucket: "fir-setup-a57a5.appspot.com",
     messagingSenderId: "135903612150",
     appId: "1:135903612150:web:fb22bbc045dae50922b0d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();