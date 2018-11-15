let section = document.querySelector('section');
const requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Preston';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let townData = request.response;
    showData(townData);
}


function showData(jsonObj) {
    let check = 1;
    let town = jsonObj['towns'];
    let section = document.getElementById("towndata");
    for (let i = 0; i < town.length; i++) {
        if (town[i].name == "Preston" || town[i].name == "Soda Springs" ||town[i].name == "Fish Haven")
        {
        let myArticle = document.createElement('article');
            myArticle.className = "townData";
        let myH2 = document.createElement('h2');
        let currenttemp = document.getElementById('currenttemp');
        
        myH2.textContent = town[i].name;
        currenttemp.textContent = 'Currently: ' + town[i].motto;
       

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myImage);
        section.appendChild(myArticle);
    }
    }
}
