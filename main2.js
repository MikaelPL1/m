document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const checkbox = document.getElementById("accept-conditions");
    const submitButton = form.querySelector("button");
    const inputFields = form.querySelectorAll(".input-box input");
  
    // Function to update button state
    function updateButtonState() {
      if (checkbox.checked) {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = "rgb(43, 0, 255)"; // Original color
      } else {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "gray"; // Disabled color
      }
    }
  
    // Initial check
    updateButtonState();
  
    // Event listener for checkbox change
    checkbox.addEventListener("change", updateButtonState);
  
    // Form submit event listener
    form.addEventListener("submit", function (event) {
      let firstInvalidField = null;
  
      // Check for empty fields and specific validations
      inputFields.forEach((input, index) => {
        // Check all inputs except the first one (index 0)
        if (index === 0) return; // Skip the first input
  
        // Special validation for DNI/NIF (assumed to be the 4th input)
        if (index === 3) { // DNI/NIF input
          if (input.value.length !== 9) {
            input.style.boxShadow = "0 0 5px red"; // Add red box shadow for invalid length
            if (!firstInvalidField) {
              firstInvalidField = input; // Set the first invalid field
            }
          } else {
            input.style.boxShadow = ""; // Clear box shadow if valid
          }
        } else if (index === 4 || index === 5) { // Email and Confirm Email
          const emailValue = input.value;
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  
          if (!emailRegex.test(emailValue)) {
            input.style.boxShadow = "0 0 5px red"; // Add red box shadow for invalid email
            if (!firstInvalidField) {
              firstInvalidField = input; // Set the first invalid field
            }
          } else {
            input.style.boxShadow = ""; // Clear box shadow if valid
          }
  
          // Check if the confirmation email matches the first email
          if (index === 5 && emailValue !== inputFields[4].value) {
            input.style.boxShadow = "0 0 5px red"; // Add red box shadow if it doesn't match
            if (!firstInvalidField) {
              firstInvalidField = input; // Set the first invalid field
            }
          }
        } else if (index === 6) { // Phone number input
          const phoneValue = input.value;
          const phoneRegex = /^\d+$/; // Regex to check for numeric values only
  
          if (!phoneRegex.test(phoneValue)) {
            input.style.boxShadow = "0 0 5px red"; // Add red box shadow for invalid phone number
            if (!firstInvalidField) {
              firstInvalidField = input; // Set the first invalid field
            }
          } else {
            input.style.boxShadow = ""; // Clear box shadow if valid
          }
        } else {
          // Check for empty fields
          if (!input.value) {
            input.style.boxShadow = "0 0 5px red"; // Add red box shadow
            if (!firstInvalidField) {
              firstInvalidField = input; // Set the first empty field
            }
          } else {
            input.style.boxShadow = ""; // Clear box shadow if filled
          }
        }
      });
  
      // If there are empty or invalid fields, prevent submission and focus on the first one
      if (firstInvalidField) {
        event.preventDefault(); // Prevent form submission
        firstInvalidField.focus(); // Focus on the first invalid field
        firstInvalidField.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll to the invalid field
      }
    });
  });
  
  
  
  
  
  
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
      const form = document.querySelector(".form");
      const checkbox = document.getElementById("accept-conditions");
      const submitButton = form.querySelector("button");
      const inputFields = form.querySelectorAll(".input-box input");
    
      // Function to update button state
      function updateButtonState() {
        if (checkbox.checked) {
          submitButton.disabled = false;
          submitButton.style.backgroundColor = "rgb(43, 0, 255)"; // Original color
        } else {
          submitButton.disabled = true;
          submitButton.style.backgroundColor = "gray"; // Disabled color
        }
      }
    
      // Initial check
      updateButtonState();
    
      // Event listener for checkbox change
      checkbox.addEventListener("change", updateButtonState);
    
      // Form submit event listener
      form.addEventListener("submit", function (event) {
        let firstInvalidField = null;
    
        // Check for empty fields and specific validations
        inputFields.forEach((input, index) => {
          // Check all inputs except the first one (index 0)
          if (index === 0) return; // Skip the first input
    
          // Special validation for DNI/NIF (assumed to be the 4th input)
          if (index === 3) { // DNI/NIF input
            if (input.value.length !== 9) {
              input.style.boxShadow = "0 0 5px red"; // Add red box shadow for invalid length
              if (!firstInvalidField) {
                firstInvalidField = input; // Set the first invalid field
              }
            } else {
              input.style.boxShadow = ""; // Clear box shadow if valid
            }
          } else if (index === 4 || index === 5) { // Email and Confirm Email
            const emailValue = input.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    
            if (!emailRegex.test(emailValue)) {
              input.style.boxShadow = "0 0 5px red"; // Add red box shadow for invalid email
              if (!firstInvalidField) {
                firstInvalidField = input; // Set the first invalid field
              }
            } else {
              input.style.boxShadow = ""; // Clear box shadow if valid
            }
    
            // Check if the confirmation email matches the first email
            if (index === 5 && emailValue !== inputFields[4].value) {
              input.style.boxShadow = "0 0 5px red"; // Add red box shadow if it doesn't match
              if (!firstInvalidField) {
                firstInvalidField = input; // Set the first invalid field
              }
            }
          } else if (index === 6) { // Phone number input
            const phoneValue = input.value;
            const phoneRegex = /^\d+$/; // Regex to check for numeric values only
    
            if (!phoneRegex.test(phoneValue)) {
              input.style.boxShadow = "0 0 5px red"; // Add red box shadow for invalid phone number
              if (!firstInvalidField) {
                firstInvalidField = input; // Set the first invalid field
              }
            } else {
              input.style.boxShadow = ""; // Clear box shadow if valid
            }
          } else {
            // Check for empty fields
            if (!input.value) {
              input.style.boxShadow = "0 0 5px red"; // Add red box shadow
              if (!firstInvalidField) {
                firstInvalidField = input; // Set the first empty field
              }
            } else {
              input.style.boxShadow = ""; // Clear box shadow if filled
            }
          }
        });
    
        // If there are empty or invalid fields, prevent submission and focus on the first one
        if (firstInvalidField) {
          event.preventDefault(); // Prevent form submission
          firstInvalidField.focus(); // Focus on the first invalid field
          firstInvalidField.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll to the invalid field
        }
      });
    });



    document.addEventListener("DOMContentLoaded", function () {
      const urlParams = new URLSearchParams(window.location.search);
      const date = urlParams.get('date');
      const number = urlParams.get('number');
  
      // Update labels with received data
      if (date) {
          document.querySelector('.details label:nth-of-type(2)').textContent += ` ${date}`;
      } else {
          document.querySelector('.details label:nth-of-type(2)').textContent += ` No date selected`;
      }
  
      if (number) {
          document.querySelector('.details label:nth-of-type(3)').textContent += ` ${number}`;
      } else {
          document.querySelector('.details label:nth-of-type(3)').textContent += ` No number selected`;
      }
  });
  