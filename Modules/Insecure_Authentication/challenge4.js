/**
 * Insecure Authentication Challenge.
 * Response comes from the backend (Netlify function). App then trusts that response.
 * Vulnerability: user can manipulate the displayed response before clicking Proceed to get access.
 */

(function () {
    const AUTH_API = '/.netlify/functions/auth';

    document.getElementById('login-form').addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const responseSection = document.getElementById('response-section');
        const authResponseEl = document.getElementById('auth-response');

        responseSection.style.display = 'block';
        authResponseEl.value = 'Loading...';

        try {
            const res = await fetch(AUTH_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();
            authResponseEl.value = JSON.stringify(data, null, 2);
        } catch (e) {
            authResponseEl.value = JSON.stringify({
                success: false,
                error: 'Backend unavailable. Deploy to Netlify (or run Netlify Dev) for this challenge.',
            }, null, 2);
        }
    });

    document.getElementById('proceed-btn').addEventListener('click', function () {
        const authResponseEl = document.getElementById('auth-response');

        try {
            const data = JSON.parse(authResponseEl.value);
            if (data && data.success === true) {
                localStorage.setItem('success', 'true');
                window.location.href = 'dashboard.html';
            } else {
                alert('Access denied.');
            }
        } catch (e) {
            alert('Invalid response.');
        }
    });
})();
