//functions will work together to get weather informaton for the current location and populate a web page with the data.
'use strict';

// Setup sessionStorage
var sessStore = window.sessionStorage;

// Setup localStorage
var locStore = window.localStorage;
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
// Set global variable for custom header required by NWS API
var idHeader = {
    headers: {
     "User-Agent": "Student Learning Project - yourschoolemailaddress@byui.edu"
    }
   };



// Call the function to get our location
getGeoLocation();

//get the current location by longitude and latitude.
function getGeoLocation() {
 const status = document.getElementById('status');
 status.innerHTML = 'Getting Location...';

 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
     const lat = position.coords.latitude;
     const long = position.coords.longitude;
     
  
     // Combine the values for use later
     const locale = lat.toFixed(4) + "," + long.toFixed(4);// Make coordinates to have 4 length
     console.log(`Locale values are: ${locale}.`);

     // Call getLocation function, send locale as a parameter
     getLocation(locale); // Sends the location to the getLocation function

     // Store the values to session storage
     window.sessionStorage.setItem("locale", locale);
     window.sessionStorage.setItem("latitude", lat);
     window.sessionStorage.setItem("longitude", long);
  
    })
   } else {
    status.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
   } // end else
 }// end getGeoLocation



    