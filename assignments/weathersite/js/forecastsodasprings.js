//This file pushes api to the 5 days forecast table//

let fRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=928cdffb6f7b8cf5714b4c2f8047e814&units=imperial';
let fRequest = new XMLHttpRequest();
fRequest.open('GET', fRequestURL);
fRequest.responseType = 'json';
fRequest.send();
fRequest.onload = function () {
    let fData = fRequest.response;
    console.log(fData);
    let f = [];
    let day = [];
    let i = 0;
    let weekday = "";
    fData.list.forEach(x => {
        let dateCheck = fData.list[i].dt_txt;
        if (dateCheck.includes("15:00:00")) {
            f.push(fData.list[i].main.temp);
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

        document.getElementById("fDay" + i).innerHTML=Math.round(f[i]) + "&deg;F";
        document.getElementById("wDay" + i).innerHTML=weekday;

    };


}

