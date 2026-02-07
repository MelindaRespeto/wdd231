document.addEventListener("DOMContentLoaded", () => {
    const exploreBtn = document.getElementById("exploreBtn");
    const discoverSection = document.getElementById("discover");

    if (!exploreBtn || !discoverSection) return;

    // hide discover section initially
    discoverSection.style.display = "none";

    exploreBtn.addEventListener("click", (e) => {
        e.preventDefault();
        discoverSection.style.display = "block";
        discoverSection.scrollIntoView({ behavior: "smooth" });
    });
});
