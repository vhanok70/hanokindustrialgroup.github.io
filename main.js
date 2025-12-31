/* =========================================
   HANOK INDUSTRIAL GROUP - MAIN JS
   CLEAN • STABLE • MOBILE READY
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     MOBILE HAMBURGER MENU
  =============================== */
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when link clicked
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  /* ===============================
     COMMODITIES SUBMENU (MOBILE)
  =============================== */
  const submenuToggle = document.querySelector(".submenu-toggle");
  const submenuParent = document.querySelector(".has-submenu");

  if (submenuToggle && submenuParent) {
    submenuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      submenuParent.classList.toggle("open");
    });
  }

  /* ===============================
     FADE-IN SCROLL ANIMATION
  =============================== */
  const animatedItems = document.querySelectorAll("[data-animate]");

  animatedItems.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "all 0.8s ease";
      }
    });
  }, { threshold: 0.2 });

  animatedItems.forEach(el => observer.observe(el));

  /* ===============================
     FIX BODY SCROLL WHEN MENU OPEN
  =============================== */
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      document.body.classList.toggle("menu-open");
    });
  }

});
