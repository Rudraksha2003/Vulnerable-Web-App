// Vulnerable web app/Modules/IDOR/challenge.js

function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if both username and password are filled
    if (username.trim() === '' || password.trim() === '') {
        displayError('Please fill in all the inputs.');
        return;
    }

    // Check if the entered credentials match the test credentials
    if (username === 'test' && password === 'p@ssword') {
        // Set a flag in localStorage to indicate that the user is logged in
        localStorage.setItem('isUserLoggedIn', 'true');

        // Get user parameter from URL
        const urlParams = new URLSearchParams(window.location.search);
        const userId = 1;

        // Redirect to the user dashboard page using the dynamic user ID
        window.location.href = `user.html?user=${userId}`;
    } else {
        // Display an hint for incorrect credentials
        displayError('Incorrect username or password. Hint: Check the js file :)');
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
    window.location.href = 'challenge1.html';
}

