/* =========================================================
   HANOK INDUSTRIAL GROUP – MAIN JS
   CLEAN & STABLE MOBILE VERSION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     MOBILE MENU TOGGLE
  =============================== */
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  /* ===============================
     CLOSE MENU ON LINK CLICK
  =============================== */
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  /* ===============================
     CLOSE MENU ON SCROLL
  =============================== */
  window.addEventListener("scroll", () => {
    navLinks.classList.remove("active");
  });

  /* ===============================
     COMMODITIES SUBMENU TOGGLE
  =============================== */
  const submenuToggle = document.querySelector(".submenu-toggle");
  const submenuParent = document.querySelector(".has-submenu");

  if (submenuToggle && submenuParent) {
    submenuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      submenuParent.classList.toggle("open");
    });
  }

});
