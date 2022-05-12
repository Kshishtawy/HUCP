const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
var mailformat = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/


form.addEventListener('submit', (e) => {
    if(email.value.match(mailformat)){
        alert("Welcome to HUCP")
        return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    e.preventDefault()
    email.focus()
    return false;
    }
})