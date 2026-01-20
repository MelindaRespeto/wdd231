// spotlight.js
// Async function to fetch chamber members and display spotlight cards
async function displaySpotlights() {
  try {
    // Fetch the JSON data
    const response = await fetch('scripts/members.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const members = await response.json();

    const container = document.getElementById('spotlights-container');
    if (!container) return; // Safety check

    // Filter only gold and silver members for spotlight
    const spotlightMembers = members.filter(
      member => member.membership === "gold" || member.membership === "silver"
    );

    // Create HTML for each spotlight member
    spotlightMembers.forEach(member => {
      const card = document.createElement('article');
      card.classList.add('spotlight');

      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="${member.image}" alt="${member.alt}">
        <p>${member.description}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error('Error loading spotlight members:', error);
  }
}

// Call the async function after DOM is ready
window.addEventListener('DOMContentLoaded', displaySpotlights);
