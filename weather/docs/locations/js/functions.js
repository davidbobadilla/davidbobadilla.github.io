'use strict';

// Listen for the DOM to finish building
document.addEventListener("DOMContentLoaded", function(){
    // buildModDate();
    // const menuButton = document.querySelector("#menuBtn");
    // menuButton.addEventListener('click', mobileMenu);

    // Values for buildWindChill()

//Get weather json data
let weatherURL = "/weather/js/idahoweather.json";
fetchWeatherData(weatherURL);


let temp = 31;
let speed = 5;
buildWC(speed, temp); // calculates and displays feels like temperature

// Values for Ball
let hour = "10";
timeIndicator(hour);

//weather background photo
let weather = "snow";
console.log(weather);
// Change backgorund image
changeSummaryImage(weather);


//The variables to start with fetch Activity.
var pageNav = document.querySelector('#page-nav');
var statusContainer = document.querySelector('#status');
var contentContainer = document.querySelector('#backimage');



  })

// Weather Site JavaScript Functions

console.log('My javascript is being read.');

//This was moved from weatherf.js//

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

// Handles Small Screen Menu

// const menuButton = document.querySelector("#menuBtn");
// menuButton.addEventListener('click',function(event){
//   const navList = document.querySelector('#navList');
//   navList.classList.toggle("mobileNav");
// })



function buildWC(speed, temp){
    let feelTemp = document.getElementById("chill"); // grab the span used to hold the wc
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16); 
    console.log(`The wind chill is: ${wc}`); // log wc to console
    wc = Math.floor(wc); 
    wc = (wc > temp) ? temp:wc; 
    console.log(`The wind chill is: ${wc}`); // log wc to console
    feelTemp.innerHTML = wc; // output wc 
  }


  // Time ball indicator
function timeIndicator(hour){
    // find all elements with ball class and remove
    let x = document.querySelectorAll(".ball"); 
    for (let item of x) {
      console.log(item);
      item.classList.remove("ball");
    }
    //find all hours that match paramerter and add ball class to them
    let hr = document.querySelectorAll(".i" + hour);
    for (let item of hr){
      item.classList.add("ball");
    }
  }


  // Change background image
function changeSummaryImage(weather){
    // gets the backimage Id
    let x = document.getElementById('backimage'); 
    // This will changes all entered in lowercase
     weather = weather.toLowerCase();

     // adds the class name to change the backgorund image
    console.log(weather);
     switch(weather){
         case "clear":
            x.className += 'clear';
         break;
         case "rain":
            x.className += 'rain';
         break;
         case"fog":
            x.className += 'fog';
         break;
         case"snow":
            x.className += 'snow';
         break;
         case"clouds":
         x.className += 'clouds';
         break;
     }       
    


/* *************************************
*  Fetch Weather Data
************************************* */
function fetchWeatherData(weatherURL){
  let cityName = 'Preston'; // The data we want from the weather.json file
  fetch("/weather/js/idahoweather.json")
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
    let p = data[cityName];

    // **********  Get the location information  **********
    let locName = p.City;
    let locState = p.State;
    // Put them together
    let fullName = locName+', '+locState;
    // See if it worked, using ticks around the content in the log
    console.log(`fullName is: ${fullName}`);
    // Get the longitude and latitude and combine them to
    // a comma separated single string
    const latLong = p.properties.relativeLocation.geometry.coordinates[1] + ","+ p.properties.relativeLocation.geometry.coordinates[0];
    console.log(latLong);
    // Create a JSON object containing the full name, latitude and longitude
    // and store it into local storage.
    const prestonData = JSON.stringify({fullName,latLong});
    locStore.setItem("Preston,ID", prestonData);
    // **********  Get the current conditions information  **********
    // As the data is extracted from the JSON, store it into session storage
    // Get the temperature data


    // Get the wind data 


    // Get the hourly data using another function - should include the forecast temp, condition icons and wind speeds. The data will be stored into session storage.

  })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
}
}
