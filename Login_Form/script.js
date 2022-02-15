// elements
form = document.querySelector("form"),

emailField = form.querySelector(".email"),
passwordField = form.querySelector(".password"),

emailInput = emailField.querySelector("input"),

passwordInput = passwordField.querySelector("input"),


form.onsubmit = (e)=>{
    //preventing form from submitting
    e.preventDefault();
    if(emailInput.value == ""){
        emailField.classList.add("shake", "error");
    } else{
        checkEmail();
    }
    if(passwordInput.value == ""){
        passwordField.classList.add("shake", "error");
    } 

    setTimeout(()=> { //remove shake class
        emailField.classList.remove("shake");
        passwordField.classList.remove("shake");
    }, 400);


    //input keyup
    emailInput.onkeyup = ()=>{
        checkEmail();
    }

    // check email 
    function checkEmail() {
        // patterns to validate:
        let patterns = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!emailInput.value.match(patterns)){
            emailField.classList.add("error");
            let errorTxt = emailField.querySelector(".error-txt");
            (emailInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
        } else{
            emailField.classList.remove("error");
        }  
    }

    passwordInput.onkeyup = ()=>{
        if(passwordInput.value == ""){
            passwordField.classList.add("error");
        } else{
            passwordField.classList.remove("error");
        }  
    }


    //After user filled up details
    if(!emailField.classList.contains("error") && !passwordField.classList.contains("error")) {
        // submit the data 
        window.location.href = "#";
        console.log("Form Submitted!");
    }
}