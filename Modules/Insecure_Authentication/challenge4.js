/**
 * Insecure Authentication Challenge.
 * Response comes from the backend only. Frontend does not display the response.
 * Vulnerability: intercept the response (e.g. with Burp Suite) and change success to true to get access.
 */

(function () {
    const AUTH_API = '/.netlify/functions/auth';

    document.getElementById('login-form').addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const messageEl = document.getElementById('auth-message');

        messageEl.textContent = '';
        messageEl.className = 'auth-message';

        try {
            const res = await fetch(AUTH_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();

            if (data && data.success === true) {
                localStorage.setItem('success', 'true');
                window.location.href = 'dashboard.html';
                return;
            }

            messageEl.textContent = 'Invalid credentials.';
            messageEl.classList.add('error');
        } catch (e) {
            messageEl.textContent = 'Unable to reach server.';
            messageEl.classList.add('error');
        }
    });
})();
