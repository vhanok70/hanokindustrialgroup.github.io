document.addEventListener("DOMContentLoaded", function () {

  // 🔹 Initialize EmailJS
  emailjs.init("q8jA1T_Q8N19cTKbw");   // <-- your public key

  // 🔹 Elements
  const form = document.getElementById("inquiryForm");
  const successBox = document.getElementById("formSuccess");
  const submitBtn = document.getElementById("submitBtn");

  // 🔹 Safety check
  if (!form || !submitBtn) {
    console.error("Form or Submit button not found");
    return;
  }

  // 🔹 Submit handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // START loading
    submitBtn.classList.add("loading");

    // 🔹 Send email
    emailjs.sendForm(
      "service_qvezi7w",        // <-- your service ID
      "template_zgmufr1",       // <-- your template ID
      this
    ).then(
      function () {
        // STOP loading
        submitBtn.classList.remove("loading");

        // Reset form
        form.reset();

        // Show success message
        successBox.style.display = "block";
      },
      function (error) {
        // STOP loading
        submitBtn.classList.remove("loading");

        alert("Failed to send inquiry. Please try again.");
        console.error("EmailJS Error:", error);
      }
    );
  });

});
