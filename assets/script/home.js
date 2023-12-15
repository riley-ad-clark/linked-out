'use strict';

const loginButton = document.querySelector('button');
let emailInput = document.querySelector('input[type="text"]');
let passInput = document.querySelector('input[type="password"]');

// Retrieve saved username and password from local storage
let storedEmail = localStorage.getItem('username');
let storedPassword = localStorage.getItem('password');

// Default values if nothing is stored
let email = storedEmail || 'example@email.com';
let password = storedPassword || 'password';

// Set default values in the input fields
emailInput.value = email;
passInput.value = password;

loginButton.addEventListener('click', () => {
    let enteredEmail = emailInput.value;
    let enteredPassword = passInput.value;

    const resetAnimation = (element) => {
        element.classList.remove('error');
        element.addEventListener('animationend', () => element.classList.remove('error'), { once: true });
    };

    if (enteredEmail === email && enteredPassword === password) {
        // Save entered username and password to local storage
        localStorage.setItem('username', enteredEmail);
        localStorage.setItem('password', enteredPassword);

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