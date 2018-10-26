/* Include in the footer the current date dynamically in the following format: Monday, 6 April 2020. */

//--------------------------WEEKDAY---------------------------//

let d = new Date();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = weekday[d.getDay()]

//--------------------------DATE----------------------------------//

let o = d.getDate()

//--------------------------MONTH-------------------------------//

let month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let p = month[d.getMonth()]

//---------------------------YEAR-------------------------------//

let q = d.getFullYear()

//-------------------------CONCATENATION------------------------//

let myOutput = n + ", " + o + " " + p + " " + q
document.getElementById("currentdate").innerHTML = n + ", " + o + " " + p + " " + q;