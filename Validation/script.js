function validateForm() {

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phone = document.getElementById("phone").value;

    // Check required fields
    if (username == "" || email == "" || password == "" ||
        confirmPassword == "" || phone == "") {

        alert("All fields are required");
        return false;
    }

    // Validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Enter a valid email address");
        return false;
    }

    // Check password length
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    // Check password match
    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // Validate phone number
    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 10 digits");
        return false;
    }

    alert("Registration successful");

    return true;
}