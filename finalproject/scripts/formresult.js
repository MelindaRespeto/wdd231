// formresult.js

// Get container for submitted data
const resultDiv = document.getElementById('plan-details');
const params = new URLSearchParams(window.location.search);

// Clear previous content
resultDiv.innerHTML = "";

// Check if there is any submitted data
if ([...params].length === 0 && !localStorage.getItem("selectedAttraction")) {
    resultDiv.innerHTML = "<p>No data submitted.</p>";
} else {
    // Display all submitted form fields
    [...params].forEach(([key, value]) => {
        const fieldName = key.charAt(0).toUpperCase() + key.slice(1);
        const p = document.createElement("p");
        p.innerHTML = `<strong>${fieldName}:</strong> ${value}`;
        resultDiv.appendChild(p);
    });

    // Highlight the chosen destination
    const destination = params.get("destination");
    if (destination) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>Chosen Destination:</strong> ${destination}`;
        p.style.fontWeight = "700";
        p.style.color = "#007f6a"; // green for emphasis
        resultDiv.appendChild(p);
    }

    // Highlight the selected attraction from localStorage
    const selectedAttraction = localStorage.getItem("selectedAttraction");
    if (selectedAttraction) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>Selected Attraction:</strong> ${selectedAttraction}`;
        p.style.fontWeight = "700";
        p.style.color = "#d35400"; // orange for emphasis
        resultDiv.appendChild(p);
    }
}

// Footer last modified date
const dateEl = document.getElementById("date");
if (dateEl) dateEl.textContent = document.lastModified;

// Hamburger menu toggle (optional, consistent with site)
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}
