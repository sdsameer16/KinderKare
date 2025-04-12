let generatedOTP;

function sendOTP() {
    const email = document.getElementById("email").value;
    if (!email) {
        alert("Please enter a valid email address.");
        return;
    }

    generatedOTP = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP

    Email.send({
        SecureToken: "a42fc8fe-df9d-4e47-8860-9376f29cd28c",  // Replace with your actual SMTPJS token
        To: email,  // FIXED: Use the actual input value
        From: "your_verified_email@example.com",  // Must be an SMTP-configured email
        Subject: "Your OTP Code",
        Body: `Your OTP code is ${generatedOTP}. It is valid for 5 minutes.`
    }).then(message => {
        if (message === "OK") {
            alert("OTP sent successfully. Check your email.");
        } else {
            alert("Failed to send OTP. Check SMTP settings.");
        }
    });
}

function verifyOTP() {
    const userOTP = document.getElementById("otp").value;
    const message = document.getElementById("message");
    const loginLink = document.getElementById("loginLink");

    if (userOTP == generatedOTP) {
        message.innerText = "OTP verified successfully!";
        message.style.color = "green";
        loginLink.style.display = "block"; // Show the login button after successful verification
    } else {
        message.innerText = "Invalid OTP. Please try again.";
        message.style.color = "red";
        loginLink.style.display = "none";
    }
}
