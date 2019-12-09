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



// Start of form for the reservation page

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector('#submit').addEventListener("click", processData);
  })
  
  let reservations = [];
  let processData = (event) => {
    // stop the form from submitting
    event.preventDefault();
    let reservation = {
    guests: document.querySelector('#guests').value,
    resDate: document.querySelector('#resDate').value
    }
  // adds reservation to the end of the array of all reservations
  reservations.push(reservation);
  // reset the first, and only, form
  document.forms[0].reset;
  // see results in console
  console.log('newRes', {reservations});
  
  
    // Store to session Storage
    window.sessionStorage.setItem("reservations", JSON.stringify(reservations));
    // Retrieve from session storage
    let resList = JSON.parse(window.sessionStorage.getItem("reservations"));
    console.log(resList);
    
    // inject to the page
  const resDetails = document.querySelector("#resResult pre");
  resDetails.textContent = "\n" + JSON.stringify(reservations, "\t", 2);
    
  // display the results
  document.querySelector("#resResult").classList.remove("hide");
  
  }

// end reservation form 