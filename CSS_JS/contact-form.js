/*
*CA 1
*@Vinícius Araújo
*09/11/24
*/

document.addEventListener('DOMContentLoaded', function() {
  // Select the form element
  const form = document.querySelector('.contact-form');

  // Ensure the form exists before attaching event listeners
  if (form) {
    // Add an event listener to the form's 'submit' event
    form.addEventListener('submit', function (event) {
      // Check if the form is valid
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // Ask for confirmation to submit the form
        const confirmed = confirm('Would you like to continue with submitting the form?');
        if (!confirmed) {
          event.preventDefault();
        }
      }
      // Add Bootstrap's validation style class
      form.classList.add('was-validated');
    }, false);
  }
});