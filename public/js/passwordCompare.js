document.getElementById("loginForm").addEventListener("submit", (event) => {
  let password1 = document.getElementById("password").value;
  let password2 = document.getElementById("repeatpass_word").value;

  if (password1 != password2) {
    document.getElementById("error-message2").innerHTML =
      "Passwords must be the same";
    event.preventDefault();
  }
});
