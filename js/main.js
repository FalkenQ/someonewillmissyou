"use strict"


const menuButton = document.querySelector(".menu-toggle");
const headerMenu = document.querySelector(".header-navigation");

// Eventlyssnare efter att man öppnar/stänger huvudmenyn
menuButton.addEventListener("click", function() {
    const isOpen = headerMenu.classList.toggle("isOpen");
    menuButton.setAttribute("aria-expanded", isOpen);

    // if sats för att kolla om menyn är öppen eller stängd
    if(isOpen) {
        console.log("Du öppnade menyn.");
    } else {
        console.log("Du stängde menyn.");
    }
});