document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qvezi7w",
        "template_zgmufr1",
        this
      )
      .then(
        function () {
          alert("Inquiry sent successfully. We will contact you shortly.");
          form.reset();
        },
        function (error) {
          alert("Failed to send inquiry. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  });
});
