"use strict"

const postForm = document.querySelector("#post-form");
const postTitle = document.querySelector("#post-title");
const postText = document.querySelector("#post-text");
const errorList = document.querySelector("#errorlist");
const validatePost = document.querySelector("#validatemessage");

function validateForm() {

    errorList.textContent = ""; // Tömmer errorlist
    console.log("JS laddas.");

    if(postTitle.value.trim() === "") {
        console.log("ingen titel.");

        const errorListEl = document.createElement("li");
        errorListEl.textContent = "Please give your text a title.";
        errorList.appendChild(errorListEl);
    } if(postText.value.trim() === "") {
        console.log("ingen text.");

        const errorListEl = document.createElement("li");
        errorListEl.textContent = "Please write some words.";
        errorList.appendChild(errorListEl);
    } if(errorList.children.length === 0) {
        return true;
    } else {
        return false;
    }
}

postForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if(validateForm() === true) {
        console.log("Valideringen gick igenom.");
        const validatePostEl = document.createElement("li");
        validatePostEl.textContent = "Thanks for you kind words.";
        validatePost.appendChild(validatePostEl);
    }
});