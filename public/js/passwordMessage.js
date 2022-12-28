document.getElementById("loginForm").addEventListener("submit", (event) => {
  const password = document.getElementById("password", "repeatpass_word").value;

  const isValid = password.length >= 6;

  if (!isValid) {
    document.getElementById("error-message").innerHTML =
      "  Password must be at least 6 digits";

    event.preventDefault();
  }
});
