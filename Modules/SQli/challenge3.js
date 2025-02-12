// Modules/SQLi/challenge3.js

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get form inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Send POST request to the API endpoint
        const response = await fetch('/api/sqli', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        // Parse the response as JSON
        const data = await response.json();

        // Save the response to localStorage
        localStorage.setItem('apiResponse', JSON.stringify(data, null, 4));

        // Redirect to the response page
        window.location.href = 'response.html';
    } catch (err) {
        console.error('Error occurred:', err);
    }
});
