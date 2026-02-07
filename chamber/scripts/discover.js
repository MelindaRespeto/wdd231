// scripts/discover.mjs
import { itemsOfInterest } from 'discover.mjs';

const grid = document.getElementById("highlightsGrid");

// Clear any existing content
grid.innerHTML = "";

// Populate the grid with 8 items
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

const lastModified = document.lastModified;
console.log("Last Modified:", lastModified);

// Example: display it on the page
document.getElementById("lastModified").textContent = lastModified;

const modified = new Date(document.lastModified);
            const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            };

            document.getElementById("lastModified").textContent =
                modified.toLocaleDateString("en-US", options);