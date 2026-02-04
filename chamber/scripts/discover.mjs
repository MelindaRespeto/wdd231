import { itemsOfInterest } from 'data/items.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const pageTitle = document.getElementById("pageTitle");
  const pageIntro = document.getElementById("pageIntro");
  const grid = document.getElementById("highlightsGrid");

  // Page title and intro
  pageTitle.textContent = "Discover Gotha Beach";
  pageIntro.textContent = "Gotha Beach is one of our community’s treasured natural attractions, offering leisure opportunities and strong potential for business development.";

  // Populate highlights grid
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
