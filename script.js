// project-folder/script.js

function simulateBrokenAccessControl() {
    // Simulate broken access control (content is visible without proper authorization)
    document.getElementById('brokenAccessControlContent').style.display = 'block';
}

function simulateCryptographicFailures() {
    // Simulate cryptographic failures (insecure encryption)
    const encryptedData = 'insecurely_encrypted_data';
    alert(`Encrypted data: ${encryptedData}`);
}

function simulateInjection() {
    // Simulate injection vulnerability (SQL injection)
    const userInput = prompt('Enter your name:');
    const query = `SELECT * FROM users WHERE username = '${userInput}'`;
    alert(`Executing query: ${query}`);
}

function simulateInsecureDesign() {
    // Simulate insecure design vulnerability (insecure direct object reference)
    const userId = 1; // Assume the logged-in user's ID is 1
    const requestedUserId = prompt('Enter the user ID you want to view:');
    
    if (userId == requestedUserId) {
        alert(`Displaying sensitive information for user with ID ${requestedUserId}`);
    } else {
        alert(`Access denied. You do not have permission to view user with ID ${requestedUserId}`);
    }
}

function simulateSecurityMisconfiguration() {
    // Simulate security misconfiguration (exposing sensitive information)
    const secretApiKey = 'super_secret_api_key';
    alert(`Exposed sensitive information: API key is ${secretApiKey}`);
}

function simulateVulnerableComponents() {
    // Simulate vulnerable and outdated components (using an outdated library)
    const outdatedLibraryVersion = 'v1.0.0';
    alert(`Using outdated library version: ${outdatedLibraryVersion}`);
}

function simulateAuthFailures() {
    // Simulate identification and authentication failures (weak authentication)
    const username = prompt('Enter your username:');
    const password = prompt('Enter your password:');
    
    if (username === 'admin' && password === 'weakpassword') {
        alert('Authentication successful! Welcome, admin.');
    } else {
        alert('Authentication failed. Invalid credentials.');
    }
}

function simulateIntegrityFailures() {
    // Simulate software and data integrity failures (insecure deserialization)
    const serializedData = '{"user":"admin","role":"user"}';
    const deserializedData = JSON.parse(serializedData);
    
    alert(`Insecure deserialization: User role is ${deserializedData.role}`);
}

function simulateLoggingFailures() {
    // Simulate security logging and monitoring failures (insufficient logging)
    alert('Security logging and monitoring failures: Insufficient logging detected.');
}

function simulateSSRF() {
    // Simulate Server-Side Request Forgery (SSRF)
    const targetUrl = prompt('Enter the target URL:');
    
    // Simulate making a malicious request (e.g., accessing internal resources)
    alert(`Attempting to access: ${targetUrl}`);
}