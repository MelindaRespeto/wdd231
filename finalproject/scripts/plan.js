import { travelPlan } from "./plan.mjs";

// Get main container
const main = document.getElementById("plan-content");

if (!main) {
  console.warn("No #plan-content element found.");
} else {

  // ================= PLAN CONTENT =================
  const planSections = `
    <section class="plan-card" style="animation-delay: 0s">
      <h2>Transportation Guide</h2>
      <ul>
        ${travelPlan.transportation.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="plan-card" style="animation-delay: 0.1s">
      <h2>Where to Stay</h2>
      <ul>
        ${travelPlan.accommodations.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="plan-card" style="animation-delay: 0.2s">
      <h2>Suggested Itinerary</h2>
      ${travelPlan.itinerary.map(day => `
        <h3>${day.day}</h3>
        <ul>
          ${day.activities.map(act => `<li>${act}</li>`).join("")}
        </ul>
      `).join("")}
    </section>

    <section class="plan-card" style="animation-delay: 0.3s">
      <h2>Estimated Budget</h2>
      <ul>
        ${travelPlan.budgetEstimate.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="plan-card" style="animation-delay: 0.4s">
      <h2>Travel Tips & Safety</h2>
      <ul>
        ${travelPlan.travelTips.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `;

  main.innerHTML += planSections;
}

// ================= WEATHER SETUP =================
const weatherContainer = document.getElementById("weather");
const apiKey = "cc3edb3357b21d196ded7d792fb6aa70"; // Your OpenWeather API key
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
    // Apply fade-in animation
    weatherContainer.style.opacity = "0";
    weatherContainer.style.transform = "translateY(20px)";
    weatherContainer.style.animation = "fadeInUp 0.6s forwards 0.1s";

  } catch (err) {
    weatherContainer.innerHTML = "<p>Weather info unavailable.</p>";
    console.error(err);
  }
}

// Call weather function
getWeather();

// ================= FOOTER INFO =================
const dateEl = document.getElementById("date");
if (dateEl) dateEl.textContent = document.lastModified;

// ================= HAMBURGER MENU =================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

// ================= FORM HANDLING =================
// Optional JS enhancements (form uses GET, actual submission goes to form-result.html)
const travelForm = document.getElementById("travelForm");
if (travelForm) {
  travelForm.addEventListener("submit", (e) => {
    // No need to prevent default — GET submits via URL
    const name = travelForm.name.value.trim();
    const email = travelForm.email.value.trim();
    const destination = travelForm.destination.value;
    const days = travelForm.days.value;

    if (!name || !email || !destination || !days) {
      e.preventDefault();
      alert("Please fill out all fields before submitting your plan.");
    }
    // Additional optional validation could be added here
  });
}
