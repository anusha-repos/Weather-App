const apiKey = "YOUR_ACTUAL_API_KEY";

async function getWeather() {

    const city = document.getElementById("city").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (data.cod == "404") {
            document.getElementById("result").innerHTML =
                "<p>City not found!</p>";
            return;
        }

        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <p> Temperature: ${data.main.temp}°C</p>
            <p>Feels Like: ${data.main.feels_like}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

    } catch (error) {

        console.error(error);

        document.getElementById("result").innerHTML =
            "<p>Failed to fetch weather data.</p>";
    }
}
