// bikolattraction.js

// Array of 15+ attractions with 4 properties each
export const bikolattraction = [
  { name: "Mayon Volcano", location: "Albay", type: "Natural", rating: "5⭐" },
  { name: "Cagsawa Ruins", location: "Albay", type: "Historical", rating: "4.5⭐" },
  { name: "Donsol Whale Sharks", location: "Sorsogon", type: "Wildlife", rating: "5⭐" },
  { name: "Caramoan Islands", location: "Camarines Sur", type: "Island", rating: "5⭐" },
  { name: "Lignon Hill", location: "Legazpi", type: "Scenic View", rating: "4⭐" },
  { name: "Embarcadero de Legazpi", location: "Legazpi", type: "Shopping & Dining", rating: "4⭐" },
  { name: "Misibis Bay Resort", location: "Cagraray Island", type: "Resort", rating: "5⭐" },
  { name: "Hoyop-Hoyopan Cave", location: "Legazpi", type: "Cave", rating: "4⭐" },
  { name: "Bicol Natural Park", location: "Naga", type: "Nature Park", rating: "4.5⭐" },
  { name: "Virac Port", location: "Catanduanes", type: "Transport Hub", rating: "3.5⭐" },
  { name: "Magayon Festival", location: "Albay", type: "Festival", rating: "5⭐" },
  { name: "Bulusan Lake", location: "Sorsogon", type: "Lake", rating: "4.5⭐" },
  { name: "Sumlang Lake", location: "Legazpi", type: "Adventure", rating: "4⭐" },
  { name: "Quitinday Hills", location: "Sorsogon", type: "Hiking", rating: "4.5⭐" },
  { name: "Bacacay Beach", location: "Albay", type: "Beach", rating: "4⭐" }
];

// Get main container
const main = document.getElementById("attractions-content");

if (!main) console.warn("No #attractions-content element found.");

// Generate cards dynamically
bikolattraction.forEach(attraction => {
  const card = document.createElement("section");
  card.classList.add("card");

  card.innerHTML = `
        <h3>${attraction.name}</h3>
        <p><strong>Location:</strong> ${attraction.location}</p>
        <p><strong>Type:</strong> ${attraction.type}</p>
        <p><strong>Rating:</strong> ${attraction.rating}</p>
        <a href="plan.html">Plan Your Visit</a>
    `;
  main.appendChild(card);
});

// ================= FOOTER DATE =================
const dateEl = document.getElementById("date");
if (dateEl) dateEl.textContent = document.lastModified;

// ================= HAMBURGER NAV =================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}
