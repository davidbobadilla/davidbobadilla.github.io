'use strict';
// Setup sessionStorage
var sessStore = window.sessionStorage;
// Setup localStorage
var locStore = window.localStorage;

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);





document.addEventListener("DOMContentLoaded", function(){

//Get closure json data
let templeURL = "/temple-inn/jasonfinished.json";
fetchTempleData(templeURL);


})


/* *************************************
*  Fetch Temple Data
************************************* */
function fetchTempleData(templeURL){
  let cityName = 'Rexburg'; // The data we want from the weather.json file
  fetch(templeURL)
  .then(function(response) {
  if(response.ok){
  return response.json();
  }
  throw new ERROR('Network response was not OK.');
  })
  .then(function(data){
    // Check the data object that was retrieved
    console.log(data);
    // data is the full JavaScript object, but we only want the preston part
    // shorten the variable and focus only on the data we want to reduce typing
    let p = data;

    // **********  Get the location information  **********
    let rexburg = p.Rexburg.December;
    console.log(rexburg);
    let locState = p.properties.relativeLocation.properties.state;
    // Put them together
    let fullName = locName+', '+locState;
    // See if it worked, using ticks around the content in the log
    console.log(`fullName is: ${fullName}`);
    // Get the longitude and latitude and combine them to
    // a comma separated single string
    const latLong = p.properties.relativeLocation.geometry.coordinates[1] + ","+ p.properties.relativeLocation.geometry.coordinates[0];
    console.log(`The coordinates are: ${latLong}`);
    // Create a JSON object containing the full name, latitude and longitude
    // and store it into local storage.
    const prestonData = JSON.stringify({fullName,latLong});
    locStore.setItem("Preston,ID", prestonData);
    // **********  Get the current conditions information  **********
    // As the data is extracted from the JSON, store it into session storage
    sessStore.setItem("fullName",fullName);
    sessStore.setItem("latLong",latLong);
    // Get the temperature data
    const tempera = p.properties.relativeLocation.properties.temperature;
    sessStore.setItem("temperature",tempera);
    console.log(`Temperature is: ${tempera}`);

    // Get the wind data 
    const windSpeed = p.properties.relativeLocation.properties.windSpeed;
    sessStore.setItem("WindSpeed",windSpeed);
    console.log(`The Windspeed is: ${windSpeed}`);

    // Get wind Gust data
    const windGust = p.properties.relativeLocation.properties.windGust;
    sessStore.setItem("WindGust", windGust);
    console.log(`The Wind Gust is: ${windGust}`);

    //Get high temperature
    const highTemp = p.properties.relativeLocation.properties.highTemp;
    sessStore.setItem("highTemp",highTemp);
    console.log(`The high temperature is: ${highTemp}`);

    //Get low temperature
    const lowTemp = p.properties.relativeLocation.properties.lowTemp;
    sessStore.setItem("lowTemp",lowTemp);
    console.log(`The low temperature is: ${lowTemp}`);

    
  })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
}




































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











































// example
$("#reservation-form").addEventListener('submit', function(event){event.preventDefault();});

function getContactFormData() {
    let fullName = $("#full-name");
    let emailAddress = $("#email-address");
    let subject = $("#subject");
    let message = $("#message");
    sesStor.setItem("contact-fullName", fullName.value);
    sesStor.setItem("contact-emailAddress", emailAddress.value);
    sesStor.setItem("contact-subject", subject.value);
    sesStor.setItem("contact-message", message.value);
    console.log(`getContactFormData(): Successfully stored the contact form data into session storage.`);
  }
  
  function processReservationData() {
    let reservation = {
      location: $("#res-location").value,
      checkInDate: $("#res-check-in-date").value,
      checkOutDate: $("#res-check-out-date").value,
      roomType: $("#res-room-type").value,
      numberOfRooms: $("#res-num-of-rooms").value,
      firstName: $("#res-first-name").value,
      lastName: $("#res-last-name").value,
      emailAddress: $("#res-email-address").value,
      phoneNumber: $("#res-phone-number").value,
      country: $("#res-country").value,
      state: $("#res-state").value
    }
    console.log(`Value of reservation object:`);
    console.log(reservation);
  
    sesStor.setItem("reservation", JSON.stringify(reservation)); // store to session storage
    // document.forms[0].reset; // reset form
    // console.log("Reset form");
  
    reservationForm.classList.add("hide");
    reservationStatus.classList.remove("hide");
    console.log("Hid reservation form, showed status box");
  
    buildReservationConfirmation();
  }
  
  function buildReservationConfirmation() {
    let reservation = JSON.parse(sesStor.getItem("reservation"));
    console.log("Value of JSON parsed from session storage: ");
    console.log(reservation);
  
    // build confirmation
    let reservedRoomType;
    switch (reservation.roomType) {
      case "bed1":
        reservedRoomType = "One King Bed, Regular room";
        break;
      case "bed2":
        reservedRoomType = "Two Queen Beds, Regular room";
        break;
      case "suite1":
        reservedRoomType = "One Queen Bed, Suite with Kitchenette";
        break;
      case "suite2":
        reservedRoomType = "One King Bed, Suite with Kitchenette";
        break;
    }
    console.log(`Reserved room type: ${reservedRoomType}`);
  
    $("#conf-name").innerHTML = "Name: " + reservation.firstName + " " + reservation.lastName;
    $("#conf-email-address").innerHTML = "Email Address: " + reservation.emailAddress;
    $("#conf-phone-number").innerHTML = "Phone Number: " + reservation.phoneNumber;
    $("#conf-country-state").innerHTML = "Country and State: " + reservation.state + ", " + reservation.country;
    $("#conf-location").innerHTML = "Hotel Location: " + reservation.location;
    $("#conf-check-in").innerHTML = "Check-in Date: " + reservation.checkInDate;
    $("#conf-check-out").innerHTML ="Check-out Date: " + reservation.checkOutDate;
    $("#conf-room-type").innerHTML = "Room type: " + reservedRoomType;
    $("#conf-number-of-rooms").innerHTML = "Number of Rooms: " + reservation.numberOfRooms;
  
    console.log("Set value of reservation confirmation");
  
    reservationStatus.classList.add("hide");
    reservationConfirmation.classList.remove("hide");
  
    console.log("Hid reservation status, showing confirmation.");
  
  }