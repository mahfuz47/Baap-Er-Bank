document.getElementById("login-submit").addEventListener("click", function() {
    // get user email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // get user pass
    const passField = document.getElementById("user-password");

    const userPassword = passField.value;
    // check email and password
    if (userEmail == "sontan@gmail.com" && userPassword == "secret") {
        window.location.href = "banking.html";
    } else {
        alert("please submit email and pass given below");
    }
});