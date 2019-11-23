//functions will work together to get weather informaton for the current location and populate a web page with the data.
'use strict';


// Set global variable for custom header required by NWS API
var idHeader = {
    headers: {
     "User-Agent": "Student Learning Project - yourschoolemailaddress@byui.edu"
    }
   };


var sessStore = window.sessionStorage;

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
     const locale = lat + "," + long;
     console.log(`Locale values are: ${locale}.`);

     // Call getLocation function, send locale as a parameter
     getLocation(locale);

     // Store the values to session storage
     window.sessionStorage.setItem("locale", locale);
     window.sessionStorage.setItem("latitude", lat);
     window.sessionStorage.setItem("longitude", long);
  
    })
   } else {
    status.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
   } // end else
 }// end getGeoLocation



    