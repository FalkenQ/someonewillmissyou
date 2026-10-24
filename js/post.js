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

    // skapa ett objekt för posten
    const postInformation = {
        head: postTitle,
        paragraph: postParagraph
    };

    // Lägg till inlägget i post arrayen
    post.push(postInformation);

    // Spara inlägget
    savePostHistory();
    renderPost();

    console.log(post);

}

function savePostHistory() {

    // Spara inlägget
    localStorage.setItem("post", JSON.stringify(post));
}

function loadPostHistory() {

    // Hämta sparat inlägg
    const savedPost = localStorage.getItem("post");

    if(savedPost !== null) {
        post = JSON.parse(savedPost);
    }
}

function renderPost() {

    if(post.length > 0) {
        const postInfo = post[post.length - 1];
        const postTitle = postInfo.head;
        const postParagraph = postInfo.paragraph;

        previewPostHeader.textContent = postTitle;
        previewPostParagraph.textContent = postParagraph;
    }
    console.log(previewPostHeader);
    console.log(previewPostParagraph);
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
    validatePost.textContent = "";

    if(validateForm() === true) {
        console.log("Valideringen gick igenom.");
        const validatePostEl = document.createElement("li");
        validatePostEl.textContent = "Thanks for you kind words.";
        validatePost.appendChild(validatePostEl);
        createPost();
    }
});