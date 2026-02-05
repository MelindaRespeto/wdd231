// scripts/discover.mjs

// Import the array of items from its module
import { itemsOfInterest } from "../data/itemsOfInterest.mjs";
document.addEventListener("DOMContentLoaded", () => {
    // Get references to the HTML elements we’ll update
    const pageTitle = document.getElementById("pageTitle");
    const pageIntro = document.getElementById("pageIntro");
    const grid = document.getElementById("highlightsGrid");
    const dateSpan = document.getElementById("date");

    // Set the page title and introductory text
    pageTitle.textContent = "Gotha Beach Caramoan Philippines";
    pageIntro.textContent = "Explore some of the most interesting places around Gotha Beach!";

    // Update the “Last Modified” date in the footer
    dateSpan.textContent = document.lastModified;

    // Clear any existing content
    grid.innerHTML = "";

    // Loop through each item and add it to the page
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
