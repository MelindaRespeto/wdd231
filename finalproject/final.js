// =========================
// Update footer year
// =========================
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
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
// Tourist Attractions Data
// =========================
export const attractions = [
    {
        title: "Sunny Beach",
        description: "Relax on the golden sands and enjoy clear turquoise waters.",
        image: "../images/beach.jpg",
        link: "attraction.html#sunny-beach"
    },
    {
        title: "Tropical Forest",
        description: "Explore lush greenery and vibrant wildlife on guided tours.",
        image: "../images/forest.jpg",
        link: "attraction.html#tropical-forest"
    },
    {
        title: "Historic Lighthouse",
        description: "Discover the stories of the coast from a centuries-old lighthouse.",
        image: "../images/lighthouse.jpg",
        link: "attraction.html#lighthouse"
    },
    {
        title: "Coral Reef Dive",
        description: "Snorkel or dive among colorful coral reefs and exotic fish.",
        image: "../images/coral.jpg",
        link: "attraction.html#coral-reef"
    }
    // Add more attractions as needed
];

// =========================
// Generate Cards
// =========================
const cardsGrid = document.querySelector(".cards-grid");

if (cardsGrid) {
    attractions.forEach(attraction => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${attraction.image}" alt="${attraction.title}">
            <h3>${attraction.title}</h3>
            <p>${attraction.description}</p>
            <a href="${attraction.link}">Learn More</a>
        `;

        cardsGrid.appendChild(card);
    });
}
