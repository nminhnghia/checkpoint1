let email = document.getElementById("email")
let password = document.getElementById("password")
let conpassword = document.getElementById("confirmpassword")

let fname = document.getElementById("name")
let dateofbirth = document.getElementById("dateofbirth")


function save() {
    localStorage.setItem('name', fname.value)
    localStorage.setItem('dateofbirth', dateofbirth.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)
}

let emailError = document.getElementById("emailError")
let passError = document.getElementById("passError")
let conpassError = document.getElementById("conpassError")
let dobError = document.getElementById("dobError")
let nameError = document.getElementById("nameError")

function check() {
    let valueEmail = email.value
    let valuePassword = password.value
    let valueName = fname.value
    let valueDob = dateofbirth.value
    let valueConPassword = conpassword.value
    if (valueEmail == "") { // kiểm tra xem có nhập email chưa
        emailError.innerHTML = "Chưa nhập email"
        emailError.style = "color: red; display: block;"
    } else if (!valueEmail.includes("@") || !valueEmail.includes(".")) { // kiểm tra xem email có đúng định dạng chưa (có dấu chấm, dấu @ chưa)
        emailError.innerHTML = "Email sai định dạng"
        emailError.style = "color: red; display: block;"       
    } else { // nếu đã nhập email thì sẽ không báo lỗi
        emailError.style = "display: none;"
    }
    if (valuePassword == "") { // kiểm tra xem có nhập password chưa
        passError.innerHTML = "Chưa nhập mật khẩu"
        passError.style = "color: red; display: block;"
    } else { // nếu đã nhập password thì sẽ không báo lỗi
        passError.style = "display: none;"
    }
    if (valueName == "") { // kiểm tra xem có nhập tên chưa
        nameError.innerHTML = "Chưa nhập tên"
        nameError.style = "color: red; display: block;"
    } else { // nếu đã nhập tên thì sẽ không báo lỗi
        nameError.style = "display: none;"
    }
    if (valueDob == "") { // kiểm tra xem có nhập ngày sinh chưa
        dobError.innerHTML = "Chưa nhập ngày sinh"
        dobError.style = "color: red; display: block;"
    } else { // nếu đã nhập ngày sinh thì sẽ không báo lỗi
        dobError.style = "display: none;"
    }
    if (valueConPassword == "") { // kiểm tra xem có nhập lại mật khẩu chưa
        conpassError.innerHTML = "Chưa nhập lại mật khẩu"
        conpassError.style = "color: red; display: block;"
    } else { // nếu đã nhập lại mật khẩu thì sẽ không báo lỗi
        conpassError.style = "display: none;"
    }
    save()
}