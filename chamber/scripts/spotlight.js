// spotlight.js
console.log('Fetching members.json...');

window.addEventListener('DOMContentLoaded', async () => {
  try {
    // Fetch the JSON data
    const response = await fetch('scripts/members.json');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    const members = data.companies; // Access the array inside "companies"
    const container = document.getElementById('spotlights-container');
    if (!container) return;

    // Filter only Gold (3) and Silver (2) members
    const eligibleMembers = members.filter(
      member => member.membershipLevel === 3 || member.membershipLevel === 2
    );

    // Randomly select 2 or 3 members
    const count = Math.min(3, eligibleMembers.length);
    const selectedMembers = [];

    while (selectedMembers.length < count) {
      const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
      const member = eligibleMembers[randomIndex];
      if (!selectedMembers.includes(member)) {
        selectedMembers.push(member);
      }
    }

    // Convert membershipLevel number to string
    function getMembershipName(level) {
      switch (level) {
        case 3: return 'Gold';
        case 2: return 'Silver';
        default: return 'Bronze';
      }
    }

    // Create and display spotlight cards
    selectedMembers.forEach(member => {
      const card = document.createElement('article');
      card.classList.add('spotlight');

      card.innerHTML = `
        <h3>${member.name}</h3>
        ${member.image ? `<img src="images/${member.image}" alt="${member.name} Logo">` : ''}
        <p><strong>Phone:</strong> ${member.phone || 'N/A'}</p>
        <p><strong>Address:</strong> ${member.address || 'N/A'}</p>
        ${member.website ? `<p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>` : ''}
        <p><strong>Membership:</strong> ${getMembershipName(member.membershipLevel)}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error('Error loading spotlight members:', error);
  }
});
