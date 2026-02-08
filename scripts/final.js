// scripts/final.js

import { attractions } from "./data.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".cards-grid");

    if (!container) {
        console.error("❌ .cards-grid container not found.");
        return;
    }

    attractions.forEach((place) => {
        const card = document.createElement("section");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = place.image;
        img.alt = place.name;
        img.loading = "lazy";

        const h3 = document.createElement("h3");
        h3.textContent = place.name;

        const p = document.createElement("p");
        p.textContent = place.description;

        const a = document.createElement("a");
        a.href = place.link;
        a.textContent = "Learn More";
        a.classList.add("button");

        card.appendChild(h3);
        card.appendChild(img);
        card.appendChild(p);
        card.appendChild(a);

        container.appendChild(card);
    });
});
