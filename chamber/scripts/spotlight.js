// spotlight.js
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('./scripts/members.json'); // relative to HTML file
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const members = await response.json();
    const container = document.getElementById('spotlights-container');
    if (!container) return;

    // Filter only gold and silver members
    const spotlightMembers = members.filter(
      member => member.membership === "gold" || member.membership === "silver"
    );

    // Create cards dynamically
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
});
