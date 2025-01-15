let signupBtn = document.getElementById("signup")
let userInputName = document.getElementById("username");
let userInputEmail = document.getElementById("email");
let userInputPswd = document.getElementById("password");
let nameError = document.getElementById("nameError")
let emailError = document.getElementById("emailError")
let pswdError = document.getElementById("pswdError")

signupBtn.addEventListener("click", (k) => {
    k.preventDefault()
    let regName = /^[a-zA-Z]{3,}$/
    let regEmail = /^[a-zA-Z0-9.%+-=]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
    let regPswd = /^[a-zA-Z0-9@!#%$%^&*]{8,15}$/

    // if (userInputName.value != "" && userInputEmail.value != "" && userInputPswd.value != "") {
    let name = userInputName.value;
    let email = userInputEmail.value;
    let pswd = userInputPswd.value;
    let isValidate = true;
    if (!regName.test(name)) {
        nameError.textContent = "pls enter atleast 3char long name which consists only smalls and caps"
        isValidate = false
    } else {
        nameError.textContent = ""
    }

    if (!regEmail.test(email)) {
        emailError.textContent = "pls enter valid email "
        isValidate = false
    } else {
        emailError.textContent = ""
    }

    if (!regPswd.test(pswd)) {
        pswdError.textContent = "pls enter atleast 8chars longname which consists small & caps& symbols and numbers"
        isValidate = false
    } else {
        pswdError.textContent = ""
    }
    if (isValidate) {
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("pswd", pswd)
        alert("sign up done!!!!")
        window.open("login.html")
    }

}

)