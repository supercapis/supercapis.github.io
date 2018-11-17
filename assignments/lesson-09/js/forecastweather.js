let forecastSource = new XMLHttpRequest();
let url = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial";

forecastSource.open("GET", url, true);

forecastSource.send();

forecastSource.onload = function () {

    let forecastData = forecastRequest.response;
    console.log(forecastData);
    let forecast = [];
    let day = [];
    let i = 0;
    let weekday = "";
    forecastData.list.forEach(x => {
        let dateCheck = forecastData.list[i].dt_txt;
        if (dateCheck.includes("15:00:00")) {
            forecast.push(forecastData.list[i].main.temp);
            let d = new Date(dateCheck);
            day.push(d.getDay());
        }
        i++;
    });
    for (let i = 0; i <= 4; i++) {
        switch (day[i]) {
            case 0:
                weekday = "Sun";
                break;
            case 1:
                weekday = "Mon";
                break;
            case 2:
                weekday = "Tue";
                break;
            case 3:
                weekday = "Wed";
                break;
            case 4:
                weekday = "Thu";
                break;
            case 5:
                weekday = "Fri";
                break;
            case 6:
                weekday = "Sat";
                break;
        }

        document.getElementById("forecastDay" + i).innerHTML = Math.round(forecast[i]) + "&deg;F";
        document.getElementById("weekDay" + i).innerHTML = weekday;

    };


}
