// populateAttractions.js
import { bikolAttraction } from "./bikolAttractions.mjs";

const main = document.getElementById("attractions-content");

bikolAttraction.forEach(place => {
    const section = document.createElement("section");
    section.id = place.id;
    section.classList.add("attraction");

    section.innerHTML = `
    <h2>${place.name}</h2>
    <p><strong>Location:</strong> ${place.location}</p>
    <p>${place.description}</p>

    <h3>How to Get There</h3>
    <p>${place.howToGetThere}</p>

    <h3>Nearby Accommodations</h3>
    <ul>
      ${place.nearbyAccommodations.map(item => `<li>${item}</li>`).join("")}
    </ul>

    <h3>Local Food to Try</h3>
    <ul>
      ${place.localFoodToTry.map(food => `<li>${food}</li>`).join("")}
    </ul>

    <h3>Activities</h3>
    <ul>
      ${place.activities.map(activity => `<li>${activity}</li>`).join("")}
    </ul>

    <p><strong>Best Time to Visit:</strong> ${place.bestTimeToVisit}</p>

    <h3>Travel Tips and Safety</h3>
    <ul>
      ${place.travelTipsAndSafety.map(tip => `<li>${tip}</li>`).join("")}
    </ul>

    <p><strong>Entrance Fee:</strong> ${place.entranceFee}</p>
    <p><strong>Opening Hours:</strong> ${place.openingHours}</p>
  `;

    main.appendChild(section);
});
