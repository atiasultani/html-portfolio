// get form elements
var form = document.querySelector("form");
var nameInput = document.querySelector("input[type='text']");
var emailInput = document.querySelector("input[type='email']");
var messageInput = document.querySelector("textarea");
var submitButton = document.querySelector("#btn3");
// Function to validate email format
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    // Get input values
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();
    // Validate inputs
    if (!name) {
        alert("Please enter your name.");
        return;
    }
    if (!email || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!message) {
        alert("Please enter a message.");
        return;
    }
    // Simulate sending the message (or implement your actual logic here)
    alert("Message sent successfully!\n\nName: ".concat(name, "\nEmail: ").concat(email, "\nMessage: ").concat(message));
    // Optionally, reset the form
    form.reset();
}
// Attach event listener to the form
form.addEventListener("submit", handleFormSubmit);
