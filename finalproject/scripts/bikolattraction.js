// bikolattraction.js

// Array of 15+ attractions with 4 properties each + image
export const bikolattraction = [
  { name: "Mayon Volcano", location: "Albay", type: "Natural", rating: "5⭐", image: "./images/mayon.jpg" },
  { name: "Cagsawa Ruins", location: "Albay", type: "Historical", rating: "4.5⭐", image: "./images/cagsawa.jpg" },
  { name: "Donsol Whale Sharks", location: "Sorsogon", type: "Wildlife", rating: "5⭐", image: "./images/donsol.jpg" },
  { name: "Caramoan Islands", location: "Camarines Sur", type: "Island", rating: "5⭐", image: "./images/caramoan.jpg" },
  { name: "Lignon Hill", location: "Legazpi", type: "Scenic View", rating: "4⭐", image: "./images/lignon.jpg" },
  { name: "Embarcadero de Legazpi", location: "Legazpi", type: "Shopping & Dining", rating: "4⭐", image: "./images/embar.jpg" },
  { name: "Misibis Bay Resort", location: "Cagraray Island", type: "Resort", rating: "5⭐", image: "./images/misibis.jpg" },
  { name: "Hoyop-Hoyopan Cave", location: "Legazpi", type: "Cave", rating: "4⭐", image: "./images/cave.jpg" },
  { name: "Bicol Natural Park", location: "Naga", type: "Nature Park", rating: "4.5⭐", image: "./images/naturalpark.jpg" },
  { name: "Virac Port", location: "Catanduanes", type: "Transport Hub", rating: "3.5⭐", image: "./images/virac.jpg" },
  { name: "Magayon Festival", location: "Albay", type: "Festival", rating: "5⭐", image: "./images/festival.jpg" },
  { name: "Bulusan Lake", location: "Sorsogon", type: "Lake", rating: "4.5⭐", image: "./images/bulusan.jpg" },
  { name: "Sumlang Lake", location: "Legazpi", type: "Adventure", rating: "4⭐", image: "./images/sumlang.jpg" },
  { name: "Quitinday Hills", location: "Sorsogon", type: "Hiking", rating: "4.5⭐", image: "./images/quitinday.jpg" },
  { name: "Bacacay Beach", location: "Albay", type: "Beach", rating: "4⭐", image: "./images/bacacay.jpg" }
];

// Get main container
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
    const attractionName = link.parentElement.querySelector("h3").textContent;
    // Save selected attraction to local storage
    localStorage.setItem("selectedAttraction", attractionName);
    // Redirect to plan page
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
