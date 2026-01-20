// ===============================
// FOOTER DATE INFORMATION
// ===============================

const lastModified = document.lastModified;
const dateSpan = document.getElementById("date");
if (dateSpan) {
    dateSpan.textContent = lastModified;
}

// ===============================
// MEMBERS DIRECTORY
// ===============================

const membersContainer = document.querySelector("#members");
const dataURL = "data/members.json"; // must be relative to directory.html

// get the buttons
const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");

// Async function to fetch JSON data
async function getMembers() {
    try {
        const response = await fetch(dataURL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        displayMembers(data.companies);

    } catch (error) {
        console.error("Error loading member data:", error);
        membersContainer.innerHTML = "<p>Failed to load member data.</p>";
    }
}

// Function to create and display member cards
function displayMembers(companies) {
    membersContainer.innerHTML = ""; // clear previous content

    companies.forEach(company => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${company.image}" alt="${company.name} logo" loading="lazy">
            <h2>${company.name}</h2>
            <p><strong>Address:</strong> ${company.address}</p>
            <p><strong>Phone:</strong> ${company.phone}</p>
            <p><strong>Membership:</strong> ${getMembershipLevel(company.membershipLevel)}</p>
        `;

        membersContainer.appendChild(card);
    });
}

// Convert membership number to text
function getMembershipLevel(level) {
    switch (level) {
        case 3:
            return "Gold";
        case 2:
            return "Silver";
        default:
            return "Member";
    }
}

// Toggle View Buttons
gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("members-grid");
    membersContainer.classList.remove("members-list");

    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("members-list");
    membersContainer.classList.remove("members-grid");

    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
});

// **This must be outside of displayMembers**
getMembers();
