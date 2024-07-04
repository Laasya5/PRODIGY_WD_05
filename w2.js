document.getElementById('fetchWeatherBtn').addEventListener('click', fetchWeather);

function fetchWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '0200d6d2344ef4c418972b5fea1055d4';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherDisplay = document.getElementById('weatherDisplay');
            weatherDisplay.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            const weatherDisplay = document.getElementById('weatherDisplay');
            weatherDisplay.innerHTML = `<p>${error.message}</p>`;
        });
}
