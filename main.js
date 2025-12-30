/* =========================================================
   7. MOBILE HAMBURGER MENU ENGINE
========================================================= */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Close menu when clicking a link (mobile UX)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
}

/* =========================================================
   8. SMART NAVBAR HIDE / REVEAL (ENTERPRISE UX)
========================================================= */
let lastScrollY = window.scrollY;
const navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (!navBar) return;

    if (window.scrollY > lastScrollY && window.scrollY > 200) {
        navBar.style.transform = 'translateY(-100%)';
    } else {
        navBar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

/* =========================================================
   9. INTERSECTION OBSERVER (CUSTOM ANIMATION ENGINE)
========================================================= */
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    },
    { threshold: 0.15 }
);

animatedElements.forEach(el => observer.observe(el));

/* =========================================================
   10. PRODUCT CARD INTELLIGENCE (HOVER + FOCUS)
========================================================= */
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('active-card');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('active-card');
    });
});

/* =========================================================
   11. INQUIRY FORM VALIDATION (BUSINESS RULES)
========================================================= */
function validateInquiry(data) {
    if (!data.name || data.name.length < 2) {
        return 'Please enter a valid name.';
    }
    if (!data.email || !data.email.includes('@')) {
        return 'Please enter a valid corporate email.';
    }
    if (!data.product) {
        return 'Please select a product.';
    }
    if (!data.message || data.message.length < 10) {
        return 'Please enter inquiry details (quantity, port, target price).';
    }
    return null;
}

/* =========================================================
   12. SCROLL PROGRESS INDICATOR (PRO LOOK)
========================================================= */
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '3px';
progressBar.style.background = '#D4AF37';
progressBar.style.zIndex = '9999';
progressBar.style.width = '0%';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

/* =========================================================
   13. UTILITY HELPERS (FUTURE SCALE)
========================================================= */
const HanokUtils = {
    formatMT: (value) => `${value} MT`,
    scrollToTop: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    isMobile: () => window.innerWidth <= 768
};

// Example future usage:
// HanokUtils.scrollToTop();
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});
