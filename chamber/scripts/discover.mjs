// scripts/discover.mjs
import { itemsOfInterest } from "./itemsOfInterest.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const pageTitle = document.getElementById("pageTitle");
    const pageIntro = document.getElementById("pageIntro");
    const grid = document.getElementById("highlightsGrid");
    const dateSpan = document.getElementById("date");

    pageTitle.textContent = "Gotha Beach Caramoan Philippines";
    pageIntro.textContent = "Explore some of the most interesting places around Gotha Beach!";
    dateSpan.textContent = document.lastModified;

    grid.innerHTML = "";

    itemsOfInterest.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("item");

        card.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p><strong>Address:</strong> ${item.address}</p>
          <p>${item.description}</p>
        `;

        grid.appendChild(card);
    });
});
