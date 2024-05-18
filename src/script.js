// Initialize Firebase
var config = {
    apiKey: "AIzaSyD-4HV9w6vG-y6QGrIxgn8F10s7ugLcHYo",
  authDomain: "login-with-firebase-data-d447f.firebaseapp.com",
  databaseURL: "https://login-with-firebase-data-d447f-default-rtdb.firebaseio.com",
  projectId: "login-with-firebase-data-d447f",
  storageBucket: "login-with-firebase-data-d447f.appspot.com",
  messagingSenderId: "972550034552",
  appId: "1:972550034552:web:2fa6da4f5f6a7825d9098d"
};
firebase.initializeApp(config);

// Get elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const registerLink = document.getElementById('register-link');

// Add event listeners
loginBtn.addEventListener('click', login);
registerBtn.addEventListener('click', register);
registerLink.addEventListener('click', showRegisterForm);

// Login function
function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
       .then((userCredential) => {
            console.log('Logged in successfully');
            // Redirect to home page
            window.location.href = 'home.html';
        })
       .catch((error) => {
            console.error('Error logging in:', error);
        });
}

// Register function
function register(event) {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
       .then((userCredential) => {
            console.log('Registered successfully');
            // Redirect to home page
            window.location.href = 'home.html';
        })
       .catch((error) => {
            console.error('Error registering:', error);
        });
}

// Show register form
function showRegisterForm() {
    document.querySelector('.login-register').style.display = 'none';
    document.querySelector('.register-form').style.display = 'block';
}