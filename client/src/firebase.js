// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "https://real-estate-raph.onrender.com",
    projectId: "clone-1759f",
    storageBucket: "clone-1759f.appspot.com",
    messagingSenderId: "701541161401",
    appId: "1:701541161401:web:55277c013a40fcbb6b3e68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
