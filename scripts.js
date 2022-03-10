let weather = {
    "apiKey": "fc711781e117e5777f4dba612ee8d94d",
    fetchWeather: function() {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=fc711781e117e5777f4dba612ee8d94d"
        ).then((repsonse) => repsonse.json())
        .then((data) => console.log(data));
    }
};

