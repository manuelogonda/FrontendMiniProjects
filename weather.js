const apiKey = "848a1408634a22023838c3db9d9e5fb5";
const cityName = document.getElementById("cityName");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherInfo = document.getElementById("weatherInfo");


getWeatherBtn.addEventListener("click", (e) => {
    const city = cityName.value.trim();
    if (city === "") {
        weatherInfo.innerHTML = "<p class='error'>Please enter a city name.</p>";
        return;
    }
    weatherInfo.innerHTML = "<p class= 'loading'>Loading weather data...</p>";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => {
        if(!response.ok){
            throw new Error("City not found");
        }
        return response.json();
    })
    .then(data => {
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const country = data.sys.country;
        
        weatherInfo.innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>Temperature: ${temp}&deg;C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${wind}m/s</p>
        <p>Condition: ${description}</p>
        <p>Country: ${country}</p>
        `;
    })
    .catch(error => {
        weatherInfo.innerHTML = `<p class='error'>${error.message}</p>`;
    });
})
