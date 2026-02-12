// bikolattraction.js
import { bikolattraction } from "./bikolattraction.mjs";

// Get reference to <main> container
const main = document.getElementById("attractions-content");

// If container is missing, log a warning
if (!main) {
    console.warn("No #attractions-content element found in the HTML.");
}

// Loop through the array of attractions
bikolattraction.forEach(place => {
    // Create a section for each place
    const section = document.createElement("section");
    section.classList.add("attraction");

    // Use innerHTML to build display content
    section.innerHTML = `
    <div class="attraction-card">
      ${place.imageUrl ? `<img src="${place.imageUrl}" alt="${place.name} Image" class="attraction-image">` : ""}
      <h2 class="attraction-title">${place.name}</h2>
      <p><strong>Location:</strong> ${place.location}</p>
      <p class="description">${place.description}</p>

      <h3>How to Get There</h3>
      <p class="how-to-get">${place.howToGetThere}</p>

      ${place.nearbyAccommodations?.length ? `
        <h3>Nearby Accommodations</h3>
        <ul class="accommodations">
          ${place.nearbyAccommodations.map(acc => `<li>${acc}</li>`).join("")}
        </ul>
      ` : ""}

      ${place.localFoodToTry?.length ? `
        <h3>Local Food to Try</h3>
        <ul class="local-food">
          ${place.localFoodToTry.map(food => `<li>${food}</li>`).join("")}
        </ul>
      ` : ""}

      ${place.notableNearbyAttractions?.length ? `
        <h3>Notable Nearby Attractions</h3>
        <ul class="nearby-attractions">
          ${place.notableNearbyAttractions.map(item => `<li>${item}</li>`).join("")}
        </ul>
      ` : ""}

      ${place.activities?.length ? `
        <h3>Activities</h3>
        <ul class="activities">
          ${place.activities.map(act => `<li>${act}</li>`).join("")}
        </ul>
      ` : ""}

      <p><strong>Best Time to Visit:</strong> ${place.bestTimeToVisit}</p>

      ${place.travelTipsAndSafety?.length ? `
        <h3>Travel Tips & Safety</h3>
        <ul class="tips-safety">
          ${place.travelTipsAndSafety.map(tip => `<li>${tip}</li>`).join("")}
        </ul>
      ` : ""}

      <p><strong>Entrance Fee:</strong> ${place.entranceFee}</p>
      <p><strong>Opening Hours:</strong> ${place.openingHours}</p>
    </div>
  `;

    // Append section to main
    main.appendChild(section);
});
