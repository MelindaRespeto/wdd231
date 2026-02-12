// main.js
import { places } from "./module.js";

const content = document.getElementById("content");

places.forEach(place => {
    const section = document.createElement("section");

    const title = document.createElement("h2");
    title.textContent = place.title;

    const img = document.createElement("img");
    img.src = place.imageUrl;
    img.alt = place.title;

    const desc = document.createElement("p");
    desc.innerHTML = place.description.trim();

    section.appendChild(img);
    section.appendChild(title);
    section.appendChild(desc);

    content.appendChild(section);
});
