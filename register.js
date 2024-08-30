document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    let isValid = true;
    if (!validateUsername()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateConfirmPassword()) isValid = false;
    if (!validateDOB()) isValid = false;
    if (!validateGender()) isValid = false;
    if (!validateTerms()) isValid = false;

    if (isValid) {
      form.submit();
    }
  });

  function clearErrors() {
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
    document.getElementById("dobError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("termsError").innerHTML = "";
  }

  function validateUsername() {
    const username = document.getElementById("username").value.trim();
    if (username === "") {
      document.getElementById("usernameError").innerHTML = "Username is required.";
      return false;
    }
    return true;
  }

  function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").innerHTML = "Email is required.";
      return false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").innerHTML = "Invalid email format.";
      return false;
    }
    return true;
  }

  function validatePassword() {
    const password = document.getElementById("password").value.trim();
    if (password === "") {
      document.getElementById("passwordError").innerHTML = "Password is required.";
      return false;
    }
    return true;
  }

  function validateConfirmPassword() {
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    if (confirmPassword === "") {
      document.getElementById("confirmPasswordError").innerHTML = "Confirm Password is required.";
      return false;
    } else if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
      return false;
    }
    return true;
  }

  function validateDOB() {
    const dob = document.getElementById("dob").value.trim();
    if (dob === "") {
      document.getElementById("dobError").innerHTML = "Date of Birth is required.";
      return false;
    } else {
      const dobDate = new Date(dob);
      const today = new Date();
      if (dobDate >= today) {
        document.getElementById("dobError").innerHTML = "Date of Birth must be in the past.";
        return false;
      }
    }
    return true;
  }

  function validateGender() {
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;
    if (!male && !female) {
      document.getElementById("genderError").innerHTML = "Gender is required.";
      return false;
    }
    return true;
  }

  function validateTerms() {
    const terms = document.getElementById("terms").checked;
    if (!terms) {
      document.getElementById("termsError").innerHTML = "You must accept the terms & conditions.";
      return false;
    }
    return true;
  }
});
