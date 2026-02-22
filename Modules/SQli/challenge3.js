/**
 * SQLi Challenge – client-side simulation (no backend or database needed).
 * Simulates a vulnerable login that uses user input unsafely.
 */

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // In-memory "database" – no real DB required
    const users = [
        { id: 1, username: 'admin', password: 'admin123', role: 'administrator' },
        { id: 2, username: 'user', password: 'pass', role: 'user' }
    ];

    // VULNERABLE: build query by string concatenation (simulated)
    const simulatedQuery = "SELECT * FROM users WHERE username='" + username + "' AND password='" + password + "'";

    let result = { query: simulatedQuery, success: false, message: null, user: null };

    // Simulate "execution" – check for classic SQLi payloads (effect of the vulnerable query)
    const u = username.trim();
    const p = password;

    // 1) Comment-out rest of query: admin' -- or admin' --
    if (u.includes("' --") || u.endsWith("'--") || u.includes("'--")) {
        const baseUser = u.split("'")[0].trim();
        const found = users.find(function (r) { return r.username === baseUser || baseUser === 'admin'; });
        result.success = true;
        result.message = 'Login successful.';
        result.user = found || users[0];
    }
    // 2) OR 1=1 style
    else if (u.indexOf("' OR '1'='1") !== -1 || u.indexOf("' OR 1=1") !== -1 ||
             p.indexOf("' OR '1'='1") !== -1 || p.indexOf("' OR 1=1") !== -1 ||
             u === "' OR '1'='1' --" || u.indexOf("OR '1'='1") !== -1) {
        result.success = true;
        result.message = 'Login successful.';
        result.user = users[0];
    }
    // 3) OR condition style
    else if (u.indexOf("OR '1'='1") !== -1 || u.indexOf("or '1'='1") !== -1) {
        result.success = true;
        result.message = 'Login successful.';
        result.user = users[0];
    }
    // 4) Normal login
    else {
        const found = users.find(function (r) { return r.username === u && r.password === p; });
        if (found) {
            result.success = true;
            result.message = 'Login successful.';
            result.user = found;
        } else {
            result.message = 'Invalid credentials.';
        }
    }

    // Store and show response (same as before – no API)
    localStorage.setItem('apiResponse', JSON.stringify(result, null, 4));
    window.location.href = 'response.html';
});
