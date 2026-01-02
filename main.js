/* =====================================
   HANOK INDUSTRIAL GROUP - MAIN JS
   CLEAN • STABLE • MOBILE READY
===================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     MOBILE HAMBURGER MENU
  =============================== */
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    // Close menu when any link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");
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
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  animatedItems.forEach(el => observer.observe(el));

});
/* =========================
   HIDE NAVBAR ON SCROLL
========================= */

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 80) {
    // scrolling down
    navbar.classList.add("hide");
  } else {
    // scrolling up
    navbar.classList.remove("hide");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.getElementById("mobileNav");

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });

  // Close menu when any link is clicked
  document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
});
