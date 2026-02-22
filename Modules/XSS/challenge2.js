// File: challenge2.js
function processInput() {
    const userInput = document.getElementById("xss-input").value;

    // Add the comment dynamically to the list
    const commentList = document.getElementById("comment-list");

    // Create a new list item
    const newComment = document.createElement("li");

    // Create a clickable link with the comment
    const commentLink = document.createElement("a");
    commentLink.href = "#";
    commentLink.innerHTML = userInput; // Reflect the raw input directly for XSS
    commentLink.setAttribute("onclick", `displayComment('${userInput}')`);

    // Append the link to the list item
    newComment.appendChild(commentLink);

    // Append the list item to the comment list
    commentList.appendChild(newComment);

    // Clear the input field
    document.getElementById("xss-input").value = "";
}

// Function to display the comment directly in the output box
function displayComment(comment) {
    document.getElementById("output").innerHTML = comment;
}