// Add an event listener for the search button
document.getElementById("searchButton").addEventListener("click", () => {
    const location = document.getElementById("location").value;
    if (location) {
        fetchWeather(location);
    } else {
        alert("Please enter a location.");
    }
});

// Fetch weather data and update the display
async function fetchWeather(location) {
    try {
        displayLoading(true); // Show loading state
        const data = await getWeatherData(location);
        if (data) {
            updateWeatherDisplay(data);
        } else {
            alert("Weather data not found. Please try again.");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        alert("An error occurred while fetching weather data. Please try again later.");
    } finally {
        displayLoading(false); // Hide loading state
    }
}

// Update the weather display dynamically
function updateWeatherDisplay(data) {
    const weatherDisplay = document.getElementById("weatherDisplay");
    const { temperature, weather_descriptions, humidity, wind_speed, location, weather_icons } = data;

    weatherDisplay.innerHTML = `
        <h2>${location.name}, ${location.region}, ${location.country}</h2>
        <div class="icon">
            <img src="${weather_icons[0]}" alt="${weather_descriptions[0]}">
        </div>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${weather_descriptions[0]}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${wind_speed} km/h</p>
    `;

    // Update the background dynamically
    updateBackground(weather_descriptions[0]);
}
