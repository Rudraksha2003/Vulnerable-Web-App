/**
 * A04 Cryptographic Failures – Leaked password database (unsalted SHA-256)
 * User finds hashes in env.sample, cracks admin password, then logs in with username + password.
 */

(function () {
    const ADMIN_HASH = '3c4f4909f02e770ef482e1cb6136f9fc78b88cfbab0087a2183fcd3a94ba38dc';
    const OTHER_HASHES = {
        '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92': 'john',
        '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918': 'jane'
    };
    const FLAG = 'FLAG{A04_Unsalted_Hash_Cracked}';

    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const getHintBtn = document.getElementById('get-hint-btn');
    const loginMessage = document.getElementById('login-message');
    const hintContainer = document.getElementById('hint-container');
    const flagOutput = document.getElementById('flag-output');
    const flagValueEl = document.getElementById('flag-value');

    getHintBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (hintContainer.children.length === 0) {
            var p = document.createElement('p');
            p.textContent = 'Hint: try opening ';
            var a = document.createElement('a');
            a.href = 'env.sample';
            a.target = '_blank';
            a.rel = 'noopener';
            a.textContent = 'env.sample';
            p.appendChild(a);
            p.appendChild(document.createTextNode(' in this folder.'));
            hintContainer.appendChild(p);
        }
        hintContainer.style.display = hintContainer.style.display === 'none' ? 'block' : 'none';
    });

    function bufferToHex(buffer) {
        return Array.from(new Uint8Array(buffer))
            .map(function (b) { return ('0' + b.toString(16)).slice(-2); })
            .join('');
    }

    function sha256Hex(str) {
        var encoder = new TextEncoder();
        return crypto.subtle.digest('SHA-256', encoder.encode(str))
            .then(function (buffer) { return bufferToHex(buffer); });
    }

    function setLoginMessage(msg, isError) {
        loginMessage.textContent = msg;
        loginMessage.className = 'login-message' + (isError ? ' error' : '');
    }

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var username = (usernameInput.value || '').trim();
        var password = passwordInput.value || '';
        loginMessage.textContent = '';
        loginMessage.className = 'login-message';

        if (!username || !password) {
            setLoginMessage('Enter username and password.', true);
            return;
        }

        sha256Hex(password).then(function (hash) {
            if (username.toLowerCase() !== 'admin') {
                if (hash === ADMIN_HASH) {
                    setLoginMessage('That password is for the admin account. Log in with username admin.', false);
                } else {
                    setLoginMessage('Invalid credentials.', true);
                }
                return;
            }
            if (hash === ADMIN_HASH) {
                if (flagValueEl) flagValueEl.textContent = FLAG;
                if (flagOutput) flagOutput.style.display = 'block';
                setLoginMessage('Login successful. Flag revealed below.', false);
            } else if (OTHER_HASHES[hash]) {
                setLoginMessage("Correct password for another user, but not admin. Recover the admin password and log in as admin.", false);
            } else {
                setLoginMessage('Invalid credentials.', true);
            }
        });
    });
})();
