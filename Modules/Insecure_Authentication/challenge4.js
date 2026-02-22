/**
 * Insecure Authentication Challenge – client-side (no backend).
 * Server returns { success: true } or { success: false }. App trusts that response.
 * Vulnerability: user can manipulate the response (e.g. edit the JSON) to get access.
 */

(function () {
    const validUsername = 'admin';
    const validPassword = 'admin123';

    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const responseSection = document.getElementById('response-section');
        const authResponseEl = document.getElementById('auth-response');

        const correct = username === validUsername && password === validPassword;
        const data = { success: correct };
        authResponseEl.value = JSON.stringify(data, null, 2);

        responseSection.style.display = 'block';
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
