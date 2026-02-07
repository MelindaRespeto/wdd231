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
const visitMessage = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysBetween = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (daysBetween < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    visitMessage.textContent = "You last visited 1 day ago.";
  } else {
    visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
  }
}

// Store the current visit time in milliseconds
localStorage.setItem("lastVisit", now);

