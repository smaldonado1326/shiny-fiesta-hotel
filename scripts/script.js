$(document).ready(function() {
    // Function to show/hide password
    $('#showPassword').on('change', function() {
        var passwordField = $('#password');
        if ($(this).is(':checked')) {
            passwordField.attr('type', 'text');
        } else {
            passwordField.attr('type', 'password');
        }
    });

    $('#signupForm').on('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Perform form validation
        var form = this;
        form.classList.add('was-validated'); // Trigger form validation feedback

        if (form.checkValidity()) {
            // If form is valid, handle form submission logic here
    
            alert('We got your Info!');

            // Reset the form after successful submission
            form.reset();

            form.classList.remove('was-validated');
        }
    });
});
