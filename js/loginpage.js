const userEmail = document.getElementById('emailInput')
const userPassword = document.getElementById('passwordInput')
const revealPassword = document.getElementById('seePassword')
const revealPasswordIcon = document.getElementById('seePasswordIcon')
const form = document.getElementById("loginForm");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneNo");
const passwordInput = document.getElementById("passwordInput");

const usernameError = document.getElementById("userErrMssgP");
const emailError = document.getElementById("mailErrMssgP");
const phoneError = document.getElementById("numErrMssgP");
const passwordError = document.getElementById("passErrMssgP");

const loginButton = document.getElementById("loginB");

const successWrapper = document.getElementById("successWrapper");
const successWrapper2 = document.getElementById("successWrapper2");
const successMessage = document.getElementById("successMssg");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const usernamePattern  = /^[A-Za-z].*$/;
const phoneNoPattern = /^(?:\+234\d{10}|0\d{10})$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

let isPasswordVisible = false;

let typedName = usernameInput.value.trim();
let typedMail = ''
let typedPhoneNo = ''
let typedPassword = ''

let isValid = true;

revealPassword.addEventListener('click', pCallback)

function pCallback (e) {
    e.preventDefault();

    isPasswordVisible = !isPasswordVisible;
    
   userPassword.type = isPasswordVisible ? 'text' : 'password';
    revealPasswordIcon.src = isPasswordVisible
        ? '/assets/openPassword.svg'
        : '/assets/lockedPassword.svg';
} 

function validateUsername() {
    const value = usernameInput.value.trim();

    if (!usernamePattern.test(value)) {
        usernameError.textContent = "Username must start with a letter";
        return false;
    }

    usernameError.textContent = "";
    return true;
}

function validateEmail() {
    const value = emailInput.value.trim();

    if (!emailPattern.test(value)) {
        emailError.textContent = "Invalid email address";
        return false;
    }

    emailError.textContent = "";
    return true;
}

function validatePhone() {
    const value = phoneInput.value.trim();

    if (!phoneNoPattern.test(value)) {
        phoneError.textContent = "Enter valid phone number";
        return false;
    }

    phoneError.textContent = "";
    return true;
}

function validatePassword() {
    const value = passwordInput.value.trim();

    if (!passwordPattern.test(value)) {
        passwordError.textContent = "Password must have uppercase, lowercase, number (8+ chars)";
        return false;
    }

    passwordError.textContent = "";
    return true;
}

usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
passwordInput.addEventListener('input', validatePassword);

form.addEventListener ('submit', handleLogin)
successWrapper.addEventListener('click', closeModal)

function closeModal(e) {
    console.log('modal closed')
    successWrapper.style.display = 'none'
}

function handleLogin (e) {
    e.preventDefault();

    const isValid =
        validateUsername() &&
        validateEmail() &&
        validatePhone() &&
        validatePassword();

    if (!isValid) return;

    console.log('success')
    successWrapper.style.display = 'flex'

    usernameInput.value='';
    emailInput.value = ''
    phoneInput.value=''
    passwordInput.value=''
}


