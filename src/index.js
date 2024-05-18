
// Import the functions you need from the SDKs you need
import { signInUser } from "../src/users.js";
import { auth } from "../src/init.js";

// Initialize variables for the website
var btn_register = document.getElementById('register-link');
const btn_applicant_login = document.getElementById('btn-applicant-login');
const btn_fundManager_login = document.getElementById('btn-fundManager-login');
const btn_platformAdmin_login = document.getElementById('btn-platformAdmin-login');

var admin = false;
var fundManager = false;
var applicant = false;

const user = auth.currentUser;

btn_register.addEventListener('click', () => {
    window.location.href = 'https://orange-cliff-0e5d1aa03.5.azurestaticapps.net/register.html';
});

btn_applicant_login.addEventListener('click', () => {
    applicant = true;
    fundManager = false;
    admin = false;
    signIn(admin, fundManager, applicant);
});

btn_fundManager_login.addEventListener('click', () => {
    applicant = false;
    fundManager = true;
    admin = false;
    signIn(admin, fundManager, applicant);
});

btn_platformAdmin_login.addEventListener('click', () => {
    applicant = false;
    fundManager = false;
    admin = true;
    signIn(admin, fundManager, applicant);
});

function signIn(admin, fundManager, applicant) {
    signInUser(admin, fundManager, applicant);
}
