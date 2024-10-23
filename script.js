const form = document.getElementById('sign-up');
const container=document.getElementById("form-container");

const usernameContainer = document.getElementById('div1');
const usernameInput = document.getElementById('username');
const usernameError = usernameContainer.querySelector(".error");


const emailContainer = document.getElementById('div2');
const emailInput = document.getElementById('email');
const emailError = emailContainer.querySelector(".error");


const passwordContainer = document.getElementById('div3');
const passwordInput = document.getElementById('password');
const passwordError = passwordContainer.querySelector(".error");


const confirmPasswordContainer = document.getElementById('div4');
const confirmInput = document.getElementById("confim");
const confirmError = confirmPasswordContainer.querySelector(".error");

function myfunction(event) {
    event.preventDefault();
    if (usernameInput.value.length === 0) {
        usernameError.innerText = "Username is required";
    } else if (usernameInput.value.toLowerCase() === "username") {
        usernameError.innerText = "Username can't be taken";
    } else if(!/^[a-zA-Z_]+$/.test(usernameInput.value)) {
        usernameError.innerText="Username must constain one character from A-Z,a-z and _.";
    }else{usernameError.innerText = ""; }
    if (emailInput.value.length === 0) {
        emailError.innerText = "Email is required";
    } else {
        emailError.innerText = ""; 
    }
   let submitted=false;
    const pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (passwordInput.value.length <8 && passwordInput.value.lenth>8) {
        passwordError.innerText = "Password must be of 8 characters";
    } else if(!pattern.test(passwordInput.value)){
        passwordError.innerText="Password must contain at least one uppercase,lowercase,number and symbol";
    }
    else {
        passwordError.innerText = ""; 
    }
    if (confirmInput.value !== passwordInput.value) {
        confirmError.innerText = "Passwords do not match";
    } else {
        confirmError.innerText = ""; 
    }
    // if (usernameError.innerText === "" && emailError.innerText === "" && passwordError.innerText === "" && confirmError.innerText === "") {
    //     console.log("submitted");
    //     console.log(
    //         "Username:", usernameInput.value,
    //         "\nEmail:", emailInput.value,
    //         "\nPassword:", passwordInput.value,
    //         "\nConfirm Password:", confirmInput.value
    //     )
    // }
    if(submitted){
        container.style.height="auto";
        container.style.maxHeight="400px";
        console.log("Submitted!");
    }
}

form.addEventListener('submit', myfunction);

