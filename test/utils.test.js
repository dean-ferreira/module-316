import {
    validateEmail,
    validateLogin,
    validatePassword,
    validateUsername,
} from '../src/utils.js';

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

describe('validatePassword', () => {
    test('Valid password should return VALID', () => {
        const password = 'SecureP@ssw0rd';
        const confirmPassword = 'SecureP@ssw0rd';
        const username = 'user123';

        const result = validatePassword(password, confirmPassword, username);
        expect(result).toBe('VALID');
    });

    test('Passwords that do not match should return "Passwords do not match."', () => {
        const password = 'Password123!';
        const confirmPassword = 'DifferentPassword123!';
        const username = 'user123';

        const result = validatePassword(password, confirmPassword, username);
        expect(result).toBe('Passwords do not match.');
    });

    test('Short password should return "Password must be at least 12 characters long."', () => {
        const password = 'ShortP@ss';
        const confirmPassword = 'ShortP@ss';
        const username = 'user123';

        const result = validatePassword(password, confirmPassword, username);
        expect(result).toBe('Password must be at least 12 characters long.');
    });

    test('Password missing uppercase letter should return "Password must have at least one uppercase and one lowercase letter."', () => {
        const password = 'lowercase123!';
        const confirmPassword = 'lowercase123!';
        const username = 'user123';

        const result = validatePassword(password, confirmPassword, username);
        expect(result).toBe(
            'Password must have at least one uppercase and one lowercase letter.'
        );
    });

    test('Password missing lowercase letter should return "Password must have at least one uppercase and one lowercase letter."', () => {
        const password = 'UPPERCASE123!';
        const confirmPassword = 'UPPERCASE123!';
        const username = 'user123';

        const result = validatePassword(password, confirmPassword, username);
        expect(result).toBe(
            'Password must have at least one uppercase and one lowercase letter.'
        );
    });

    test('Password missing number should return "Password must contain at least one number."', () => {
        const password = 'PWWithoutNumbers!';
        const confirmPassword = 'PWWithoutNumbers!';
        const username = 'user123';

        const result = validatePassword(password, confirmPassword, username);
        expect(result).toBe('Password must contain at least one number.');
    });

    test('Password missing special character should return "Password must contain at least one special character."', () => {
        const password = 'SpecialCharacter123';
        const confirmPassword = 'SpecialCharacter123';
        const username = 'user123';

        const result = validatePassword(password, confirmPassword, username);
        expect(result).toBe(
            'Password must contain at least one special character.'
        );
    });

    test('Password containing "password" should return "Password cannot contain the word \'password\'."', () => {
        const password = 'Mypassword123!';
        const confirmPassword = 'Mypassword123!';
        const username = 'user123';

        const result = validatePassword(password, confirmPassword, username);
        expect(result).toBe("Password cannot contain the word 'password'.");
    });

    test('Password containing the username should return "Password cannot contain the username."', () => {
        const password = 'user123AwesomePW!';
        const confirmPassword = 'user123AwesomePW!';
        const username = 'user123';

        const result = validatePassword(password, confirmPassword, username);
        expect(result).toBe('Password cannot contain the username.');
    });
});

describe('validateLogin', () => {
    test('Blank usernames should return "Username cannot be blank"', () => {
        const username = '';
        const password = 'SecureP@ssw0rd';
        const user =
            '{"username":"admin","email":"admin@gmail.com","password":"SecureP@ssw0rd"}';

        const result = validateLogin(username, password, user);
        expect(result).toBe('Username cannot be blank.');
    });

    test('Blank passwords should return "Password cannot be blank"', () => {
        const username = 'admin';
        const password = '';
        const user =
            '{"username":"admin","email":"admin@gmail.com","password":"SecureP@ssw0rd"}';

        const result = validateLogin(username, password, user);
        expect(result).toBe('Password cannot be blank.');
    });

    test('Usernames not found should return "Username does not exist."', () => {
        const username = 'admin';
        const password = 'SecureP@ssw0rd';
        const user = null;

        const result = validateLogin(username, password, user);
        expect(result).toBe('Username does not exist.');
    });

    test('Successful login should return "VALID"', () => {
        const username = 'admin';
        const password = 'SecureP@ssw0rd';
        const user =
            '{"username":"admin","email":"admin@gmail.com","password":"SecureP@ssw0rd"}';

        const result = validateLogin(username, password, user);
        expect(result).toBe('VALID');
    });
});
