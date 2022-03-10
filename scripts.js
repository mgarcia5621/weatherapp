let weather = {
    "apiKey": "fc711781e117e5777f4dba612ee8d94d",
    fetchWeather: function() {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid="
        +city
        +this.apiKey
        ).then((repsonse) => repsonse.json())
        .then((data) => this.displayWeather(data));

    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector("city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/01n@2x.png"
    }
};

