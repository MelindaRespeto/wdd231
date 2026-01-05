// navigation.js

const nav = document.querySelector("nav ul");
const menuButton = document.createElement("button");

menuButton.textContent = "☰";
menuButton.classList.add("menu-button");

document.querySelector("header").prepend(menuButton);

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});
