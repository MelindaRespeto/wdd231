const apiKey = '02f4f1a3bc4c0aaa11c306e5a1c2a451'; // Replace with your actual API key
const city = 'Naga City, PH'; // Check if this is the correct city name (add "PH" for the country code)
const units = 'imperial'; // Use 'imperial' for Fahrenheit

let allMembers = []; // Variable to hold all members data

async function getWeather() {
    try {
        // Fetch current weather data
        const responseCurrent = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`);

        // Check if response is OK
        if (!responseCurrent.ok) {
            throw new Error(`Current weather request failed with status ${responseCurrent.status}`);
        }

        const currentData = await responseCurrent.json();

        // Log current data for debugging
        console.log('Current Weather Data:', currentData);

        // Extract weather data
        if (currentData.main) {
            const currentTemp = Math.round(currentData.main.temp); // Rounding temperature to 0 decimal places

            // Capitalize all weather descriptions
            const weatherDescriptions = currentData.weather.map(event => event.description.toUpperCase()).join(', '); // Joining multiple descriptions

            // Display current weather
            document.getElementById('current-temp').textContent = `Temperature: ${currentTemp} °F`;
            document.getElementById('current-desc').textContent = `Description: ${weatherDescriptions}`;
        } else {
            throw new Error('Invalid current weather data received');
        }

        // Fetch 3-day forecast data
        const responseForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`);

        // Check if forecast response is OK
        if (!responseForecast.ok) {
            throw new Error(`Forecast request failed with status ${responseForecast.status}`);
        }

        const forecastData = await responseForecast.json();

        // Log forecast data for debugging
        console.log('Forecast Data:', forecastData);

        // Extract forecast for the next 3 days
        for (let i = 1; i <= 3; i++) {
            const dayForecast = forecastData.list[i * 8]; // Every 8th entry is roughly a new day in the 5-day forecast
            if (dayForecast) {
                const dayTemp = Math.round(dayForecast.main.temp); // Rounding forecast temperatures
                document.getElementById(`day${i}`).textContent = `Day ${i}: ${dayTemp} °F`;
            } else {
                document.getElementById(`day${i}`).textContent = `Day ${i}: No data available`;
            }
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('current-temp').textContent = 'Unable to load weather data';
        document.getElementById('current-desc').textContent = 'Please try again later.';
    }
}

async function getBusinessMembers() {
    try {
        const response = await fetch('scripts/data/members.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch members data: ${response.status}`);
        }

        return await response.json(); // Return the members data
    } catch (error) {
        console.error('Error fetching business members:', error);
    }
}

// Function to display members
function displayMembers(members) {
    const businessContainer = document.getElementById('businessContainer');
    businessContainer.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('business-member');
        memberDiv.innerHTML = `
            <img src="${member.image}" alt="${member.name}" width="100" height="100">
            <h4>${member.name}</h4>
            <p>Address: ${member.address}</p>
            <p>Contact: ${member.phone_number}</p>
            <a href="${member.url}" target="_blank">Visit Website</a>
        `;
        businessContainer.appendChild(memberDiv);
    });
}

// Function to display all members
function displayAllMembers(members) {
    displayMembers(members); // Reuse the displayMembers function
}

// Fetch all members and store them in the variable
async function fetchAndStoreMembers() {
    const members = await getBusinessMembers();
    if (members) {
        allMembers = members; // Store all members data
        displayAllMembers(allMembers); // Display all members initially
    }
}

// Event listener for the gold members button
document.getElementById('goldBtn').addEventListener('click', () => {
    const goldMembers = allMembers.filter(member => member.level === 'gold');
    displayMembers(goldMembers);
});

// Event listener for the silver members button
document.getElementById('silverBtn').addEventListener('click', () => {
    const silverMembers = allMembers.filter(member => member.level === 'silver');
    displayMembers(silverMembers);
});

// Event listener for the all members button
document.getElementById('allMembersBtn').addEventListener('click', () => {
    displayAllMembers(allMembers);
});

// Call the function to get the weather and fetch members when the page loads
getWeather();
fetchAndStoreMembers();
