document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Clear previous errors
    clearErrors();
  
    // Validate form
    const isValid = validateForm();
  
    if (isValid) {
      alert('Form submitted successfully!');
      // Optionally, you can submit the form here
      // this.submit();
    }
  });
  
  function clearErrors() {
    document.getElementById('fullNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
  }
  
  function validateForm() {
    let isValid = true;
  
    // Validate Full Name
    const fullName = document.getElementById('fullName').value;
    if (fullName.length < 5) {
      document.getElementById('fullNameError').innerText = 'Name must not be less than 5 characters';
      isValid = false;
    }
  
    // Validate Email
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
      document.getElementById('emailError').innerText = 'Enter a valid email';
      isValid = false;
    }
  
    // Validate Phone Number
    const phone = document.getElementById('phone').value;
    if (phone.length !== 10 || phone === '123456789') {
      document.getElementById('phoneError').innerText = 'Enter a valid 10-digit phone number';
      isValid = false;
    }
  
    // Validate Password
    const password = document.getElementById('password').value;
    const fullNameLower = fullName.toLowerCase();
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullNameLower) {
      document.getElementById('passwordError').innerText = 'Password cannot be "password" or less than 8 characters';
      isValid = false;
    }
  
    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
      isValid = false;
    }
  
    return isValid;
  }
  