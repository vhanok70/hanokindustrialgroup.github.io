/* =========================================================
   HANOK INDUSTRIAL GROUP – MAIN JS
   CLEAN & STABLE MOBILE VERSION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ========= MOBILE MENU ========= */
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      body.classList.toggle("menu-open");
    });

    /* Close menu on link click */
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        body.classList.remove("menu-open");
        document.querySelector(".has-submenu")?.classList.remove("open");
      });
    });
  }

  /* ========= SUBMENU (COMMODITIES) ========= */
  const submenuToggle = document.querySelector(".submenu-toggle");
  const submenuItem = document.querySelector(".has-submenu");

  if (submenuToggle && submenuItem) {
    submenuToggle.addEventListener("click", () => {
      submenuItem.classList.toggle("open");
    });
  }

  /* ========= CLOSE MENU ON SCROLL ========= */
  window.addEventListener("scroll", () => {
    if (navLinks?.classList.contains("active")) {
      navLinks.classList.remove("active");
      body.classList.remove("menu-open");
      submenuItem?.classList.remove("open");
    }
  });

});
