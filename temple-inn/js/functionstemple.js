'use strict';
// Setup sessionStorage
var sessStore = window.sessionStorage;
// Setup localStorage
var locStore = window.localStorage;
var contentContainer = document.querySelector('#one');
var statusContainer = document.querySelector('#status');

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);





document.addEventListener("DOMContentLoaded", function(){

//Get closure json data
let templeURL = "/temple-inn/newfinished.json";
fetchTempleData(templeURL);

//Get closure1 json data
let templeURL1 = "/temple-inn/newfinished.json";
fetchTempleData1(templeURL1);

//Get closure2 json data
let templeURL2 = "/temple-inn/newfinished.json";
fetchTempleData2(templeURL2);

//Get closure3 json data
let templeURL3 = "/temple-inn/newfinished.json";
fetchTempleData3(templeURL3);
})


/* *************************************
*  Fetch Temple Rexburg Data
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

    // **********  Get the information from Rexburg **********
    let rexburg = p.Rexburg.Dates[2019].December;
    console.log(rexburg);
    // See if it worked, using ticks around the content in the log
    let rexburg2020a = p.Rexburg.Dates[2020].January;                   
    let rexburg2020b = p.Rexburg.Dates[2020].April; 
    let rexburg2020c = p.Rexburg.Dates[2020].July; 
    let rexburg2020d = p.Rexburg.Dates[2020].August; 
    let rexburg2020e = p.Rexburg.Dates[2020].September; 
    let rexburg2020h = p.Rexburg.Dates[2020].October; 
    let rexburg2020g = p.Rexburg.Dates[2020].November; 
    let rexburg2020f = p.Rexburg.Dates[2020].December;

    let TempleClosures = 'December 2019:'+rexburg +'<br>'+'January 2020: '+rexburg2020a +'<br>'+ 'April 2020: '+rexburg2020b +'<br>'+  'July 2020: '+rexburg2020c +'<br>'+ 'August 2020: '+rexburg2020d +'<br>'+ 'September 2020: '+rexburg2020e +'<br>' + 'October 2020: '+ rexburg2020h +'<br>'+'November 2020: '+rexburg2020g +'<br>' + 'December 2020: '+rexburg2020f
    console.log(`Date info is: ${TempleClosures}`);
    // Create a JSON object and store it into local storage.
    const rex = JSON.stringify(TempleClosures);
    locStore.setItem("Temple Closures", rex);
    // **********  Get the current conditions information  **********
    // As the data is extracted from the JSON, store it into session storage
    sessStore.setItem("Temple Closures",rex);

    
  })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
}

 // Get the h1 to display the city location
 let closure = document.querySelector('#one');
 closure.innerHTML = sessStore.getItem('Temple Closures');


//************************************************************************ */

/* *************************************
*  Fetch Temple Idaho Falls Data
************************************* */
function fetchTempleData1(templeURL1){
  let cityName = 'IdahoFalls'; // The data we want from the weather.json file
  fetch(templeURL1)
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

    // **********  Get the information from Idaho Falls **********
    let IdahoFalls = p.IdahoFalls.Dates[2019].December;
    console.log(IdahoFalls);
    // See if it worked, using ticks around the content in the log
    let IdahoFalls2020a = p.IdahoFalls.Dates[2020].January;                   
    let IdahoFalls2020b = p.IdahoFalls.Dates[2020].February; 
    let IdahoFalls2020c = p.IdahoFalls.Dates[2020].April; 
    let IdahoFalls2020d = p.IdahoFalls.Dates[2020].June; 
    let IdahoFalls2020e = p.IdahoFalls.Dates[2020].July; 
    let IdahoFalls2020h = p.IdahoFalls.Dates[2020].October; 
    let IdahoFalls2020g = p.IdahoFalls.Dates[2020].November; 
    let IdahoFalls2020f = p.IdahoFalls.Dates[2020].December;

    let TempleClosures1 = 'December 2019:'+IdahoFalls +'<br>'+'January 2020: '+IdahoFalls2020a +'<br>'+ 'February 2020: '+IdahoFalls2020b +'<br>'+  'April 2020: '+IdahoFalls2020c +'<br>'+ 'June 2020: '+IdahoFalls2020d +'<br>'+ 'July 2020: '+IdahoFalls2020e +'<br>' + 'October 2020: '+ IdahoFalls2020h  +'<br>'+'November 2020: '+IdahoFalls2020g  +'<br>' + 'December 2020: '+IdahoFalls2020f
    console.log(`Date info is: ${TempleClosures1}`);
    // Create a JSON object and store it into local storage.
    const falls = JSON.stringify(TempleClosures1);
    locStore.setItem("Temple Closures1", falls);
    // **********  Get the current conditions information  **********
    // As the data is extracted from the JSON, store it into session storage
    sessStore.setItem("Temple Closures1",falls);

    
  })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
}

 // Get the h1 to display the city location
 let closure1 = document.querySelector('#two');
 closure1.innerHTML = sessStore.getItem('Temple Closures1');

//************************************************************************ */




/* *************************************
*  Fetch Temple Los Angeles Data
************************************* */
function fetchTempleData2(templeURL2){
  let cityName = 'LosAngeles'; // The data we want from the weather.json file
  fetch(templeURL2)
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

    // **********  Get the information from Idaho Falls **********
    let LosAngeles = p.LosAngeles.Dates[2019].December;
    console.log(LosAngeles);
    // See if it worked, using ticks around the content in the log
    let LosAngeles2020a = p.LosAngeles.Dates[2020].January;                   
    let LosAngeles2020b = p.LosAngeles.Dates[2020].February; 
    let LosAngeles2020c = p.LosAngeles.Dates[2020].March; 
    let LosAngeles2020d = p.LosAngeles.Dates[2020].April; 
    let LosAngeles2020e = p.LosAngeles.Dates[2020].July; 
    let LosAngeles2020h = p.LosAngeles.Dates[2020].October; 
    let LosAngeles2020g = p.LosAngeles.Dates[2020].November; 
    let LosAngeles2020f = p.LosAngeles.Dates[2020].December;

    let TempleClosures2 = 'December 2019:'+LosAngeles +'<br>'+'January 2020: '+LosAngeles2020a +'<br>'+ 'February 2020: '+LosAngeles2020b +'<br>'+  'March 2020: '+LosAngeles2020c +'<br>'+ 'April 2020: '+LosAngeles2020d +'<br>'+ 'July 2020: '+LosAngeles2020e +'<br>' + 'October 2020: '+ LosAngeles2020h  +'<br>'+'November 2020: '+LosAngeles2020g  +'<br>' + 'December 2020: '+LosAngeles2020f
    console.log(`Date info is: ${TempleClosures2}`);
    // Create a JSON object and store it into local storage.
    const angeles = JSON.stringify(TempleClosures2);
    locStore.setItem("Temple Closures2", angeles);
    // **********  Get the current conditions information  **********
    // As the data is extracted from the JSON, store it into session storage
    sessStore.setItem("Temple Closures2",angeles);

    
  })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
}

 // Get the h1 to display the city location
 let closure2 = document.querySelector('#three');
 closure2.innerHTML = sessStore.getItem('Temple Closures2');

//************************************************************************** */


/* *************************************
*  Fetch Temple Los Angeles Data
************************************* */
function fetchTempleData3(templeURL3){
  let cityName = 'Provo'; // The data we want from the weather.json file
  fetch(templeURL3)
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

    // **********  Get the information from Idaho Falls **********
    let Provo = p.Provo.Dates[2019].December;
    console.log(Provo);
    // See if it worked, using ticks around the content in the log
    let Provo2020a = p.Provo.Dates[2020].January;                   
    let Provo2020b = p.Provo.Dates[2020].April; 
    let Provo2020c = p.Provo.Dates[2020].July; 
    let Provo2020d = p.Provo.Dates[2020].October; 
    let Provo2020e = p.Provo.Dates[2020].November; 
    let Provo2020h = p.Provo.Dates[2020].December; 

    let TempleClosures3 = 'December 2019:'+Provo +'<br>'+'January 2020: '+Provo2020a +'<br>'+ 'April 2020: '+Provo2020b +'<br>'+  'July 2020: '+Provo2020c +'<br>'+ 'October 2020: '+Provo2020d +'<br>'+ 'November 2020: '+Provo2020e +'<br>' + 'December 2020: '+ Provo2020h 
    console.log(`Date info is: ${TempleClosures3}`);
    // Create a JSON object and store it into local storage.
    const pro = JSON.stringify(TempleClosures3);
    locStore.setItem("Temple Closures3", pro);
    // **********  Get the current conditions information  **********
    // As the data is extracted from the JSON, store it into session storage
    sessStore.setItem("Temple Closures3",pro);

    
  })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
}

 // Get the h1 to display the city location
 let closure3 = document.querySelector('#four');
 closure3.innerHTML = sessStore.getItem('Temple Closures3');












//************************************************************************** */
// Change the status of the containers
// contentContainer.setAttribute('class', ''); // removes the hide class from main
contentContainer.classList.remove("hide");
statusContainer.setAttribute('class', 'hide'); // hides the status container


contentContainer.classList.remove("hide1");
statusContainer.setAttribute('class', 'hide'); // hides the status container

contentContainer.classList.remove("hide2");
statusContainer.setAttribute('class', 'hide'); // hides the status container

contentContainer.classList.remove("hide3");
statusContainer.setAttribute('class', 'hide'); // hides the status container



















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

// document.addEventListener("DOMContentLoaded", ()=>{
//     document.querySelector('#submit').addEventListener("click", processData);
//   })
  
//   let reservations = [];
//   let processData = (event) => {
//     // stop the form from submitting
//     event.preventDefault();
//     let reservation = {
//     guests: document.querySelector('#guests').value,
//     resDate: document.querySelector('#resDate').value
//     }
//   // adds reservation to the end of the array of all reservations
//   reservations.push(reservation);
//   // reset the first, and only, form
//   document.forms[0].reset;
//   // see results in console
//   console.log('newRes', {reservations});
  
  
//     // Store to session Storage
//     window.sessionStorage.setItem("reservations", JSON.stringify(reservations));
//     // Retrieve from session storage
//     let resList = JSON.parse(window.sessionStorage.getItem("reservations"));
//     console.log(resList);
    
//     // inject to the page
//   const resDetails = document.querySelector("#resResult pre");
//   resDetails.textContent = "\n" + JSON.stringify(reservations, "\t", 2);
    
//   // display the results
//   document.querySelector("#resResult").classList.remove("hide");
  
//   }

// end reservation form 











































// // example
// $("#reservation-form").addEventListener('submit', function(event){event.preventDefault();});

// function getContactFormData() {
//     let fullName = $("#full-name");
//     let emailAddress = $("#email-address");
//     let subject = $("#subject");
//     let message = $("#message");
//     sesStor.setItem("contact-fullName", fullName.value);
//     sesStor.setItem("contact-emailAddress", emailAddress.value);
//     sesStor.setItem("contact-subject", subject.value);
//     sesStor.setItem("contact-message", message.value);
//     console.log(`getContactFormData(): Successfully stored the contact form data into session storage.`);
//   }
  
//   function processReservationData() {
//     let reservation = {
//       location: $("#res-location").value,
//       checkInDate: $("#res-check-in-date").value,
//       checkOutDate: $("#res-check-out-date").value,
//       roomType: $("#res-room-type").value,
//       numberOfRooms: $("#res-num-of-rooms").value,
//       firstName: $("#res-first-name").value,
//       lastName: $("#res-last-name").value,
//       emailAddress: $("#res-email-address").value,
//       phoneNumber: $("#res-phone-number").value,
//       country: $("#res-country").value,
//       state: $("#res-state").value
//     }
//     console.log(`Value of reservation object:`);
//     console.log(reservation);
  
//     sesStor.setItem("reservation", JSON.stringify(reservation)); // store to session storage
//     // document.forms[0].reset; // reset form
//     // console.log("Reset form");
  
//     reservationForm.classList.add("hide");
//     reservationStatus.classList.remove("hide");
//     console.log("Hid reservation form, showed status box");
  
//     buildReservationConfirmation();
//   }
  
//   function buildReservationConfirmation() {
//     let reservation = JSON.parse(sesStor.getItem("reservation"));
//     console.log("Value of JSON parsed from session storage: ");
//     console.log(reservation);
  
//     // build confirmation
//     let reservedRoomType;
//     switch (reservation.roomType) {
//       case "bed1":
//         reservedRoomType = "One King Bed, Regular room";
//         break;
//       case "bed2":
//         reservedRoomType = "Two Queen Beds, Regular room";
//         break;
//       case "suite1":
//         reservedRoomType = "One Queen Bed, Suite with Kitchenette";
//         break;
//       case "suite2":
//         reservedRoomType = "One King Bed, Suite with Kitchenette";
//         break;
//     }
//     console.log(`Reserved room type: ${reservedRoomType}`);
  
//     $("#conf-name").innerHTML = "Name: " + reservation.firstName + " " + reservation.lastName;
//     $("#conf-email-address").innerHTML = "Email Address: " + reservation.emailAddress;
//     $("#conf-phone-number").innerHTML = "Phone Number: " + reservation.phoneNumber;
//     $("#conf-country-state").innerHTML = "Country and State: " + reservation.state + ", " + reservation.country;
//     $("#conf-location").innerHTML = "Hotel Location: " + reservation.location;
//     $("#conf-check-in").innerHTML = "Check-in Date: " + reservation.checkInDate;
//     $("#conf-check-out").innerHTML ="Check-out Date: " + reservation.checkOutDate;
//     $("#conf-room-type").innerHTML = "Room type: " + reservedRoomType;
//     $("#conf-number-of-rooms").innerHTML = "Number of Rooms: " + reservation.numberOfRooms;
  
//     console.log("Set value of reservation confirmation");
  
//     reservationStatus.classList.add("hide");
//     reservationConfirmation.classList.remove("hide");
  
//     console.log("Hid reservation status, showing confirmation.");
  
//   }