// bikolAttraction.js
import { bikolAttraction } from "./bikolAttractions.mjs";

const main = document.getElementById("attractions-content");

if (!main) {
    console.error("No #attractions-content container found in HTML");
}

// Loop through all attractions
bikolAttraction.forEach(place => {
    // Create section container
    const section = document.createElement("section");
    section.id = place.id;
    section.classList.add("attraction");

    // Image (if available)
    if (place.imageUrl) {
        const img = document.createElement("img");
        img.src = place.imageUrl;
        img.alt = place.name;
        img.classList.add("attraction-image");
        section.appendChild(img);
    }

    // Title
    const title = document.createElement("h2");
    title.textContent = place.name;
    section.appendChild(title);

    // Location
    const loc = document.createElement("p");
    loc.innerHTML = `<strong>Location:</strong> ${place.location}`;
    section.appendChild(loc);

    // Description
    const desc = document.createElement("p");
    desc.textContent = place.description;
    section.appendChild(desc);

    // How to Get There
    const howTo = document.createElement("p");
    howTo.innerHTML = `<strong>How to Get There:</strong> ${place.howToGetThere}`;
    section.appendChild(howTo);

    // Nearby Accommodations
    if (place.nearbyAccommodations && place.nearbyAccommodations.length > 0) {
        const accomTitle = document.createElement("h3");
        accomTitle.textContent = "Nearby Accommodations";
        section.appendChild(accomTitle);

        const accomList = document.createElement("ul");
        place.nearbyAccommodations.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            accomList.appendChild(li);
        });
        section.appendChild(accomList);
    }

    // Local Food to Try
    if (place.localFoodToTry && place.localFoodToTry.length > 0) {
        const foodTitle = document.createElement("h3");
        foodTitle.textContent = "Local Food to Try";
        section.appendChild(foodTitle);

        const foodList = document.createElement("ul");
        place.localFoodToTry.forEach(food => {
            const li = document.createElement("li");
            li.textContent = food;
            foodList.appendChild(li);
        });
        section.appendChild(foodList);
    }

    // Notable Nearby Attractions
    if (place.notableNearbyAttractions && place.notableNearbyAttractions.length > 0) {
        const nearbyTitle = document.createElement("h3");
        nearbyTitle.textContent = "Notable Nearby Attractions";
        section.appendChild(nearbyTitle);

        const nearbyList = document.createElement("ul");
        place.notableNearbyAttractions.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            nearbyList.appendChild(li);
        });
        section.appendChild(nearbyList);
    }

    // Activities
    if (place.activities && place.activities.length > 0) {
        const actTitle = document.createElement("h3");
        actTitle.textContent = "Activities";
        section.appendChild(actTitle);

        const actList = document.createElement("ul");
        place.activities.forEach(activity => {
            const li = document.createElement("li");
            li.textContent = activity;
            actList.appendChild(li);
        });
        section.appendChild(actList);
    }

    // Best time to visit
    if (place.bestTimeToVisit) {
        const time = document.createElement("p");
        time.innerHTML = `<strong>Best Time to Visit:</strong> ${place.bestTimeToVisit}`;
        section.appendChild(time);
    }

    // Travel Tips and Safety
    if (place.travelTipsAndSafety && place.travelTipsAndSafety.length > 0) {
        const tipsTitle = document.createElement("h3");
        tipsTitle.textContent = "Travel Tips & Safety";
        section.appendChild(tipsTitle);

        const tipsList = document.createElement("ul");
        place.travelTipsAndSafety.forEach(tip => {
            const li = document.createElement("li");
            li.textContent = tip;
            tipsList.appendChild(li);
        });
        section.appendChild(tipsList);
    }

    // Entrance fee
    if (place.entranceFee) {
        const fee = document.createElement("p");
        fee.innerHTML = `<strong>Entrance Fee:</strong> ${place.entranceFee}`;
        section.appendChild(fee);
    }

    // Opening hours
    if (place.openingHours) {
        const hours = document.createElement("p");
        hours.innerHTML = `<strong>Opening Hours:</strong> ${place.openingHours}`;
        section.appendChild(hours);
    }

    // Append the whole section to main
    main.appendChild(section);
});
