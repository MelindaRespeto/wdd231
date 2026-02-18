// ===============================
// DISPLAY SUBMITTED FORM DATA
// ===============================

// Get container
const detailsContainer = document.getElementById("plan-details");

// Get URL parameters
const params = new URLSearchParams(window.location.search);

// If container exists
if (detailsContainer) {
    if (params.toString() === "") {
        detailsContainer.innerHTML = "<p>No submitted data found.</p>";
    } else {
        let output = "<ul class='submitted-list'>";

        params.forEach((value, key) => {
            output += `
                <li>
                    <strong>${formatLabel(key)}:</strong> 
                    ${decodeURIComponent(value)}
                </li>
            `;
        });

        output += "</ul>";
        detailsContainer.innerHTML = output;
    }
}

// ===============================
// FORMAT FIELD LABELS
// ===============================
function formatLabel(text) {
    return text
        .replace(/-/g, " ")
        .replace(/\b\w/g, char => char.toUpperCase());
}

// ===============================
// SUCCESS MODAL FUNCTIONALITY
// ===============================

const modal = document.getElementById("successModal");
const closeBtn = document.getElementById("closeModal");

// Show modal automatically when page loads
if (modal) {
    modal.style.display = "flex";
}

// Close modal button
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// ===============================
// FOOTER DATE
// ===============================
const dateSpan = document.getElementById("date");
if (dateSpan) {
    dateSpan.textContent = document.lastModified;
}
