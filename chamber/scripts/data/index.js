const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const city = 'YOUR_CITY'; // Replace with your desired city
const units = 'metric'; // Use 'imperial' for Fahrenheit

async function getWeather() {
    try {
        // Fetch current weather data
        const responseCurrent = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`);
        const currentData = await responseCurrent.json();
        
        const currentTemp = currentData.main.temp;
        const currentDesc = currentData.weather[0].description;

        // Display current weather
        document.getElementById('current-temp').textContent = `Temperature: ${currentTemp} °C`;
        document.getElementById('current-desc').textContent = `Description: ${currentDesc}`;

        // Fetch 3-day forecast data
        const responseForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`);
        const forecastData = await responseForecast.json();

        // Extract forecast for the next 3 days
        for (let i = 1; i <= 3; i++) {
            const dayForecast = forecastData.list[i * 8]; // Every 8th entry is a new day in the 5-day forecast
            const dayTemp = dayForecast.main.temp;
            document.getElementById(`day${i}`).textContent = `Day ${i}: ${dayTemp} °C`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function
getWeather();





const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");
const displayContainer = document.getElementById("displayContainer");

if (gridBtn && listBtn && displayContainer) {
    gridBtn.addEventListener("click", () => {
        displayContainer.classList.add("grid");
        displayContainer.classList.remove("list");
    });

    listBtn.addEventListener("click", () => {
        displayContainer.classList.add("list");
        displayContainer.classList.remove("grid");
    });
} else {
    console.warn("Grid button, list button, or display container element not found.");
}
