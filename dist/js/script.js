const navLinks = document.querySelectorAll(".nav-link");

console.log(navLinks);

function activeLink() {
  navLinks.forEach((i) => i.classList.remove("active"));
  this.classList.add("active");
}

navLinks.forEach((i) => i.addEventListener("click", activeLink));
