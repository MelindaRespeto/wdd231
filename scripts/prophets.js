// URL of the JSON file
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// Select the container where the cards will go
const cards = document.querySelector('#cards');

// Async function to fetch data
async function getProphetData() {
    try {
        // Fetch the JSON
        const response = await fetch(url);
        const data = await response.json();

        // Call the displayProphets function with the array
        displayProphets(data.prophets);

    } catch (error) {
        console.error('Error fetching prophet data:', error);
    }
}

// Function expression using arrow syntax
const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        // 1️⃣ Create a section element for the card
        const card = document.createElement('section');
        card.classList.add('prophet-card');

        // 2️⃣ Create an h2 element for the full name
        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // 3️⃣ Create an img element for the portrait
        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');  // example width
        portrait.setAttribute('height', '440'); // example height

        // 4️⃣ Append heading and image to the card one at a time
        card.appendChild(fullName);
        card.appendChild(portrait);

        // 5️⃣ Append the card to the container
        cards.appendChild(card);
    });
};

// Call the function to fetch data and display prophets
getProphetData();
