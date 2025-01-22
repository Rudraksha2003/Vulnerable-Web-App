// Function to fetch and display user data dynamically based on the URL parameter
function loadUserData() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('user');

    // Fetch user data from the JSON file
    fetch('user-data.json')
        .then(response => response.json())
        .then(data => {
            if (userId && data[userId]) {
                const user = data[userId];
                displayUserData(user);
            } else {
                displayError("User not found or invalid. <br>Hint: See all the <b>'Whole Numbers'</b> :)");
            }
        })
        .catch(error => {
            displayError(error.message);
        });
}

// Function to display user data on the page
function displayUserData(user) {
    const userContentDiv = document.getElementById("user-content");
    userContentDiv.innerHTML = `
        <h2>User Information</h2>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        ${user.phone ? `<p><strong>Phone:</strong> ${user.phone}</p>` : ""}
        ${user.credit_card ? `<p><strong>Credit Card:</strong> ${user.credit_card}</p>` : ""}
        ${user.access_code ? `<p><strong>Access Code:</strong> ${user.access_code}</p>` : ""}
        ${user.plans ? `<p><strong>Plans:</strong> ${user.plans}</p>` : ""}
    `;
}

// Function to display an error message
function displayError(message) {
    const userContentDiv = document.getElementById("user-content");
    userContentDiv.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
}

// Handle logout
document.getElementById("logout-button").addEventListener("click", () => {
    localStorage.removeItem("isUserLoggedIn");
    window.location.href = "challenge1.html";
});

// Load user data on page load
loadUserData();
