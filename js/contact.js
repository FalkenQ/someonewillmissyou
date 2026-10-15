"use strict"

const contactForm = document.querySelector("#contact-form");
const fullnameInput = document.querySelector("#fName");
const lastnameInput = document.querySelector("#lName");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const errorList = document.querySelector("#errorlist");

function validateForm() {

    errorList.textContent = "";

    if(fullnameInput.value.trim() === "") {
        const errorListEl = document.createElement("li");
        errorListEl.textContent = "Input a valid name...";
        errorList.appendChild(errorListEl);

    } if(lastnameInput.value.trim() === "") {
        const errorListEl = document.createElement("li");
        errorListEl.textContent = "Input a valid lastname...";
        errorList.appendChild(errorListEl);

    } if(emailInput.value.trim() === "") {
        const errorListEl = document.createElement("li");
        errorListEl.textContent = "Input a valid email adress...";
        errorList.appendChild(errorListEl);

    } if(subjectInput.value.trim() === "") {
        const errorListEl = document.createElement("li");
        errorListEl.textContent = "Please tell us why you are contacting us...";
        errorList.appendChild(errorListEl);
    }
}

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    if(validateForm() === true) {

    }
})