const validate = () => {
    let firstName = document.getElementById("firstName");
    let firstNameError = document.getElementById("FnameErr");
     let lastName=document.getElementById("lastName")
    let lastNameError=document.getElementById("lnameErr")
    let email =document.getElementById("email")
    let emailError=document.getElementById("emailError")
    if (firstName.value === "") {
      firstName.style.border = "1px solid red";
      firstNameError.innerHTML = "Please enter your first name.";
      firstNameError.style = {
        color: "red",
        fontSize: "11px",
        fontFamily: "Arial, Helvetica, sans-serif"
      };
      firstName.focus();
      return false;
    } else if (firstName.value.length < 3) {
      firstName.style.border = "1px solid red";
      firstNameError.innerHTML = "Your first name must be at least 3 letters.";
      firstNameError.style = {
        color: "red",
        fontSize: "11px",
        fontFamily: "Arial, Helvetica, sans-serif"
      };
      firstName.focus();
      return false;
    } else if (firstName.value.length > 11) {
      firstName.style.border = "1px solid red";
      firstNameError.innerHTML = "Your first name must be less than 11 letters.";
      firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      firstName.focus();
      return false;
    } else {
      firstName.style.border = "1px solid green";
      firstNameError.innerHTML = "";
    
    }
    
    if(lastName.value===""){
        lastName.style.border="1px solid red"
        lastNameError.innerHTML= "last name cannot be empty"
        lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    
        lastName.focus()
            return false;
        

    }
    const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (email.value == "") {
       email.style.border = "1px solid red"
       emailError.textContent = "Email is required";
       emailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
       return false;
     }else if (!email.value.match(emailregex)) {
       email.style.border = "1px solid red"
       emailError.textContent = "Please put in a correct email address";
       emailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
       return false;
     }else {
       email.style.border = "1px solid green"
       emailError.textContent = "";
  };
}