function openPopup() {
    document.getElementById('authPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('authPopup').style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    // Add login logic here (e.g., API call)
    alert("Login successful!");
    closePopup();
}

function redirectToSignup() {
    window.location.href = "signup.html"; // Redirect to the signup page
}

function handleSignUp(event) {
    event.preventDefault();
    const captchaInput = document.getElementById('captcha').value;
    
    if (captchaInput !== '8') {
        alert("Captcha is incorrect!");
        return;
    }

    // Add signup logic here (e.g., API call)
    alert("Account created successfully!");
    // Optionally redirect to a success page or dashboard
}