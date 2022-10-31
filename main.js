const password = document.getElementById("user_password");
const cpassword = document.getElementById("user_cpassword");
const submit = document.querySelector("button");

submit.addEventListener("click", () => {
    if(password.value !== cpassword.value) {
        password.setCustomValidity("*Passwords do not match");
        cpassword.setCustomValidity("*Passwords do not match");
    }
    else {
        password.setCustomValidity("");
        cpassword.setCustomValidity("");
    }
});

