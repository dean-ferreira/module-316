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

module.exports = {
    validateUsername,
    validateEmail,
};
