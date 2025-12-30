// Mobile nav
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Smooth scroll close nav on click (mobile)
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
  }
});

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Modals
const modalTriggers = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseElements = document.querySelectorAll("[data-modal-close]");

modalTriggers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-modal-target");
    const modal = document.querySelector(target);
    if (modal) {
      modal.setAttribute("aria-hidden", "false");
    }
  });
});

modalCloseElements.forEach((el) => {
  el.addEventListener("click", () => {
    modals.forEach((m) => m.setAttribute("aria-hidden", "true"));
  });
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modals.forEach((m) => m.setAttribute("aria-hidden", "true"));
  }
});

// Contact buttons auto-select product
const contactOpenButtons = document.querySelectorAll("[data-contact-open]");
const productSelect = document.getElementById("product");
const contactSection = document.getElementById("contact");

contactOpenButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const product = btn.getAttribute("data-product");
    if (product && productSelect) {
      productSelect.value = product;
    }
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form submit (frontend + backend POST)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    formStatus.textContent = "";
    formStatus.className = "form-status";

    const formData = new FormData(contactForm);
    const payload = Object.fromEntries(formData.entries());

    if (!payload.name || !payload.company || !payload.email || !payload.product || !payload.message) {
      formStatus.textContent = "Please fill in all required fields.";
      formStatus.classList.add("error");
      return;
    }

    formStatus.textContent = "Sending...";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send");
      }

      formStatus.textContent = "Thank you. Your inquiry has been submitted.";
      formStatus.classList.add("success");
      contactForm.reset();
    } catch (err) {
      formStatus.textContent = "Something went wrong. Please try again.";
      formStatus.classList.add("error");
    }
  });
}
