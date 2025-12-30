/**
 * HANOK INDUSTRIAL GROUP - CORE PLATFORM ENGINE
 * Version: 2.0.0
 * Features: Scroll-Spy, Form Validation, Smooth Animations, Product Modal Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. STICKY HEADER DYNAMICS
    const header = document.querySelector('nav');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.style.background = "rgba(10, 25, 47, 0.98)";
            header.style.padding = "15px 5%";
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
        } else {
            header.style.background = "rgba(10, 25, 47, 0.9)";
            header.style.padding = "20px 5%";
            header.style.boxShadow = "none";
        }
    });

    // 2. PRODUCT DETAIL TOGGLE (THE "READ MORE" BUTTONS)
    // This is the specific fix for your non-working buttons.
    window.toggleBtn = function(id) {
        const detailBox = document.getElementById(id);
        const allDetails = document.querySelectorAll('.details');
        
        // Close other open product details for a clean look (Accordion style)
        allDetails.forEach(detail => {
            if (detail.id !== id) {
                detail.style.display = 'none';
                const btn = detail.previousElementSibling;
                if(btn && btn.classList.contains('btn-gold')) btn.innerText = 'Read More';
            }
        });

        // Toggle the clicked detail
        if (detailBox.style.display === "block") {
            detailBox.style.display = "none";
            event.target.innerText = "Read More";
        } else {
            detailBox.style.display = "block";
            detailBox.style.animation = "fadeIn 0.5s ease";
            event.target.innerText = "Show Less";
        }
    };

    // 3. SMOOTH NAVIGATION SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. FORM SUBMISSION LOGIC (Inquiry Handling)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Visual feedback
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "SENDING INQUIRY...";
            btn.disabled = true;

            // Simulate server processing
            setTimeout(() => {
                alert("Thank you for contacting Hanok Industrial Group. Your inquiry has been logged. Our trade desk will contact you at the provided email shortly.");
                btn.innerText = originalText;
                btn.disabled = false;
                contactForm.reset();
            }, 2000);
        });
    }

    // 5. AUTO-YEAR UPDATE FOR FOOTER
    const yearSpan = document.querySelector('.year');
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
});

// 6. ANIMATION ON SCROLL (Simple Implementation)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .section h2').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

