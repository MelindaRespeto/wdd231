// URL of the JSON file
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// Select the container where the cards will go
const cards = document.querySelector('#cards');

// Async function to fetch data
async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Call displayProphets with the array of prophets
        displayProphets(data.prophets);

    } catch (error) {
        console.error('Error fetching prophet data:', error);
    }
}

// Function expression using arrow function
const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        // Create a card for each prophet
        const card = document.createElement('section');
        card.classList.add('prophet-card');

        // Name
        const name = document.createElement('h2');
        name.textContent = `${prophet.name} ${prophet.lastname}`;

        // Birthdate
        const birth = document.createElement('p');
        birth.textContent = `Date of Birth: ${prophet.birthdate}`;

        // Birthplace
        const place = document.createElement('p');
        place.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Portrait image
        const image = document.createElement('img');
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        image.setAttribute('loading', 'lazy');

        // Append all elements to the card
        card.append(name, birth, place, image);

        // Append the card to the container
        cards.appendChild(card);
    });
};

// Call the function to fetch data and display prophets
getProphetData();
