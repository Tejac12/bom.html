let loginBtn = document.getElementById("login")
let loginName = document.getElementById("username");
let loginPswd = document.getElementById("password");

loginBtn.addEventListener("click", () => {
    let loginname = loginName.value
    let loginPs = loginPswd.value
    let nameStorage = localStorage.getItem("name")
    let PsStorage = localStorage.getItem("pswd")
    if (loginname == nameStorage && loginPs == PsStorage) {
        alert("login successfull")
        window.location.href = "home.html"
    } else {
        alert("invalid credentials!")
    }
})