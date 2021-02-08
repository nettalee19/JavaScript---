
let date = new Date();



let dayDate = date.getDate();

let dayNum = date.getDay();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let dayName = weekday[dayNum];

let monthNum = date.getMonth();
let month = new Array();
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

let monthName = month[monthNum];

let year = date.getFullYear();

function today(dayName, dayDate, monthName, year){
  console.log("Today is " + dayName + " the " + dayDate + " of " + monthName + ", " + year)
}

function nextWeek(dayName, dayDate, monthName, year){
  let newDate = new Date();
  new.Date.setDate(newDate.getDate()+)
}

// console.log("Today is: " + dayName);
// console.log("Current day of the month is: " + dayDate);
// console.log("The month is: " + monthName);
// console.log("The year is: " + year);

// today(dayName, dayDate, monthName, year);

nextWeek();