document.addEventListener("DOMContentLoaded", function () {

  const topBtn = document.getElementById("topBtn");
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.querySelector(".menu-toggle");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
      topBtn.style.visibility = "visible";
    } else {
      topBtn.style.display = "none";
      topBtn.style.visibility = "hidden";
    }
  });

  window.scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  window.toggleMenu = function () {
    navLinks.classList.toggle("show");
    menuToggle.classList.toggle("active");
  };

  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.classList.remove("active");
    });
  });

});
