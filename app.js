const first = document.getElementById("first"),
 last = document.getElementById("last"),
 middle = document.getElementById("middle"),
 username = document.getElementById("user"),
 email = document.getElementById("email"),
 phone = document.getElementById("phone"),
 female = document.getElementById("female"),
 male = document.getElementById("male"),
 profilePIc = document.getElementById("picture"),
 password = document.getElementById("password"),
 confirmPass = document.getElementById("secondpass")
const form = document.getElementById("form")


function showError(input, message) {
const formControl = input.parentElement;
formControl.className = "form-control error";
const small = formControl.querySelector("small")
small.innerText = message
}


function showSuccess(input) {
    formControl =input.parentElement;
    formControl.className = "form-control success";
    }
    
form.addEventListener("submit", (e) => {
    e.preventDefault()
if(username.value == "" || username.value == null){
    showError(username,  "username is required")
} else if (username.value.length < 6){
    showError(username,  "username must be 6 characters")
}
else {
    showSuccess(username)
}


if(first.value == "" || first.value == null){
    showError(first,  "firstname is required")
} else if (first.value.length < 4){
    showError(first,  "username must be 4 characters")
}
else {
    showSuccess(first)
}


if(middle.value == "" || middle.value == null){
    showError(middle,  "middlename is required")
} else if (middle.value.length < 4){
    showError(middle,  "middlename must be 4 characters")
}
else {
    showSuccess(middle)
}

if(last.value == "" || last.value == null){
    showError(last,  "lastname is required")
} else if (last.value.length < 4){
    showError(last,  "lastname must be 4 characters")
}
else {
    showSuccess(last)
}

if(email.value == "" || email.value == null){
    showError(email,  "lastname is required")
} else if (email.value.length < 5){
    showError(email,  "must be email address")
}
else {
    showSuccess(email)
}


if(phone.value == "" ||phone.value == null){
    showError(phone,  "please phone number  is required")
} else if (phone.value.length < 8){
    showError(phone,  "please enter a valid number")
}
else {
    showSuccess(phone)
}

if(profilePIc.value == "" ||profilePIc.value == null){
    showError(profilePIc,  "please upload your photo")
}
else {
    showSuccess(profilePIc)
}


if(password.value == "" || password.value == null){
    showError(password,  "please enter your password ")
} else if (password.value.length <= 6){
    showError(password,  "password must be 6 characters")
}
else {
    showSuccess(password)
}


if(confirmPass.value == "" || confirmPass.value == null){
    showError(confirmPass,  "please confirm your password ")
}  else if (!password.value.length == confirmPass.value.length){
    showError(confirmPass,  "password must be the same")
}
else {
    showSuccess(confirmPass)
}



let formData = {
    firstname: first.value,
    lastname: last.value,
    middlename: last.value,
    username: username.value,
    email: email.value,
    password: password.value,
}

window.location.href = 'complete.html';


localStorage.setItem("formData", JSON.stringify(formData))
displayData()



})

function displayData() {   
   let userData= JSON.parse(localStorage.getItem("formData"));
   console.log(userData)
    let {firstname,lastname,middlename,password,emmail,username} = JSON.parse(localStorage.getItem("formData"));
     const first = document.querySelector(".first")
     const last = document.querySelector(".last")
     const middle = document.querySelector(".middle")
     const em = document.querySelector(".email")
     const pass = document.querySelector(".password")
     const user = document.querySelector(".user")

     first.innerText = userData.firstnmae;
     last.innerText = userData.lastname;
     middle.innerText = userData.middlename;
    em.innerText = userData.email;
    pass.innerText = userData.password;
    user.innerText = userData.username;
    
 }

//  const deleteAcc = document.querySelector(".delete-acc")
//  deleteAcc.addEventListener("click", () => {
//             const remov = localStorage.removeItem("formData")
//         console.log(remov)
//  })



