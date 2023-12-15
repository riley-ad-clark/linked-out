'use strict';

const loginButton = document.querySelector('button');
let emailInput = document.querySelector('input[type="text"]');
let passInput = document.querySelector('input[type="password"]');

let email = 'example@email.com';
let password = 'password';

loginButton.addEventListener('click', () => {
    let enteredEmail = emailInput.value;
    let enteredPassword = passInput.value;

    const resetAnimation = (element) => {
        element.classList.remove('error');
        element.addEventListener('animationend', () => element.classList.remove('error'), { once: true });
    };

    if (enteredEmail === email && enteredPassword === password) {
        window.location.href = 'index.html';
    }

    if (enteredEmail !== email || enteredEmail.trim() === "") {
        resetAnimation(emailInput);
        emailInput.classList.add('error');
    }

    if (enteredPassword !== password || enteredPassword.trim() === "") {
        resetAnimation(passInput);
        passInput.classList.add('error');
    }
});