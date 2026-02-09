// scripts/final.js
import { attractions, events } from "./data.mjs";

// Update footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Last modified date
const dateEl = document.getElementById("date");
if (dateEl) dateEl.textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

// Reusable function to generate cards
function generateCards(data, containerSelector, type) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement(type === "event" ? "div" : "article");
        card.className = type === "event" ? "event" : "card";

        if (type === "event") {
            card.innerHTML = `
                <figure>
                    <img src="${item.image}" alt="${item.title}">
                    ${item.credit ? `<figcaption>${item.credit}</figcaption>` : ""}
                </figure>
                <div class="event-info">
                    <div class="event-date">
                        <div>${item.month}</div>
                        <div>${item.day}</div>
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
        } else {
            // Attraction card
            card.innerHTML = `
                <figure>
                    <img src="${item.image}" alt="${item.name}">
                    ${item.credit ? `<figcaption>${item.credit}</figcaption>` : ""}
                </figure>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <a href="${item.link}">View More</a>
            `;
        }

        container.appendChild(card);
    });
}

// Generate all sections dynamically
generateCards(attractions, ".featured-grid", "attraction");
generateCards(events, ".events-list", "event");
