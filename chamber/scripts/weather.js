const apiKey = "61a2ec3b2e4ae623378cfceca63a884d"; // Replace with your OpenWeatherMap API key

const lat = 14.5995;  // Manila latitude
const lon = 120.9842; // Manila longitude

// DOM Elements
const currentTemp = document.getElementById("current-temp");
const weatherDesc = document.getElementById("weather-desc");
const weatherIcon = document.getElementById("weather-icon");
const day1Name = document.getElementById("day1-name");
const day1Temp = document.getElementById("day1-temp");
const day2Name = document.getElementById("day2-name");
const day2Temp = document.getElementById("day2-temp");
const day3Name = document.getElementById("day3-name");
const day3Temp = document.getElementById("day3-temp");

// API URL for 5-day / 3-hour forecast
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        // Current weather = first item
        const current = data.list[0];
        currentTemp.textContent = `${Math.round(current.main.temp)}°C`;
        weatherDesc.textContent = current.weather[0].description;
        weatherIcon.src = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
        weatherIcon.alt = current.weather[0].description;

        // 3-day forecast (one forecast per day at ~12:00)
        const forecastDays = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // Day 1
        const day1 = new Date(forecastDays[0].dt_txt);
        day1Name.textContent = dayNames[day1.getDay()];
        day1Temp.textContent = `${Math.round(forecastDays[0].main.temp)}°C`;

        // Day 2
        const day2 = new Date(forecastDays[1].dt_txt);
        day2Name.textContent = dayNames[day2.getDay()];
        day2Temp.textContent = `${Math.round(forecastDays[1].main.temp)}°C`;

        // Day 3
        const day3 = new Date(forecastDays[2].dt_txt);
        day3Name.textContent = dayNames[day3.getDay()];
        day3Temp.textContent = `${Math.round(forecastDays[2].main.temp)}°C`;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        currentTemp.textContent = "--°C";
        weatherDesc.textContent = "Weather data unavailable";
        day1Temp.textContent = day2Temp.textContent = day3Temp.textContent = "--°C";
    }
}

// Call the function
getWeather();
