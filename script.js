const form = document.getElementById('signup-form');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !email || !password) {
    message.textContent = "Please fill in all fields!";
    message.style.color = "red";
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    message.textContent = "Please enter a valid email address!";
    message.style.color = "red";
    return;
  }

  message.textContent = `Welcome, ${username}! You've successfully signed up.`;
  message.style.color = "green";

  // Reset form
  form.reset();
});
