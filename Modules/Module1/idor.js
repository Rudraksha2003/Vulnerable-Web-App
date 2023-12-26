// Vulnerable web app/Modules/Module1/idor.js

function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if both username and password are filled
    if (username.trim() === '' || password.trim() === '') {
        displayError('Please fill in all the inputs.');
        return;
    }

    // Check if the entered credentials match the test credentials
    if (username === 'test' && password === 'test') {
        // Set a flag in localStorage to indicate that the user is logged in
        localStorage.setItem('isUserLoggedIn', 'true');

        // Redirect to the user dashboard page after successful login
        window.location.href = '../Module1/user/1.html';
    } else {
        // Display an error message for incorrect credentials
        displayError('Incorrect username or password. Please try again.');
    }
}

function displayError(message) {
    // Display error messages
    const errorMessages = document.getElementById('error-messages');
    errorMessages.innerHTML = `<p>${message}</p>`;
}


// Check if the user is logged in
const isLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';

// Clear the login status if the user is not logged in
if (!isLoggedIn) {
    localStorage.removeItem('isUserLoggedIn');
}

function logout() {
    // Remove the flag from localStorage to indicate that the user is logged out
    localStorage.removeItem('isUserLoggedIn');
    // Redirect to the login page after logging out
    window.location.href = '../Module1/idor.html';
}

