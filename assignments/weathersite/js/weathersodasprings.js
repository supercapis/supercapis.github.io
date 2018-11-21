//This file pushes api to the Weather Summary//
let weatherSource = new XMLHttpRequest();
let url = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial";

weatherSource.open("GET", url, true);

weatherSource.send();

weatherSource.onload = function() {
    let weatherInfo = JSON.parse(weatherSource.responseText);
    console.log(weatherInfo);

    document.getElementById("rightnow").innerHTML = weatherInfo.weather["0"].description;
    document.getElementById("precip").innerHTML = weatherInfo.weather["0"].description;
    document.getElementById("currenttemp").innerHTML = weatherInfo.main.temp;
    document.getElementById("humid").innerHTML = weatherInfo.main.humidity;
    document.getElementById("windspeed").innerHTML = weatherInfo.wind.speed;

    let weatherIcon = weatherInfo.weather["0"].icon;
    let iconLocation = "https://openweathermap.org/img/w/" + weatherIcon + ".png";

    document.getElementById("conditionsnow").src = iconLocation;
    document.getElementById("now").innerHTML = weatherInfo.weather["0"].main;
    
     //I embedded this code to calculate windchill properly//

     let currenttemp = parseFloat(document.getElementById('currenttemp').innerHTML);
     let windspeed = parseFloat(document.getElementById('windspeed').innerHTML);
     var f = 35.74 + 0.6215 * currenttemp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * currenttemp * Math.pow(windspeed, 0.16);
     document.getElementById("windchill").innerHTML = Math.round(f);
}