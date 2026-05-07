document.addEventListener("DOMContentLoaded", function () {

  const topBtn = document.getElementById("topBtn");

  window.addEventListener("scroll", function () {
  const topBtn = document.getElementById("topBtn");

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

  window.scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

});

function toggleMenu(){
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

const navLinks = document.getElementById("navLinks");
const menuToggle = document.querySelector(".menu-toggle");

// close menu when a link is clicked
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.classList.remove("active");
  });
});