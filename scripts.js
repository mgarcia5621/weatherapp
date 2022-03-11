let weather = {
    "apiKey": "fc711781e117e5777f4dba612ee8d94d",
    fetchWeather: function(city, lon, lat) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
        ).then((repsonse) => repsonse.json())
        .then((data) => {
            this.displayWeather(data);
        });
    },    
    getGeoPosition: function() {
        navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        },
        function (error) {
            console.log("The Locator was denied. :(")
        })
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        let fahrenheit = Math.round((temp * 9/5) + 32);
        console.log(name, icon, description, temp, humidity);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".temp").innerText = fahrenheit + "°F";
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".wind").innerText = speed + " km/h";
        document.querySelector(".description").innerText = description + " km/h";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search button")
.addEventListener("click", function() {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keydown", function (event) {
    if (event == "Enter") {
        weather.search();
    }
});

weather.getGeoPosition();
