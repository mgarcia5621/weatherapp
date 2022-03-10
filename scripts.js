let weather = {
    "apiKey": "fc711781e117e5777f4dba612ee8d94d",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
        ).then((repsonse) => repsonse.json())
        .then((data) => {
            this.displayWeather(data);
        });

    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".wind").innerText = speed + " km/h";
    }
};

weather.fetchWeather("Cibolo");

