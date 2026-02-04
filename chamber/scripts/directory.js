// ===============================
// MEMBERS DIRECTORY
// ===============================
const membersContainer = document.querySelector("#items");
const dataURL = "data/members.json";

const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");

async function getMembers() {
    try {
        const response = await fetch(dataURL);
        const data = await response.json();
        displayMembers(data.companies);
    } catch (error) {
        console.error("Error loading members:", error);
        if (membersContainer) {
            membersContainer.innerHTML = "<p>Failed to load member data.</p>";
        }
    }
}

function displayMembers(companies) {
    if (!membersContainer) return;

    membersContainer.innerHTML = "";

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

if (gridBtn && listBtn && membersContainer) {
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
}

getMembers();

// ===============================
// FOOTER DATE INFORMATION
// ===============================
const dateSpan = document.getElementById("date");
if (dateSpan) {
    const lastModified = new Date(document.lastModified);

    // Format as: Month day, Year (e.g., January 22, 2026)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateSpan.textContent = lastModified.toLocaleDateString(undefined, options);
}

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}
