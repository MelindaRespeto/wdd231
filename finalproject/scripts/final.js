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

// Function to create image HTML with smart lazy loading
function createImageHTML(item, index, isEvent = false) {
    const isAboveTheFold = index < 2; // first 2 images load normally
    const altText = isEvent ? item.title : item.name;
    const width = 400;
    const height = 300;
    const loadingAttr = isAboveTheFold ? "" : "loading='lazy'";

    return `
        <img src="${item.image}" 
             alt="${altText}" 
             ${loadingAttr} 
             width="${width}" 
             height="${height}">
        ${item.credit ? `<figcaption>${item.credit}</figcaption>` : ""}
    `;
}

// Reusable function to generate cards
function generateCards(data, containerSelector, type) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = "";

    data.forEach((item, index) => {
        const card = document.createElement(type === "event" ? "div" : "article");
        card.className = type === "event" ? "event" : "card";

        if (type === "event") {
            card.innerHTML = `
                <figure>
                    ${createImageHTML(item, index, true)}
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
            card.innerHTML = `
                <figure>
                    ${createImageHTML(item, index)}
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
