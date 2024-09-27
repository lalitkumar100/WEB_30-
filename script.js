console.log("hello");

const len = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "@#$%^&*+-";

function createPassword() {
    let new_password = "";
    console.log(typeof(new_password))
    do {
        new_password += upperCase[Math.floor(Math.random() * upperCase.length)];
        new_password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        new_password += number[Math.floor(Math.random() * number.length)];
        new_password += symbol[Math.floor(Math.random() * symbol.length)];
    } while (new_password.length < len)
    console.log(new_password)
    console.log(new_password)
    document.getElementById("password").value = new_password
}   
function copy() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("copy the password");
}

