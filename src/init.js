import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import {  getAuth, GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"



const firebaseConfig = {
    apiKey: "AIzaSyD-4HV9w6vG-y6QGrIxgn8F10s7ugLcHYo",
    authDomain: "login-with-firebase-data-d447f.firebaseapp.com",
    projectId: "login-with-firebase-data-d447f",
    storageBucket: "login-with-firebase-data-d447f.appspot.com",
    messagingSenderId: "972550034552",
    appId: "1:972550034552:web:2fa6da4f5f6a7825d9098d"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, firebaseConfig };