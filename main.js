/**
 * HANOK INDUSTRIAL GROUP - CORE PLATFORM ENGINE
 * Version: 2.0.0
 * Handles: Scroll Effects, Product Interactions, and Form Processing
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INITIALIZE AOS (Animation on Scroll)
    // This creates the professional "fade-in" as the user scrolls down.
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }

    // 2. STICKY NAVIGATION LOGIC
    // Changes navbar background after leaving the hero section for better readability
    const navbar = document.querySelector('#navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // 3. PRODUCT DETAIL TOGGLE (THE "READ MORE" BUTTONS)
    // Fixed logic to handle multiple product cards and change button text
    window.showMore = function(id) {
        const detailPane = document.getElementById(id);
        const allPanes = document.querySelectorAll('.details-pane');
        const clickedButton = event.currentTarget;

        // Close other panes if they are open (Accordion style)
        allPanes.forEach(pane => {
            if (pane.id !== id) {
                pane.style.display = 'none';
                // Reset other buttons text if needed
                const otherBtn = pane.parentElement.querySelector('.read-more-btn');
                if(otherBtn) otherBtn.innerText = "Read More +";
            }
        });

        // Toggle the selected pane
        if (detailPane.style.display === 'block') {
            detailPane.style.display = 'none';
            clickedButton.innerText = 'Read More +';
        } else {
            detailPane.style.display = 'block';
            clickedButton.innerText = 'Read Less -';
            
            // Smoothly scroll into view if on mobile
            detailPane.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    // 4. SMOOTH SCROLLING FOR NAVIGATION LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80; // Space for the sticky navbar
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. FORM SUBMISSION HANDLER
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Visual feedback for the buyer
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'PROCESSING INQUIRY...';
            submitBtn.disabled = true;

            // Simulate form processing (replace with your backend API later)
            setTimeout(() => {
                alert("Thank you for contacting Hanok Industrial Group. Your inquiry regarding metal commodities has been logged. Our trade desk (+91 770 2310 750) will contact you shortly.");
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 2000);
        });
    }
});

