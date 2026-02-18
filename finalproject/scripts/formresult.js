// Display URL Search Params
const resultDiv = document.getElementById('result');
const params = new URLSearchParams(window.location.search);

if ([...params].length === 0) {
    resultDiv.innerHTML += "<p>No data submitted.</p>";
} else {
    [...params].forEach(([key, value]) => {
        const fieldName = key.charAt(0).toUpperCase() + key.slice(1);
        resultDiv.innerHTML += `<p><strong>${fieldName}:</strong> ${value}</p>`;
    });
}

// Back button functionality
const backBtn = document.getElementById("backBtn");
if (backBtn) {
    backBtn.addEventListener("click", () => {
        window.location.href = "plan.html"; // Goes back to Plan page
    });
}

// Set footer last modified date
const dateEl = document.getElementById("date");
if (dateEl) dateEl.textContent = document.lastModified;
