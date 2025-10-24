document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior:"smooth"});
});


const signUpBtn = document.getElementById("signUpBtn");
signUpBtn.addEventListener("click", () => {
    const fullName = document.getElementById("fullName").value.trim();
    const nameError = document.getElementById("nameError");
    const phone = document.getElementById("number").value.trim();
    const phoneError = document.getElementById("numberError");
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");

    if (email || fullName || phone === "") {
        nameError.textContent = "Please fill in your full name.";
        phoneError.textContent = "Please fill in your phone number.";
        emailError.textContent = "Please enter your email address.";
        return;
    }else if (!email.includes("@gmail") || !email.includes(".com")) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    }else {
        emailError.textContent = ""; // Clear any previous error
        emailError.style.color = "green"; // Change text color to green
    }
    emailError.textContent = `Thank you for signing up with ${email}!`;
    document.getElementById("email").value = ""; // Clear the input field
});