console.log('M 8-9: 3');

/**
 * ЗАВДАННЯ 3
 *
 * Якщо імейл і пароль користувача збігаються,
 * при сабміті зберігай дані з форми в локальне сховище
 * змінюй кнопку 'log in' на 'log out' і роби поля введення
 * недоступними для зміни.
 *
 * При перезавантаженні сторінки, якщо користувач залогінений,
 * ми повинні бачити 'log out'-кнопку
 * і поля з даними користувача недоступні для зміни.
 *
 * Клік по кнопці 'log out' повертає все в первісний вигляд
 * і видаляє дані користувача з локального сховища.
 *
 * Якщо введені дані не збігаються з потрібними даними,
 * викликати аlert/console і повідомляти про помилку.
 */

const USER_DATA = {
    email: 'user@ukr.io',
    password: 'qwerty',
};

const form = document.querySelector('#login-form');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const button = document.querySelector('#submit-button');


const user = JSON.parse(localStorage.getItem('user'));
if (user) {
    email.value = user.email;
    password.value = user.password;
    email.disabled = true;
    password.disabled = true;
    button.textContent = 'Log out';
}


button.addEventListener('click', () => {
    if (user) {
        localStorage.removeItem('user');
        email.disabled = false;
        password.disabled = false;
        email.value = '';
        password.value = '';
        button.textContent = 'Log in';
        user = null;
    } else if (
        email.value === USER_DATA.email &&
        password.value === USER_DATA.password
    ) {
        localStorage.setItem(
            'user',
            JSON.stringify({ email: email.value, password: password.value })
        );
        email.disabled = true;
        password.disabled = true;
        button.textContent = 'Log out';
        user = JSON.parse(localStorage.getItem('user'));
    } else {
        alert('Wrong email or password');
    }
});

