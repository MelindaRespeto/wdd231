const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

// Create year if needed
const footer = document.querySelector("footer");

const yearPara = document.createElement("p");
yearPara.textContent = `© ${currentYear}`;

footer.appendChild(yearPara);

// Update last modified
const dateSpan = document.getElementById("date");
if (dateSpan) {
    dateSpan.textContent = lastModified;
}