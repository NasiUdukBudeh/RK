const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((e) => {
  e.addEventListener("click", () => {
    navLink.forEach((link) => link.classList.remove("clicked"));
    e.classList.add("clicked");
  });
});
