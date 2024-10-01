const nav = document.querySelector("nav");
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const ham = document.querySelector(".ham");
const cards = document.querySelector(".cards"); // Ensure cards is selected
const display = cards; // If cards and display are the same

// Responsive ham and nav
ham.addEventListener("click", () => {
  ham.classList.toggle("show");
  nav.classList.toggle("show");
});

// Grid/List toggle
gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

// Use a defined function for list button click
listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}

// Ensure that the button exists before adding the event listener
let element = document.getElementById("myButton");
if (element) {
    element.addEventListener("click", function() {
        alert("Button clicked!");
    });
} else {
    console.warn("Element with ID 'myButton' not found."); // Add warning if the button doesn't exist
}
document.getElementById("gridBtn").addEventListener("click", function() {
  document.getElementById("display").style.display = "flex"; // Show grid
  document.getElementById("listView").style.display = "none"; // Hide list
});

document.getElementById("listBtn").addEventListener("click", function() {
  document.getElementById("display").style.display = "none"; // Hide grid
  document.getElementById("listView").style.display = "block"; // Show list
});
