window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".header");

  if (window.scrollY > 32) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
