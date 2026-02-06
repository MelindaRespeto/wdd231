// Example data array for cards
const cardsData = [
  {
    id: 'a',
    title: 'Explore Gotha A',
    description: 'Some interesting info about A',
    imageUrl: 'images/card-a.jpg'
  },
  {
    id: 'gotaBeach',
    title: 'Explore Gota Beach',
    description: 'A peaceful white-sand beach and gateway to island hopping tours',
    imageUrl: '../images/enchanted.webp'
  },
  {
    id: 'c',
    title: 'Explore Gotha C',
    description: 'Some interesting info about C',
    imageUrl: 'images/card-c.jpg'
  },
  {
    id: 'd',
    title: 'Explore Gotha D',
    description: 'Some interesting info about D',
    imageUrl: 'images/card-d.jpg'
  }
];

// Reference the cards grid container
const cardsGrid = document.querySelector('.cards-grid');

// Generate card HTML
cardsGrid.innerHTML = cardsData.map(card => `
  <article class="card card-${card.id}">
    <img src="${card.imageUrl}" alt="${card.title}">
    <h3>${card.title}</h3>
    <p>${card.description}</p>
  </article>
`).join('');
