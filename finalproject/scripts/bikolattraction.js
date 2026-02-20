// bikolattraction.js

// Array of 15+ attractions with 5 properties each (including image)
export const bikolattraction = [
  { name: "Mayon Volcano", location: "Albay", type: "Natural", rating: "5⭐", image: "./images/maywe.webp" },
  { name: "Cagsawa Ruins", location: "Albay", type: "Historical", rating: "4.5⭐", image: "./images/mayonf.webp" },
  { name: "Donsol Whale Sharks", location: "Sorsogon", type: "Wildlife", rating: "5⭐", image: "./images/island.jpg" },
  { name: "Caramoan Islands", location: "Camarines Sur", type: "Island", rating: "5⭐", image: "./images/enchanted.webp" },
  { name: "Lignon Hill", location: "Legazpi", type: "Scenic View", rating: "4⭐", image: "./images/gothabeach.jpg" },
  { name: "Embarcadero de Legazpi", location: "Legazpi", type: "Shopping & Dining", rating: "4⭐", image: "./images/tuna.jpg" },
  { name: "Misibis Bay Resort", location: "Cagraray Island", type: "Resort", rating: "5⭐", image: "./images/sea.jpg" },
  { name: "Hoyop-Hoyopan Cave", location: "Legazpi", type: "Cave", rating: "4⭐", image: "./images/lahos.jpg" },
  { name: "Bicol Natural Park", location: "Naga", type: "Nature Park", rating: "4.5⭐", image: "./images/paro.jpg" },
  { name: "Virac Port", location: "Catanduanes", type: "Transport Hub", rating: "3.5⭐", image: "./images/fiesta.webp" },
  { name: "Magayon Festival", location: "Albay", type: "Festival", rating: "5⭐", image: "./images/fiesta.webp" },
  { name: "Bulusan Lake", location: "Sorsogon", type: "Lake", rating: "4.5⭐", image: "./images/view.webp" },
  { name: "Sumlang Lake", location: "Legazpi", type: "Adventure", rating: "4⭐", image: "./images/lahos.jpg" },
  { name: "Quitinday Hills", location: "Sorsogon", type: "Hiking", rating: "4.5⭐", image: "./images/mayonf.jpg" },
  { name: "Bacacay Beach", location: "Albay", type: "Beach", rating: "4⭐", image: "./images/sunrise.webp" }
];

// Get main container9
const main = document.getElementById("attractions-content");
if (!main) console.warn("No #attractions-content element found.");

// Generate cards dynamically
bikolattraction.forEach(attraction => {
  const card = document.createElement("section");
  card.classList.add("card");
  card.style.background = `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('${attraction.image}')`;
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";

  card.innerHTML = `
        <h3>${attraction.name}</h3>
        <p><strong>Location:</strong> ${attraction.location}</p>
        <p><strong>Type:</strong> ${attraction.type}</p>
        <p><strong>Rating:</strong> ${attraction.rating}</p>
        <a href="plan.html" class="plan-btn">Plan Your Visit</a>
    `;
  main.appendChild(card);
});

// ================= Local Storage for "Plan Your Visit" =================
document.querySelectorAll(".plan-btn").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const card = link.closest(".card");
    const attractionName = card.querySelector("h3").textContent;
    localStorage.setItem("selectedAttraction", attractionName);
    window.location.href = link.href;
  });
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
