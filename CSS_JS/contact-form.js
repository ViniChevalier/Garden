/*
*CA 1
*@Vinícius Araújo
*09/11/24
*/

function submitForm() {

  // Select the element
  const form = document.querySelector('.contact-form');

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
      // Add Bootstrap's
      form.classList.add('was-validated');
    }, false);
}