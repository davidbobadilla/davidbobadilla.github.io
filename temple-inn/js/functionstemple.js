'use strict';
// Setup sessionStorage
var sessStore = window.sessionStorage;
// Setup localStorage
var locStore = window.localStorage;

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);



function current() {
    var todaysDate = new Date();
    const longDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayName = longDayNames[todaysDate.getDay()];
    const longMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = longMonthNames[todaysDate.getMonth()];
    document.getElementById("current").innerHTML = dayName + ", " + todaysDate.getDate() + " " + monthName + " " + todaysDate.getFullYear();
}
//Does the data for our page
function copyright() {
    var todaysDate = new Date();
    var current = todaysDate.getFullYear();
    document.getElementById('copyright').innerHTML = "&copy; " + current;
}


window.onload = current();
window.onload = copyright();