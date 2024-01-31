import { validateEmail, validatePassword, validateUsername } from './utils.js';

// Constants and Variables
const errorDisplay = document.getElementById('errorDisplay');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('passwordCheck');
const acceptTermsCheckbox = document.getElementById('terms');
const registrationForm = document.getElementById('registration');

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
        localStorage.setItem(newUser.username, newUser);
    }
});
