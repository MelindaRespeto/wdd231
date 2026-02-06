import { itemsOfInterest } from "../data/itemsOfInterest.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".cards-grid");

  grid.innerHTML = "";

  itemsOfInterest.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("card", `card-${item.id}`);

    card.innerHTML = `
      <h2>${item.name}</h2>
      <figure>
        <img src="${item.image}" alt="${item.name}">
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <button>Learn More</button>
    `;

    grid.appendChild(card);
  });
});
