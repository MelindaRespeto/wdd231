// plan.js
import { travelPlan } from "./plan.mjs";

const main = document.getElementById("plan-content");

if (!main) console.warn("No #plan-content element found.");
else {
  // ================= PLAN CONTENT =================
  const planSections = `
    <section class="plan-card">
      <h2>Transportation Guide</h2>
      <ul>
        ${travelPlan.transportation.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="plan-card">
      <h2>Where to Stay</h2>
      <ul>
        ${travelPlan.accommodations.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="plan-card">
      <h2>Suggested Itinerary</h2>
      ${travelPlan.itinerary.map(day => `
        <h3>${day.day}</h3>
        <ul>
          ${day.activities.map(act => `<li>${act}</li>`).join("")}
        </ul>
      `).join("")}
    </section>

    <section class="plan-card">
      <h2>Estimated Budget</h2>
      <ul>
        ${travelPlan.budgetEstimate.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="plan-card">
      <h2>Travel Tips & Safety</h2>
      <ul>
        ${travelPlan.travelTips.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <!-- Travel Form Section -->
    <section class="plan-card">
      <h2>Plan Your Trip</h2>
      <div id="selected-attraction-msg" style="margin-bottom:10px; font-weight:bold;"></div>
      <form id="travelForm" action="formresult.html" method="GET">
          <label for="name">Full Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required>

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required>

          <label for="destination">Preferred Destination:</label>
          <select id="destination" name="destination" required>
              <option value="">Select a destination</option>
              <option value="Bicol">Siruma</option>
              <option value="Caramoan">Caramoan</option>
              <option value="Gotha">Gotha</option>
              <option value="Legazpi">Legazpi</option>
          </select>

          <label for="days">Number of Travel Days:</label>
          <input type="number" id="days" name="days" min="1" max="14" placeholder="e.g., 3" required>

          <button type="submit">Submit Plan</button>
      </form>
    </section>
  `;
  main.innerHTML += planSections;
}

// ================= WEATHER SETUP =================
const weatherContainer = document.getElementById("weather");
const apiKey = "cc3edb3357b21d196ded7d792fb6aa70";
const city = "Legazpi,PH";

async function getWeather() {
  if (!weatherContainer) return;
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await res.json();
    if (data.cod !== 200) {
      weatherContainer.innerHTML = `<p>Weather info unavailable: ${data.message}</p>`;
      return;
    }
    weatherContainer.innerHTML = `
      <h2>Current Weather in ${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Condition: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (err) {
    weatherContainer.innerHTML = "<p>Weather info unavailable.</p>";
    console.error(err);
  }
}
getWeather();

// ================= DISPLAY SELECTED ATTRACTION =================
const savedAttraction = localStorage.getItem("selectedAttraction");
if (savedAttraction) {
  const msgEl = document.getElementById("selected-attraction-msg");
  const destinationSelect = document.getElementById("destination");

  if (msgEl) msgEl.textContent = `You selected: ${savedAttraction}`;

  if (destinationSelect) {
    for (let option of destinationSelect.options) {
      if (option.text.toLowerCase() === savedAttraction.toLowerCase()) {
        option.selected = true;
        break;
      }
    }
  }

  // Optional: clear after displaying
  localStorage.removeItem("selectedAttraction");
}

// ================= FOOTER DATE =================
const dateEl = document.getElementById("date");
if (dateEl) dateEl.textContent = document.lastModified;

// ================= HAMBURGER NAV =================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}
