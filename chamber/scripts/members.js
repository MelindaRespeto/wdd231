const membersContainer = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch("data/companies.json");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        displayMembers(data.companies);

    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

function displayMembers(companies) {
    companies.forEach(company => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
      <img src="images/${company.image}" alt="${company.name}">
      <h2>${company.name}</h2>
      <p><strong>Address:</strong> ${company.address}</p>
      <p><strong>Phone:</strong> ${company.phone}</p>
      <p><strong>Membership Level:</strong> ${getMembershipLevel(company.membershipLevel)}</p>
      <a href="${company.website}" target="_blank">Visit Website</a>
    `;

        membersContainer.appendChild(card);
    });
}

function getMembershipLevel(level) {
    switch (level) {
        case 3: return "Gold";
        case 2: return "Silver";
        default: return "Member";
    }
}

// Call the function
getMembers();
