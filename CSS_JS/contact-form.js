document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function (event) {
    // Prevent submission if form is incorrect or invalid
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
    // Confirmation
      const confirmed = confirm('Are you sure you want to submit the form?');
    if (!confirmed) {
    // Cancels
      event.preventDefault();
      }
    }
    // Add Bootstrap validation
    form.classList.add('was-validated');
  }, false);
});