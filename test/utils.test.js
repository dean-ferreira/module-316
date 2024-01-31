const { validateUsername } = require('../src/utils');

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
