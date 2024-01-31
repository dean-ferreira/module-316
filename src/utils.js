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

module.exports = {
    validateUsername,
};
