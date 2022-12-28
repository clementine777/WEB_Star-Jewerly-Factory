// const menu =
//const btnMenu = ;

document.querySelector("#user-icon").addEventListener("click", function () {
  if (document.querySelector(".submenu").style.visibility == "hidden") {
    document.querySelector(".submenu").style.visibility = "visible";
    document.querySelector(".submenu").style.opacity = "1";
  } else {
    document.querySelector(".submenu").style.visibility = "hidden";
    document.querySelector(".submenu").style.opacity = "0";
  }
});

// document.getElementById("user-icon").addEventListener("click", function () {
//   document.getElementById("submenu").style.display = "block";
// });
