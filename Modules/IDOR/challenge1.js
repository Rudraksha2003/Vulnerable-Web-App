// Vulnerable web app/Modules/IDOR/challenge.js

function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if both username and password are filled
    if (username.trim() === '' || password.trim() === '') {
        displayError('Please fill in all the inputs.');
        return;
    }

    // Send the login request to the Netlify function
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login successful') {
            // Set a flag in localStorage to indicate that the user is logged in
            localStorage.setItem('isUserLoggedIn', 'true');

            // Redirect to the user dashboard page using the dynamic user ID
            window.location.href = `user.html?user=${data.userId}`;
        } else {
            // Display error message for incorrect credentials
            displayError(data.message);
        }
    })
    .catch(error => {
        displayError('An error occurred. Please try again.');
    });
}

function displayError(message) {
    const errorMessages = document.getElementById('error-messages');
    errorMessages.innerHTML = `<p>${message}</p>`;
}
