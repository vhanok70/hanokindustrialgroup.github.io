/**
 * HANOK INDUSTRIAL GROUP - CORE ENGINE
 * Version: 1.0.0
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
    const navbar = document.querySelector('#navbar');
    const heroSection = document.querySelector('#home');

    window.addEventListener('scroll', () => {
        // Change navbar background after leaving the hero section
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // 3. PRODUCT DETAIL TOGGLE (READ MORE)
    // We use a robust function to handle multiple product cards without repeating code
    window.showMore = function(id) {
        const detailPane = document.getElementById(id);
        const allPanes = document.querySelectorAll('.details-pane');
        const clickedButton = event.currentTarget;

        // Close other panes if they are open (Accordion style)
        allPanes.forEach(pane => {
            if (pane.id !== id) {
                pane.style.display = 'none';
            }
        });

        // Toggle the selected pane
        if (detailPane.style.display === 'block') {
            detailPane.style.display = 'none';
            clickedButton.textContent = 'Read More +';
        } else {
            detailPane.style.display = 'block';
            clickedButton.textContent = 'Show Less -';
            
            // Auto-scroll to the details for better UX on mobile
            detailPane.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    // 4. FORM SUBMISSION HANDLER
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Visual feedback for the user
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'PROCESSING INQUIRY...';
            submitBtn.disabled = true;

            // Collect Form Data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // In a production environment, this points to your Node.js endpoint
                // const response = await fetch('/api/contact', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(data)
                // });

                // FOR NOW: Simulating success for the UI
                setTimeout(() => {
                    alert(`Thank you, ${data.name || 'Trader'}. Your inquiry regarding ${data.product || 'our commodities'} has been sent to Hanok Industrial Group. We will contact you at ${data.email} shortly.`);
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1500);

            } catch (error) {
                console.error('Submission Error:', error);
                alert('Connection error. Please call +91 770 2310 750 directly.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // 5. SMOOTH SCROLLING FOR NAV LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Offset for the sticky navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. DYNAMIC COPYRIGHT YEAR
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const year = new Date().getFullYear();
        footerYear.innerHTML = `&copy; ${year} Hanok Industrial Group. All Rights Reserved. | Global Trading Desk`;
    }
});

