const { validateUsername, validateEmail } = require('../src/utils');

describe('validateUsername', () => {
    test('Blank username should be invalid', () => {
        const result = validateUsername('');
        expect(result).toBe('Username cannot be blank.');
    });

    test('Short username should be invalid', () => {
        const result = validateUsername('abc');
        expect(result).toBe('Username must be at least four characters long.');
    });

    test('Username with less than two unique characters should be invalid', () => {
        const result = validateUsername('aaaa');
        expect(result).toBe(
            'Username must contain at least two unique characters.'
        );
    });

    test('Username with special characters should be invalid', () => {
        const result = validateUsername('user@name');
        expect(result).toBe(
            'Username cannot contain any special characters or whitespace.'
        );
    });

    test('Username with spaces should be invalid', () => {
        const result = validateUsername('user name');
        expect(result).toBe(
            'Username cannot contain any special characters or whitespace.'
        );
    });

    test('Valid username', () => {
        const result = validateUsername('validusername');
        expect(result).toBe('VALID');
    });
});

describe('validateEmail', () => {
    test('Invalid email format', () => {
        const result = validateEmail('www.email.com');
        expect(result).toBe('Invalid email address.');
    });

    test('Prohibit "example.com"', () => {
        const result = validateEmail('valid_email@example.com');
        expect(result).toBe(
            'Emails from "example.com" domain are not allowed.'
        );
    });

    test('Valid email format', () => {
        const result = validateEmail('user@email.com');
        expect(result).toBe('VALID');
    });

    test('Email from other domains should return "VALID"', () => {
        const result = validateEmail('user@gmail.com');
        expect(result).toBe('VALID');
    });

    test('Email with numbers and special characters should return "VALID"', () => {
        const result = validateEmail('user123@yahoo.com');
        expect(result).toBe('VALID');
    });
});
