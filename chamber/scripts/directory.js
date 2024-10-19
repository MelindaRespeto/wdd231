// Fetch JSON data
fetch('scripts/members.json')
    .then(response => response.json())
    .then(data => {
        const businessContainer = document.getElementById('businessContainer');

        data.forEach(business => {
            // Create a div for each business
            const businessBox = document.createElement('div');
            businessBox.className = 'business_box';

            // Create the HTML structure for each business
            businessBox.innerHTML = `
                <section>
                    <img src="${business.image}" alt="${business.name}" width="200" height="100"> <!-- Adjust size as needed -->
                    <h2>${business.name.replace(/_/g, " ")}</h2>
                    <p>${business.address}</p>
                    <p>${business.phone_number}</p>
                    <p><a href="${business.url}" target="_blank">${business.url}</a></p>
                </section>
            `;

            // Append the business box to the container
            businessContainer.appendChild(businessBox);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

// Check if the elements are already defined
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");
const displayContainer = document.getElementById("displayContainer");

if (displayContainer) {
    displayContainer.classList.add("list");
}

if (gridBtn && listBtn && displayContainer) {
    gridBtn.addEventListener("click", () => {
        displayContainer.classList.add("grid");
        displayContainer.classList.remove("list");
    });

    listBtn.addEventListener("click", () => {
        displayContainer.classList.add("list");
        displayContainer.classList.remove("grid");
    });
} else {
    console.warn("Grid button, list button, or display container element not found.");
}

// Member button animation
const buttons = document.querySelectorAll('.memberBtn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to the clicked button
        button.classList.add('active');
        
        // Additional logic for filtering members can be added here
    });
});
