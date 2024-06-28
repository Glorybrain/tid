// Email Validation
const emailInput = document.getElementById('email');
const invalidEmailMessage = document.getElementById('invalidEmail');

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email.match(emailPattern);
    }

    emailInput.addEventListener('blur', function() {
        const email = emailInput.value;
        
        if (validateEmail(email)) {
            console.log("Email is valid!");
            emailInput.style.borderColor = 'grey';
            invalidEmailMessage.style.display = 'none'; // Show the message
        } else {
            console.log("Email is not valid!");
            emailInput.style.borderColor = '#EB5454';
            invalidEmailMessage.style.display = 'block'; // Show the message
        }
    });

    // Show & Hide Password for Login
    const togglePasswordBtn = document.getElementById('eyeicon');
    const toggleBtn = document.getElementById('icon');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('password2');


    togglePasswordBtn.addEventListener('click', function() {
        if(passwordInput.type == 'password') {
            passwordInput.type = 'text';
            togglePasswordBtn.innerHTML = '<i class="ri-eye-line"></i>';
        } else {
            passwordInput.type = 'password';
            togglePasswordBtn.innerHTML = '<i class="ri-eye-off-fill"></i>';
        }
    });

    toggleBtn.addEventListener('click', function() {
        if(confirmInput.type == 'password') {
            confirmInput.type = 'text';
            toggleBtn.innerHTML =  '<i class="ri-eye-line"></i>';   
        } else {
            confirmInput.type = 'password';
            toggleBtn.innerHTML =  '<i class="ri-eye-off-fill"></i>';   
        }
    });
    
    // Check if passwords are the same
    const button = getElementById('button');
    function checkPasswords() {
        const password1 = document.getElementById('password').value;
        const password2 = document.getElementById('password2').value;

        if (password1 === password2) {
            alert('Passwords match!');
        } else {
            alert('Passwords do not match. Please re-enter.');
        }
    }
