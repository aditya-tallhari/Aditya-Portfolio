// firebase.ts

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT2MotvzdVEzoTTr4os8NpqLGC6C23kPY",
    authDomain: "aditya-s-portfolio-6ee2d.firebaseapp.com",
    projectId: "aditya-s-portfolio-6ee2d",
    storageBucket: "aditya-s-portfolio-6ee2d.firebasestorage.app",
    messagingSenderId: "854800680692",
    appId: "1:854800680692:web:487c09629d0b1c521100a1",
    measurementId: "G-6CF3CEZRWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { database, ref, set };
