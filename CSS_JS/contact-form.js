/*
*CA 1
*@Vinícius Araújo
*09/11/24
*/

document.addEventListener('DOMContentLoaded', function() {
  // Select the form element
  const form = document.querySelector('.contact-form');

  if (form) {
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
      // Bootstrap validation
      form.classList.add('was-validated');
    }, false);
  }
});