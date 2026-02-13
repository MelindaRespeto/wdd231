import { bikolattraction } from "./bikolattraction.mjs";

// Get reference to <main> container
const main = document.getElementById("attractions-content");

if (!main) {
  console.warn("No #attractions-content element found in the HTML.");
}

// Loop through the array of attractions
bikolattraction.forEach(place => {
  const section = document.createElement("section");
  section.classList.add("attraction");

  // Build the HTML for each place
  section.innerHTML = `
    <!-- First image floats left for text wrapping -->
    ${place.imageUrl?.length ? `<img src="${place.imageUrl[0]}" alt="${place.name}" class="wrap-left" loading="lazy">` : ""}

    <div class="attraction-card">
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

      <!-- Additional images -->
      ${place.imageUrl?.length > 1 ? place.imageUrl.slice(1).map(img => `<img src="${img}" alt="${place.name} Image" loading="lazy">`).join("") : ""}
    </div>
  `;

  // ✅ JUST MOVED HERE (nothing changed)
  if (place.imageUrl && place.imageUrl.length > 1) {

    const gallery = document.createElement("div");
    gallery.classList.add("image-gallery");

    place.imageUrl.slice(1).forEach(img => {
      const thumb = document.createElement("img");
      thumb.src = img;
      thumb.alt = place.name;
      thumb.loading = "lazy";

      thumb.onclick = () => {
        const mainImg = section.querySelector(".wrap-left");
        if (mainImg) mainImg.src = img;
      };

      gallery.appendChild(thumb);
    });

    section.querySelector(".attraction-card").appendChild(gallery);
  }

  main.appendChild(section);
});

// Update footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Last modified date
const dateEl = document.getElementById("date");
if (dateEl) dateEl.textContent = document.lastModified;
