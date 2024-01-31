function validateUsername(usernameValue) {
    // The username cannot be blank.
    if (usernameValue.length == 0) {
        return 'Username cannot be blank.';
    }

    // The username must be at least four characters long.
    if (usernameValue.length < 4) {
        return 'Username must be at least four characters long.';
    }

    // The username must contain at least two unique characters.
    let uniqueChars = new Set(usernameValue);
    if (uniqueChars.size < 2) {
        return 'Username must contain at least two unique characters.';
    }

    // The username cannot contain any special characters or whitespace.
    if (/[^a-zA-Z0-9]/.test(usernameValue)) {
        return 'Username cannot contain any special characters or whitespace.';
    }
    // Valid Username
    return 'VALID';
}

function validateEmail(emailValue) {
    // Valid email patter
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // Check if the email matches the valid email format
    if (!emailPattern.test(emailValue)) {
        return 'Invalid email address.';
    }
    // Check if the email is from the domain "example.com"
    if (emailValue.endsWith('@example.com')) {
        return 'Emails from "example.com" domain are not allowed.';
    }

    return 'VALID'; // Valid email
}

function validatePassword(passwordValue, confirmPasswordValue, usernameValue) {
    // Check if password and confirmPassword match
    if (passwordValue != confirmPasswordValue) {
        return 'Passwords do not match.';
    }

    // Check if password is not blank
    if (!passwordValue || !confirmPasswordValue) {
        return 'Password cannot be blank.';
    }

    // Check if password is at least 12 characters long
    if (passwordValue.length < 12) {
        return 'Password must be at least 12 characters long.';
    }

    // Check if password has at least one uppercase and one lowercase letter
    if (!/[A-Z]/.test(passwordValue) || !/[a-z]/.test(passwordValue)) {
        return 'Password must have at least one uppercase and one lowercase letter.';
    }

    // Check if password contains at least one number
    if (!/\d/.test(passwordValue)) {
        return 'Password must contain at least one number.';
    }

    // Check if password contains at least one special character
    if (!/[!@#$%^&*]/.test(passwordValue)) {
        return 'Password must contain at least one special character.';
    }

    // Check if password contains the word "password" (case-insensitive)
    if (passwordValue.toLowerCase().includes('password')) {
        return "Password cannot contain the word 'password'.";
    }

    // Check if password contains the username (case-insensitive)
    if (passwordValue.toLowerCase().includes(usernameValue.toLowerCase())) {
        return 'Password cannot contain the username.';
    }

    return 'VALID'; // Valid password
}

module.exports = {
    validateUsername,
    validateEmail,
    validatePassword,
};
