// get form elements
const form = document.querySelector("form") as HTMLFormElement;
const nameInput = document.querySelector("input[type='text']") as HTMLInputElement;
const emailInput = document.querySelector("input[type='email']") as HTMLInputElement;
const messageInput = document.querySelector("textarea") as HTMLTextAreaElement;
const submitButton = document.querySelector("#btn3") as HTMLButtonElement;

// Function to validate email format
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to handle form submission
function handleFormSubmit(event: Event): void {
  event.preventDefault(); // Prevent default form submission

  // Get input values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

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
  alert(`Message sent successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

  // Optionally, reset the form
  form.reset();
}

// Attach event listener to the form
form.addEventListener("submit", handleFormSubmit);
