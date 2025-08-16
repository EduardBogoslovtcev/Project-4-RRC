document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");

    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Name validation
        if (nameInput.value.trim() === "") {
            nameError.style.display = "inline";
            nameInput.focus();
            nameInput.select();
            valid = false;
        } else {
            nameError.style.display = "none";
        }

        // Phone validation (10-digit only)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            if (valid) {
                phoneInput.focus();
                phoneInput.select();
            }
            phoneError.style.display = "inline";
            valid = false;
        } else {
            phoneError.style.display = "none";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            if (valid) {
                emailInput.focus();
                emailInput.select();
            }
            emailError.style.display = "inline";
            valid = false;
        } else {
            emailError.style.display = "none";
        }

        // Prevent form submission if validation fails
        if (!valid) {
            event.preventDefault();
        }
    });
});
