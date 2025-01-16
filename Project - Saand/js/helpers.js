// Format temperature in Celsius or Fahrenheit
function formatTemperature(temp, unit = "C") {
    return unit === "C" ? `${temp}°C` : `${((temp * 9) / 5 + 32).toFixed(1)}°F`;
}

// Show or hide the loading state
function displayLoading(state) {
    const weatherDisplay = document.getElementById("weatherDisplay");
    weatherDisplay.innerHTML = state ? "<p>Loading...</p>" : "";
}

// Update the background dynamically based on weather conditions
function updateBackground(condition) {
    const body = document.body;
    const weatherConditions = {
        Sunny: "linear-gradient(to bottom, #FFD54F, #FF8A65)",
        Rainy: "linear-gradient(to bottom, #4FC3F7, #0288D1)",
        Cloudy: "linear-gradient(to bottom, #B0BEC5, #78909C)",
        Snowy: "linear-gradient(to bottom, #E1F5FE, #B3E5FC)",
        Night: "linear-gradient(to bottom, #1C2833, #34495E)"
    };

    // Set background based on condition
    body.style.background = weatherConditions[condition] || "linear-gradient(to bottom, #2193b0, #6dd5ed)";
}
