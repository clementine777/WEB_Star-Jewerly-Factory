//direccionamiento de logo del header
document.getElementById("logoHeader").addEventListener("click", function () {
  window.location.href = "/home";
});

//navbar direccionamineto
const navLinks = document.querySelectorAll(".reference-nav");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "/error/404";
  });
});
