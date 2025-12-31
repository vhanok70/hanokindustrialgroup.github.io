/* ==================================
   HANOK INDUSTRIAL GROUP – MAIN JS
   STABLE PRODUCTION VERSION
================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===== MOBILE HAMBURGER MENU ===== */
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu after click
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  /* ===== SIMPLE FADE ANIMATION ===== */
  const fadeItems = document.querySelectorAll("[data-animate]");
  fadeItems.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          entry.target.style.transition = "all 0.8s ease";
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeItems.forEach(el => observer.observe(el));

});
// Commodities submenu toggle
const submenuToggle = document.querySelector('.submenu-toggle');
const submenu = document.querySelector('.submenu');

if (submenuToggle && submenu) {
  submenuToggle.addEventListener('click', () => {
    submenu.classList.toggle('active');
  });
}
