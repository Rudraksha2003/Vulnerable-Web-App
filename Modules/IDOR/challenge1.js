// IDOR Challenge – client-side login (no backend required).
// Valid creds: test / p@ssword → redirect to user profile (user=1).
// The IDOR vuln: users can change the ?user= parameter to access other users' data.

function attemptLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password) {
        displayError('Please fill in all the inputs.');
        return;
    }

    // Client-side check so the lab works without /api/login (e.g. on static Netlify)
    const validUsername = 'test';
    const validPassword = 'p@ssword';

    if (username === validUsername && password === validPassword) {
        localStorage.setItem('isUserLoggedIn', 'true');
        // Redirect to "your" profile (user id 1). IDOR: try changing ?user= to 0, 2, 3, 4, 5 in the URL.
        window.location.href = 'user.html?user=1';
    } else {
        displayError('Invalid username or password.');
    }
}

function displayError(message) {
    const el = document.getElementById('error-messages');
    el.innerHTML = `<p>${message}</p>`;
    el.style.display = 'block';
}
