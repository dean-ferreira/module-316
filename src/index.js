import {
    validateEmail,
    validateLogin,
    validatePassword,
    validateUsername,
} from './utils.js';

// Constants and Variables
const errorDisplay = document.getElementById('errorDisplay');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('passwordCheck');
const acceptTermsCheckbox = document.getElementById('terms');
const registrationForm = document.getElementById('registration');

const loginUsernameInput = document.getElementById('login-username');
const loginPasswordInput = document.getElementById('login-password');
const persistCheckbox = document.getElementById('persist');
const loginForm = document.getElementById('login');

// Functions
function displayError(errorMsg) {
    errorDisplay.textContent = errorMsg;
    errorDisplay.style.display = 'block';
}

// Event Listeners
registrationForm.addEventListener('submit', function (event) {
    const usernameResult = validateUsername(usernameInput.value);
    const emailResult = validateEmail(emailInput.value);
    const passwordResult = validatePassword(
        passwordInput.value,
        confirmPasswordInput.value,
        usernameInput.value
    );

    if (usernameResult != 'VALID') {
        event.preventDefault();
        displayError(usernameResult);
    } else if (emailResult != 'VALID') {
        event.preventDefault();
        displayError(emailResult);
    } else if (passwordResult != 'VALID') {
        event.preventDefault();
        displayError(passwordResult);
    } else if (!acceptTermsCheckbox.checked) {
        event.preventDefault();
        displayError('Terms and Conditions must be accepted.');
    } else if (!localStorage.getItem(usernameInput.value)) {
        event.preventDefault();
        displayError('Username already exists.');
    } else if (
        usernameResult === 'VALID' &&
        emailResult === 'VALID' &&
        passwordResult === 'VALID'
    ) {
        const newUser = {
            username: usernameInput.value.toLowerCase(),
            email: emailInput.value.toLowerCase(),
            password: passwordInput.value,
        };
        localStorage.setItem(newUser.username, JSON.stringify(newUser));
    }
});

loginForm.addEventListener('submit', function (event) {
    const loginResult = validateLogin(
        loginUsernameInput.value,
        loginPasswordInput.value,
        localStorage.getItem(loginUsernameInput.value.toLowerCase())
    );
    console.log(loginResult);
    if (loginResult !== 'VALID') {
        event.preventDefault();
        displayError(loginResult);
    } else {
        if (persistCheckbox.checked) {
            alert("Welcome back, we'll keep you logged in.");
        } else {
            alert('Welcome back.');
        }
    }
});
