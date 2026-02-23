// File: challenge2.js
var XSS_FLAG = "FLAG{A05_XSS_Reflected_Script}";

// When reflected XSS runs, the payload can call this to reveal the flag.
window.revealXSSFlag = function () {
    var box = document.getElementById("xss-flag-box");
    var valueEl = document.getElementById("xss-flag-value");
    if (box) {
        if (valueEl) valueEl.textContent = XSS_FLAG;
        box.style.display = "block";
    }
};

(function () {
    var getHintBtn = document.getElementById("get-hint-btn");
    var hintContainer = document.getElementById("hint-container");
    if (getHintBtn && hintContainer) {
        getHintBtn.addEventListener("click", function () {
            if (hintContainer.children.length === 0) {
                var p = document.createElement("p");
                p.textContent = "When you successfully execute reflected XSS, call ";
                var code = document.createElement("code");
                code.textContent = "revealXSSFlag()";
                p.appendChild(code);
                p.appendChild(document.createTextNode(" in your payload to reveal the flag."));
                hintContainer.appendChild(p);
            }
            hintContainer.style.display = hintContainer.style.display === "none" ? "block" : "none";
        });
    }
})();

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