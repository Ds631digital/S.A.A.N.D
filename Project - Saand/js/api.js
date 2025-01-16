const API_KEY = "YOUR_WEATHERSTACK_API_KEY"; // Replace with your Weatherstack API key
const BASE_URL = "http://api.weatherstack.com/current";

// Fetch weather data from the API
async function getWeatherData(location) {
    try {
        const response = await fetch(`${BASE_URL}?access_key=${API_KEY}&query=${location}`);
        const data = await response.json();

        if (data.success === false) {
            console.error("API Error:", data.error.info);
            return null;
        }

        return {
            location: data.location,
            temperature: data.current.temperature,
            weather_descriptions: data.current.weather_descriptions,
            humidity: data.current.humidity,
            wind_speed: data.current.wind_speed,
            weather_icons: data.current.weather_icons
        };
    } catch (error) {
        console.error("Error in API call:", error.message);
        return null;
    }
}
