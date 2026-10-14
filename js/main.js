"use strict"


const menuButton = document.querySelector(".menu-toggle");
const headerMenu = document.querySelector(".header-navigation");

menuButton.addEventListener("click", function() {
    headerMenu.classList.toggle("isOpen");
    console.log("du öppnade menyn");
});

console.log(menuButton);
console.log("JS laddad");