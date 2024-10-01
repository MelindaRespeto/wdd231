const nav = document.querySelector("nav");
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const ham = document.querySelector(".ham");
const cards = document.querySelector(".cards"); // Ensure cards is selected
const cardsDisplay = cards; // Renamed from 'display' to avoid confusion

// Ensure that ham, gridbutton, listbutton, and cards exist before attaching events
if (ham && nav) {
    // Responsive ham and nav toggle
    ham.addEventListener("click", () => {
        ham.classList.toggle("show");
        nav.classList.toggle("show");
    });
} else {
    console.warn("Ham or nav element not found.");
}

if (gridbutton && listbutton && cards) {
    // Grid/List toggle
    gridbutton.addEventListener("click", () => {
        cardsDisplay.classList.add("grid");
        cardsDisplay.classList.remove("list");
    });

    listbutton.addEventListener("click", showList);

    function showList() {
        cardsDisplay.classList.add("list");
        cardsDisplay.classList.remove("grid");
    }
} else {
    console.warn("Grid, list button, or cards element not found.");
}

// Ensure that the specific button with ID 'myButton' exists before adding the event listener
const myButton = document.getElementById("myButton");
if (myButton) {
    myButton.addEventListener("click", function() {
        alert("Button clicked!");
    });
} else {
    console.warn("Element with ID 'myButton' not found.");
}

// Grid/List button display toggle with existence checks
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");
const displayGrid = document.getElementById("display");
const listView = document.getElementById("listView");

if (gridBtn && displayGrid && listView) {
    gridBtn.addEventListener("click", function() {
        displayGrid.style.display = "flex"; // Show grid
        listView.style.display = "none"; // Hide list
    });
}

if (listBtn && displayGrid && listView) {
    listBtn.addEventListener("click", function() {
        displayGrid.style.display = "none"; // Hide grid
        listView.style.display = "block"; // Show list
    });
} else {
    console.warn("Grid or List button elements not found.");
}
