document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    formMessage.textContent = "";
    formMessage.style.color = "red";

    if (name.length < 3) {
      formMessage.textContent = "Name must be at least 3 characters.";
      return;
    }

    if (!emailRegex.test(email)) {
      formMessage.textContent = "Please enter a valid email.";
      return;
    }

    if (message.length < 10) {
      formMessage.textContent = "Message must be at least 10 characters.";
      return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    form.reset();
  });
});
