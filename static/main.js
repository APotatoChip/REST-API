const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const registerBtn = document.getElementById("register-btn");

registerBtn.addEventListener("click", function() {
    const email = emailInput.value;
    const password = emailInput.value;

    if (!email || !password) {
        alert('Missing data!');
        return;
    }

})