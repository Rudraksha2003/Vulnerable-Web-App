document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const responseBox = document.getElementById('response-box');

    try {
        const response = await fetch('/api/auth-manipulation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        // Show the response message
        responseBox.style.display = 'block';

        if (data.success) {
            // Set the session to simulate login
            localStorage.setItem('success', 'true');

            responseBox.textContent = "Login Successful!";
            responseBox.style.color = 'green';

            // Redirect to the dashboard
            window.location.href = 'dashboard.html';
        } else {
            responseBox.textContent = "Invalid Credentials!";
            responseBox.style.color = 'red';
        }
    } catch (err) {
        console.error('Error:', err);
        responseBox.style.display = 'block';
        responseBox.textContent = "An error occurred. Please try again.";
        responseBox.style.color = 'orange';
    }
});
