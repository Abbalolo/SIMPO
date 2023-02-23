

const  username2 = document.getElementById("user2"),
password2 = document.getElementById("password2"),
secondForm = document.getElementById("second")


function showError2(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control2 error";
    const small = formControl.querySelector("small")
    small.innerText = message
    }
    
    
    function showSuccess2(input) {
        formControl =input.parentElement;
        formControl.className = "form-control2 success";
        }
        
    secondForm.addEventListener("submit", (e) => {
        e.preventDefault()

        
    if(username2.value == "" || username2.value == null){
        showError2(username2,  "username is required")
    } 
    else if (username2.value !== userData.username ){
        showError2(username2,  "username does not match")
    }
    else {
        showSuccess2(username2)
    }
    
    
    if(password2.value == "" || password2.value == null){
        showError2(password2,  "please enter your password ")
    } 
    else if (password2.value !== userData.password){
        showError2(password2,  "password does not match ")
    }
    else {
        showSuccess2(password2)
        
    }
    let userData= JSON.parse(localStorage.getItem("formData"));
    console.log(userData)



    

    })


