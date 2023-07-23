let email = document.getElementById("email")
let password = document.getElementById("password")

let fname = document.getElementById("name")
let dateofbirth = document.getElementById("dateofbirth")


function save() {
    localStorage.setItem('name', fname.value)
    localStorage.setItem('dateofbirth', dateofbirth.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)
}
