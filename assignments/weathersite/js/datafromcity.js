let section = document.querySelector('section');
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
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
        let myPara1 = document.createElement('p');
        let myPara2 = document.createElement('p');
        let myPara3 = document.createElement('p');
        let myPara4 = document.createElement('p');
        let myImage = document.createElement("img");
        myH2.textContent = town[i].name;
        myPara1.textContent = 'Motto: ' + town[i].motto;
        myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
        myPara3.textContent = 'Population: ' + town[i].currentPopulation;
        myPara4.textContent = 'Annual Rainfall: ' + town[i].averageRainfall +' inches';
        myImage.setAttribute("src", "images/"+town[i].name+"-id.PNG");

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
