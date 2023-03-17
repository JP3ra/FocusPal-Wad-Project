const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

function validateForm(){
    if (password != password1){
        alert("Name must be filled out");
        return false;
    }
}