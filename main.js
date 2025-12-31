/* =========================================================
   HANOK INDUSTRIAL GROUP – MAIN JS
   CLEAN & STABLE MOBILE VERSION
========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const submenuToggle = document.querySelector(".submenu-toggle");
  const hasSubmenu = document.querySelector(".has-submenu");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  submenuToggle.addEventListener("click", () => {
    hasSubmenu.classList.toggle("open");
  });

  // Close menu on scroll
  window.addEventListener("scroll", () => {
    navLinks.classList.remove("active");
    hasSubmenu.classList.remove("open");
  });

}); 

