"use strict"

const postForm = document.querySelector("#post-form");
const postTitleInput = document.querySelector("#post-title");
const postTextInput = document.querySelector("#post-text");

const errorList = document.querySelector("#errorlist");
const validatePost = document.querySelector("#validatemessage");

const previewPostHeader = document.querySelector("#postheader");
const previewPostParagraph = document.querySelector("#postparagraph");

let post = []; // Post array.

function createPost() {

    // Hämta titel och text
    const postTitle = postTitleInput.value;
    const postParagraph = postTextInput.value;

    // Lägg till nya inlägget
    previewPostHeader.textContent = postTitle;
    previewPostParagraph.textContent = postParagraph;

    // skapa ett objekt för posten
    const postInformation = {
        head: postTitle,
        paragraph: postParagraph
    };

    // Lägg till inlägget i post arrayen
    post.push(postInformation);

    // Spara inlägget
    loadPostHistory();


}

function loadPostHistory() {

    // Hämta sparat inlägg
    const savedPost = localStorage.getItem("post");

    if(savedPost !== null) {
        post = JSON.parse(savedPost);
    }
}

function validateForm() {

    errorList.textContent = ""; // Tömmer errorlist
    console.log("JS laddas.");

    if(postTitleInput.value.trim() === "") {
        console.log("ingen titel.");

        const errorListEl = document.createElement("li");
        errorListEl.textContent = "Please give your text a title.";
        errorList.appendChild(errorListEl);
    } if(postTextInput.value.trim() === "") {
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