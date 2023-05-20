const dropDownBtn = document.getElementById("dropdownButton");
const mobileMenu = document.getElementById("mobile-menu");

dropDownBtn.addEventListener("click", () => {
  if (mobileMenu.style.display == "none") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
});
