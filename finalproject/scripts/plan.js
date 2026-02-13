import { travelPlan } from "./plan.mjs";

const main = document.getElementById("plan-content");

if (!main) {
    console.warn("No #plan-content element found.");
}

// Build HTML dynamically
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

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Last modified
const dateEl = document.getElementById("date");
if (dateEl) dateEl.textContent = document.lastModified;
