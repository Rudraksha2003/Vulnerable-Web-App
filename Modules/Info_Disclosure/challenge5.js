// Vulnerable web app/Modules/Info_Disclosure/challenge5.js

function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if both username and password are filled
    if (username.trim() === '' || password.trim() === '') {
        displayError('Please fill in all the inputs.');
        return;
    }

    // Hardcoded credentials (for this exercise)
    const validUsername = 'test';
    const validPassword = 'p@ssword';

    // Check if the entered credentials match
    if (username === validUsername && password === validPassword) {
        // Set a flag in localStorage to indicate that the user is logged in
        localStorage.setItem('isUserLoggedIn', 'true');

        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    } else {
        // Display an error for incorrect credentials
        displayError('Incorrect username or password. <br>Hint: Look for the js file :)');
    }
}

function displayError(message) {
    // Display error messages
    const errorMessages = document.getElementById('error-messages');
    errorMessages.innerHTML = `<p>${message}</p>`;
}
