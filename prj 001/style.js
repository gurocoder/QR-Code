document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Dummy validation, replace with your own validation logic
    if (username === "user" && password === "password") {
        // Login successful, redirect or do something else
        alert("Login successful!");
    } else {
        errorMessage.innerHTML = "Invalid username or password";
    }
});
