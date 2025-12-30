document.addEventListener('DOMContentLoaded', () => {

    // 1. Explore Button Smooth Scroll
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. Read More Buttons Functionality
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);

            if (targetPane.style.display === "block") {
                targetPane.style.display = "none";
                button.innerText = "Read More +";
            } else {
                targetPane.style.display = "block";
                button.innerText = "Read Less -";
            }
        });
    });

    // 3. Navbar Sticky Animation on Scroll
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.style.padding = "10px 8%";
            nav.style.background = "#0a192f";
        } else {
            nav.style.padding = "20px 8%";
            nav.style.background = "rgba(10, 25, 47, 0.95)";
        }
    });
});

