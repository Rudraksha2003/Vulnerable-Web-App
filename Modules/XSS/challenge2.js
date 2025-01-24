// File: challenge2.js
function processInput() {
    const userInput = document.getElementById("xss-input").value;

    // Basic sanitization: Escaping < and >
    const sanitizedInput = userInput
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Display the sanitized input in the output box
    document.getElementById("output").innerHTML = `Output: ${sanitizedInput}`;
}