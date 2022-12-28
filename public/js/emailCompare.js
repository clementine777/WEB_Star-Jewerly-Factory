document.getElementById("loginForm").addEventListener("submit", (event) => {
  let password1 = document.getElementById("email").value;
  let password2 = document.getElementById("repeat_email").value;

  if (password1 != password2) {
    document.getElementById("error-message-email").innerHTML =
      "Email must be the same";
    event.preventDefault();
  } else {
    document.getElementById("error-message-email").innerHTML = "";
  }
});
