document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("q8jA1T_Q8N19cTKbw");

  const form = document.getElementById("inquiryForm");

  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_qvezi7w",
      "template_zgmufr1",
      this
    ).then(
      function () {
        alert("Inquiry sent successfully. We will contact you shortly.");
        form.reset();
      },
      function (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send inquiry. Please try again.");
      }
    );
  });

});
