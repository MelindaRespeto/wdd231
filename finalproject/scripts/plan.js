import { travelPlan } from "./plan.mjs";

const main = document.getElementById("plan-content");

if (!main) {
    console.warn("No #plan-content element found.");
}

// Build HTML dynamically (PLAN SECTIONS)
main.innerHTML = `

<section>
  <h2>Transportation Guide</h2>
  <ul>
    ${travelPlan.transportation.map(item => `<li>${item}</li>`).join("")}
  </ul>
</section>

<section>
  <h2>Where to Stay</h2>
  <ul>
    ${travelPlan.accommodations.map(item => `<li>${item}</li>`).join("")}
  </ul>
</section>

<section>
  <h2>Suggested Itinerary</h2>
  ${travelPlan.itinerary.map(day => `
    <h3>${day.day}</h3>
    <ul>
      ${day.activities.map(act => `<li>${act}</li>`).join("")}
    </ul>
  `).join("")}
</section>

<section>
  <h2>Estimated Budget</h2>
  <ul>
    ${travelPlan.budgetEstimate.map(item => `<li>${item}</li>`).join("")}
  </ul>
</section>

<section>
  <h2>Travel Tips & Safety</h2>
  <ul>
    ${travelPlan.travelTips.map(item => `<li>${item}</li>`).join("")}
  </ul>
</section>
`;

// ================= WEATHER SETUP =================
const weatherContainer = document.getElementById("weather");
const apiKey = "0bc6cd884ed3ae03e4ade361a21c5e92"; // <-- replace with your OpenWeatherMap key
const city = "Legazpi,PH";

async function getWeather() {
    try {
        const apiKey = "0bc6cd884ed3ae03e4ade361a21c5e92"; // put your API key as a string
        const city = "Legazpi,PH";

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        ;
        const data = await res.json();

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

// ================= FOOTER INFO =================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const dateEl = document.getElementById("date");
if (dateEl) dateEl.textContent = document.lastModified;
