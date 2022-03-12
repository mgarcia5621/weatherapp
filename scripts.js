let lon;
let lat;
let weather = {
    "apiKey": "fc711781e117e5777f4dba612ee8d94d",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
        ).then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.displayWeather(data);
        });
    },
    fetchWeatherLatLon: function() {
        fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${this.apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data[0].name);
                this.fetchWeather(data[0].name)
            });
    },    
    getGeoPosition: function() {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            weather.fetchWeatherLatLon();
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
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".temp").innerText = fahrenheit + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind: " + speed + " km/h";
        document.querySelector(".description").innerText = description;
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
    if (event.code === "Enter") {
        weather.search();
    }
});

weather.getGeoPosition();
