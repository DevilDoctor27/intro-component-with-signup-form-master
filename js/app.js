const input = document.querySelectorAll(".form__input")
const formValidate = document.querySelectorAll(".form_validator")
const formEmailValidate = document.querySelectorAll(".form_validator-text")
const formEmail = document.querySelector(".form__email")



input.forEach((element, index) => {
    element.addEventListener("invalid", (event) => {
        event.preventDefault()

        if (!formEmail.value) {
            formEmailValidate[index].innerHTML = "Email cannot be empty"
        } else if (validateEmail(formEmail.value) !== true) {
            formEmailValidate[index].innerHTML = "Looks like this is not an email"
        }

        formValidate[index].classList.add("active")
        element.style.borderColor = "hsl(0, 100%, 74%)"
        element.style.borderWidth = "2px"

    })

    element.addEventListener("keydown", (event) => {
        formValidate[index].classList.remove("active")
        element.style.borderColor = "hsl(246, 25%, 77%)"
        element.style.borderWidth = "1px"
    })

})




function validateEmail(email) {
    let reg = /\S+@\S+\.\S+/;
    return reg.test(email);
}
