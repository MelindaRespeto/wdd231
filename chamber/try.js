document.getElementById("gridBtn").addEventListener("click", function() {
    document.getElementById("display").style.display = "flex"; // Show grid
    document.getElementById("listView").style.display = "none"; // Hide list
});

document.getElementById("listBtn").addEventListener("click", function() {
    document.getElementById("display").style.display = "none"; // Hide grid
    document.getElementById("listView").style.display = "block"; // Show list
});
