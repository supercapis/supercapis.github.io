let weatherObject = new XMLHttpRequest();
weatherObject.open = 'https://api.openweathermap.org/data/2.5/weather?id=2172797';
weatherObject.send();
weatherObject.onload = function () {
    let weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('city').innerHTML = weatherInfo.name;
    let temperature = weatherInfo.main.temp;
    let wind = weatherInfo.wind.speed;
    let humidity = weatherInfo.main.humidity;
    let windchill = (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temperature * Math.pow(wind, 0.16)));
    let heatIndexCalc = (-42.379 + (2.049 * temperature) + (10.1433 * humidity) + (-0.2248 * temperature * humidity) + (-0.006837 * temperature * temperature) + (-0.05482 * humidity * humidity) + (0.001229 * temperature * temperature * humidity) + (0.00085282 * temperature * humidity * humidity) + (-0.00000199 * temperature * temperature * humidity * humidity));
    let tempHigh = weatherInfo.main.temp_max;
    let tempLow = weatherInfo.main.temp_min;
    document.getElementById('currentTemp').innerHTML = Math.round(parseFloat(temperature));
    document.getElementById('description').innerHTML = weatherInfo.weather["0"].main;
    let iconcode = weatherInfo.weather["0"].icon;
    let icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
    if (temperature > 80) {
        document.getElementById('windChill').innerHTML = "Heat Index: " + Math.round(parseFloat(heatIndexCalc));
    }
    else if (temperature > windchill) {
        document.getElementById('windChill').innerHTML = "Windchill: " + Math.round(parseFloat(windchill));
    } else {
        document.getElementById('windChill').innerHTML = "Feels like: " + Math.round(parseFloat(temperature));
    }

    document.getElementById('windSpeed').innerHTML = Math.round(parseFloat(wind));
    document.getElementById('highTemp').innerHTML = Math.round(parseFloat(tempHigh));
    document.getElementById('lowTemp').innerHTML = Math.round(parseFloat(tempLow));

}