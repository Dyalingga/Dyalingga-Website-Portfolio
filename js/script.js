// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar menghilangkan nav
const hamburger = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
