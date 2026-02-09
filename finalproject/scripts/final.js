// scripts/final.js
import { attractions } from "./data.mjs";

// =========================
// Update footer year
// =========================
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// =========================
// Last modified date
// =========================
const dateEl = document.getElementById("date");
if (dateEl) {
    dateEl.textContent = document.lastModified;
}

// =========================
// Hamburger menu toggle
// =========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

// =========================
// Generate Featured Attractions Cards
// =========================
const featuredGrid = document.querySelector(".featured-grid");

if (featuredGrid) {
    featuredGrid.innerHTML = ""; // ensures no leftovers
    attractions.forEach(attraction => {
        const card = document.createElement("article");
        card.className = "card";

        card.innerHTML = `
            <img src="${attraction.image}" alt="${attraction.name}">
            <h3>${attraction.name}</h3>
            <p>${attraction.description}</p>
            <a href="${attraction.link}">View More</a>
        `;

        featuredGrid.appendChild(card);
    });
}
