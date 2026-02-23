/**
 * A02 Security Misconfiguration – Default Accounts & Sample Apps
 * Vulnerability: Sample app left in production with default credentials still enabled.
 * No server required; credentials are checked client-side for this lab.
 */

(function () {
    const STORAGE_KEY = 'a02_default_accounts_authenticated';

    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const errorEl = document.getElementById('error-messages');

        errorEl.textContent = '';
        errorEl.className = 'error-messages';

        // Default credentials left unchanged (misconfiguration from modules.txt Scenario 1)
        const DEFAULT_USERNAME = 'admin';
        const DEFAULT_PASSWORD = 'admin';

        if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
            sessionStorage.setItem(STORAGE_KEY, 'true');
            window.location.href = 'dashboard-default-accounts.html';
            return;
        }

        errorEl.textContent = 'Invalid username or password.';
        errorEl.classList.add('error');
    });
})();
