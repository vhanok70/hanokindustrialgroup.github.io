document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("q8jA1T_Q8N19cTKbw");

  const form = document.getElementById("inquiryForm");
  const successBox = document.getElementById("formSuccess");

  if (!form) {
    console.error("Form not found");
    return;
  }

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
          form.reset();
          successBox.style.display = "block"; // ✅ SHOW SUCCESS
        },
        function (error) {
          alert("Failed to send inquiry. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  });
});
