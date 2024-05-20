const form = document.querySelector(".registration");
const input = document.querySelector(".registration__input");
const errorMessage = document.querySelector(".emailErrorText");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

form.addEventListener("submit", (e) => {
    if(!emailRegex.test(input.value)){
    errorMessage.style.display = "block";
    e.preventDefault();
    }

    console.log(input.value);
})