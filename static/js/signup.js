const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    Validate();
})

const sendData = (usernameVal, sRate, Count) => {
    if (sRate === Count) {
        swal("Hello " + usernameVal, "You are Registered", "success");
    }
}

const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for (var i = 0; i < formContr.length; i++) {
        if (formContr[i].className === "form-control success") {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, Count);
        }
        else {
            return false;
        }
    }
}


//function to validate the email id

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}

function Validate() {
    const usernameVal = username.value.trim(); //trim function is used to remove whitespaces
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const password1Val = password1.value.trim();

    //validate the first name

    if (usernameVal === "") {
        setErrorMsg(username, 'First name cannot be blank');
    }
    else if (usernameVal.length <= 1) {
        setErrorMsg(username, 'First name should be minimum 2 characters ');
    }
    else {
        setSuccessMsg(username);
    }

    //Validate the last name 

    if (lastnameVal === "") {
        setErrorMsg(lastname, 'Last name cannot be blank');
    }
    else if (lastnameVal.length <= 2) {
        setErrorMsg(lastname, 'Last name must be minimum 3 characters');
    }
    else {
        setSuccessMsg(lastname);
    }

    //validate the email id
    if (emailVal === "") {
        setErrorMsg(email, 'Email cannot be blank');
    }
    else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Email is not valid');
    }
    else {
        setSuccessMsg(email);
    }

    //password
    if (passwordVal === "") {
        setErrorMsg(password, 'Password field cannot be blank');
    }
    else if (passwordVal.length <= 7) {
        setErrorMsg(password, 'Password should be minimum 8 characters');
    }
    else {
        setSuccessMsg(password);
    }

    //confirm password
    if (password1Val === "") {
        setErrorMsg(password1, 'Confirm password cannot be blank');
    }
    else if (passwordVal != password1Val) {
        setErrorMsg(password1, 'Passwords do not match!');
    }
    else {
        setSuccessMsg(password1);
    }
    SuccessMsg(usernameVal);


}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
