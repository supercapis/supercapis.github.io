let currenttemp = parseFloat(document.getElementById('currenttemp').innerHTML);
let windspeed = parseFloat(document.getElementById('windspeed').innerHTML);
var f= 35.74 + 0.6215 * currenttemp - 35.75 * Math.pow(windspeed,0.16) + 0.4275 * currenttemp *Math.pow(windspeed,0.16);
document.getElementById("windchill").innerHTML= Math.round(f);