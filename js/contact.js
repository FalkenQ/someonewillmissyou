"use strict"

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Formuläret skickades...");
})