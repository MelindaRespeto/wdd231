import { itemsOfInterest } from "../data/itemsOfInterest.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const cardsGrid = document.getElementById("cardsGrid");

  itemsOfInterest.forEach((item, index) => {
    // Create card container
    const card = document.createElement("article");
    card.classList.add("card");
    card.setAttribute("id", `card-${index + 1}`);

    // Add card content
    card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
                <img src="${item.image}" alt="${item.name}" width="300" height="200">
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button type="button">Learn More</button>
        `;

    cardsGrid.appendChild(card);
  });
});
