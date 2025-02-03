// script.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  // Handle form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form from submitting immediately

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }

    // If validation passes, you can proceed with your desired action (like logging in)
    alert("Login successful!");

    // Optionally, you could redirect to another page:
    // window.location.href = "dashboard.html";
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const togglePasswordIcons = document.querySelectorAll(".toggle-password");
  const resetForm = document.getElementById("reset-form");

  togglePasswordIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const targetInput = document.getElementById(icon.getAttribute("data-target"));
      if (targetInput.type === "password") {
        targetInput.type = "text";
        icon.classList.add("fa-eye-slash");
      } else {
        targetInput.type = "password";
        icon.classList.remove("fa-eye-slash");
      }
    });
  });

  resetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword === confirmPassword) {
      alert(`Password reset successful for ${email}!`);
    } else {
      alert("Passwords do not match. Please try again.");
    }
  }