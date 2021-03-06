'use strict';
//The variables to start with fetch Activity.
var pageNav = document.querySelector('#page-nav');
var statusContainer = document.querySelector('#status');
var contentContainer = document.querySelector('#backimage');
// Setup sessionStorage
var sessStore = window.sessionStorage;

// Setup localStorage
var locStore = window.localStorage;
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);


// Listen for the DOM to finish building
document.addEventListener("DOMContentLoaded", function(){
  // buildModDate();
  // const menuButton = document.querySelector("#menuBtn");
  // menuButton.addEventListener('click', mobileMenu);

  // Values for buildWindChill()


// let temp = 31;
// let speed = 5;
// buildWC(speed, temp); // calculates and displays feels like temperature

// // Values for Ball
// let hour = "10";
// timeIndicator(hour);

//weather background photo
// let weather = "snow";
// console.log(weather);
// Change backgorund image
// changeSummaryImage(weather);




//Get weather json data
let weatherURL = "/weather/docs/locations/js/idahoweather.json";
fetchWeatherData(weatherURL);


})

  // Change background image
  function changeSummaryImage(weather){
   
    console.log(`weather is: ${weather}`);
     // gets the backimage Id
     let x = document.getElementById('backimage'); 
     // This will changes all entered in lowercase
      weather = weather.toLowerCase();
 
      // adds the class name to change the backgorund image
     console.log(weather);
     if (weather.includes("sun","clear","sunny","mostly sunny","partly sunny","mostly clear")){console.log(weather);weather= "clear";}
     else if (weather.includes("cloud","partly cloudy","overcast","cloudy")) {console.log(weather);weather = "clouds";}
     else if (weather.includes("fog","foggy")){console.log(weather);weather = "fog";}
     else if (weather.includes("rain","raining","freezing rain","showers","thunderstorm","rainy")){console.log(weather);weather = "rain";}
     else if (weather.includes("snow","snowfall","blizzard","sleet","snow showers")){console.log(weather);weather = "snow";}
     console.log(weather)
      switch(weather){
          case "clear":
             x.className += ' clear';
          break;
          case "rain":
             x.className += ' rain';
          break;
          case"fog":
             x.className += ' fog';
          break;
          case"snow":
             x.className += ' snow';
          break;
          case"clouds":
          x.className += ' clouds';
          break;
      }       
     }













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
    console.log(speed);
    console.log(temp);
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16); 
    console.log(`The wind chill is: ${wc}`); // log wc to console
    wc = Math.floor(wc); 
    wc = (wc > temp) ? temp:wc; 
    console.log(`The wind chill is: ${wc}`); // log wc to console
    // feelTemp.innerHTML = wc; // output wc 
    return wc;
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




/* *************************************
*  Fetch Weather Data
************************************* */
function fetchWeatherData(weatherURL){
  let cityName = 'Preston'; // The data we want from the weather.json file
  fetch(weatherURL)
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
    let locName = p.properties.relativeLocation.properties.city;
    console.log(locName);
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

    // Get the hourly data using another function - should include the forecast temp, condition icons and wind speeds. The data will be stored into session storage.
    getHourly(p.properties.forecastHourly);
  })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
}




/* *************************************
*  Get Hourly Forecast data
************************************* */
function getHourly(URL) { 
  fetch(URL)
   .then(function (response) {
    if (response.ok) {
     return response.json();
    }
    throw new ERROR('Response not OK.');
   })
   .then(function (data) {
    console.log('Data from getHourly function:');
    console.log(data); // Let's see what we got back
 
    // Store 12 hours of data to session storage  
    var hourData = [];
    let todayDate = new Date();
    var nowHour = todayDate.getHours();
    console.log(`nowHour is ${nowHour}`);
    for (let i = 0, x = 11; i <= x; i++) {
     if (nowHour < 24) {
      hourData[nowHour] = data.properties.periods[i].temperature + "," + data.properties.periods[i].windSpeed + "," + data.properties.periods[i].icon;
      sessStore.setItem(`hour${nowHour}`, hourData[nowHour]);
      nowHour++;
     } else {
      nowHour = nowHour - 12;
      hourData[nowHour] = data.properties.periods[i].temperature + "," + data.properties.periods[i].windSpeed + "," + data.properties.periods[i].icon;
      sessStore.setItem(`hour${nowHour}`, hourData[nowHour]);
      nowHour = 1;
     }
    }
 
    // Get the shortForecast value from the first hour (the current hour)
    // This will be the condition keyword for setting the background image
    sessStore.setItem('shortForecast', data.properties.periods[0].shortForecast);
 
    // Call the buildPage function
    buildPage();
   })
   .catch(error => console.log('There was a getHourly error: ', error))
 }




 function buildPage() {
  // Set the title with the location name at the first
  // Gets the title element so it can be worked with
  let pageTitle = document.querySelector('#page-title');
  console.log(`The pageTitle: ${pageTitle}`);
  // Create a text node containing the full name 
  let fullNameNode = document.createTextNode(sessStore.getItem('fullName'));
  // inserts the fullName value before any other content that might exist
  pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
  // When this is done the title should look something like this:
  // Preston, Idaho | The Weather Site                    
                     
 }

  // Get the h1 to display the city location
  let contentHeading = document.querySelector('#contentHeading');
  contentHeading.innerHTML = sessStore.getItem('fullName');
  // The h1 in the main element should now say "Preston, Idaho"


  // Get the coordinates container for the location
  let latLong = $(".coords");
  latLong.innerHTML = sessStore.getItem('latLong');
  // The latitude and longitude should match what was stored in session storage.

  // Get the condition keyword and set Background picture
  changeSummaryImage(sessStore.getItem('shortForecast'));
  /* Keep in mind that the value may be different than 
  what you need for your CSS to replace the image. You 
  may need to make some adaptations for it to work.*/




 // **********  Set the current conditions information  **********
// Set the temperature information
let highTemp = $('.h-temp');
let loTemp = $('.l-temp');
let currentTemp = $('.c-temp');
let feelTemp = $('#chill');
highTemp.innerHTML = sessStore.getItem('highTemp') + "°F";
loTemp.innerHTML = sessStore.getItem('lowTemp') + "°F";
currentTemp.innerHTML = sessStore.getItem('temperature') + "°F";
// Set the wind information
let speed = $('.wind');
let gusts = $('.gusts');
speed.innerHTML = sessStore.getItem('WindSpeed')+ "mph";
gusts.innerHTML = sessStore.getItem('WindGust')+ "mph";
// Calculate feel like temp
feelTemp.innerHTML = buildWC(sessStore.getItem('WindSpeed'), sessStore.getItem('temperature')) + "°F";





// **********  Set the Time Indicators  **********
let thisDate = new Date();
var currentHour = thisDate.getHours();
let indicatorHour;
// If hour is greater than 12, subtract 12
if (currentHour > 12) {
 indicatorHour = currentHour - 12;
} else {
 indicatorHour = currentHour;
};
console.log(`Current hour in time indicator is: ${currentHour}`);
// Set the time indicator
timeIndicator(indicatorHour);





// ********** Hourly Temperature Component  **********
// Get the hourly data from storage as an array
let currentData = [];
let tempHour = currentHour;
// Adjust counter based on current time
for (let i = 0, x = 12; i < x; i++) {
 if (tempHour <= 23) {
  currentData[i] = sessStore.getItem('hour' + tempHour).split(",");
  tempHour++;
 } else {
  tempHour = tempHour - 12;
  currentData[i] = sessStore.getItem('hour' + tempHour).split(",");
  console.log(`CurrentData[i][0] is: ${currentData[i][0]}`);
  tempHour = 1;
 }
}
console.log(currentData);





// ********** Hourly Wind Component  **********
// Get the hourly data from storage
let windArray = [];
let windHour = currentHour;
// Adjust counter based on current time
for (let i = 0, x = 12; i < x; i++) {
 if (windHour <= 23) {
  windArray[i] = currentData[i][1].split(" ");
  console.log(`windArray[i] is: ${windArray[i]}`);
  windHour++;
 } else {
  windHour = windHour - 12;
  windArray[i] = currentData[i][1].split(" ");
  windHour = 1;
 }
}
console.log(windArray);

// Insert Wind data
// Start with the outer container that matchs the time indicator
windHour = currentHour;
for (let i = 0, x = 12; i < x; i++) {
 if (windHour >= 13) {
  windHour = windHour - 12;
 }
 $('.wind1 .o' + windHour).innerHTML = windArray[i][0];
 windHour++;
}

     // **********  Condition Component Icons  **********
     let conditionHour = currentHour;
     // Adjust counter based on current time
     for (let i = 0, x = 12; i < x; i++) {
      if (conditionHour >= 13) {
       conditionHour = conditionHour - 12;
      }
      $('.forecast .o' + conditionHour).innerHTML = '<img src="' + currentData[i][2] + '" alt="hourly weather condition image">';
      conditionHour++;
     }
     







     //Start of home page functions to get you weather location live information


     //getlocation Function
    // Gets location information from the NWS API
function getLocation(locale) {
  const URL = "https://api.weather.gov/points/" + locale; // This request location from NWS API
  // NWS User-Agent header (built above) is the second parameter 
  fetch(URL, idHeader) 
  .then(function(response){
    if(response.ok){ 
     return response.json(); 
    } 
    throw new ERROR('Response not OK.');
  })
  .then(function (data) { 
    // Let's see what we got back
    console.log('Json object from getLocation function:'); 
    console.log(data);
    // Store data to sessionStorage 
    window.sessionStorage.setItem("locName", data.properties.relativeLocation.properties.city); 
    window.sessionStorage.setItem("locState", data.properties.relativeLocation.properties.state);
    let fullName = data.properties.relativeLocation.properties.city + ", " + data.properties.relativeLocation.properties.state;
    window.sessionStorage.setItem("fullName", fullName);
    
    // Create information for localStorage
    let homeData = JSON.stringify({fullName,locale});
    locStore.setItem("Rexburg, ID", homeData);


    // set lat & long coords and elevation
  let latlong = $(".coords");
  latlong.innerHTML = sessStore.getItem("locale"); 

  let elevat= $("#ele");
  elevat.innerHTML = "Elevation: " + sessStore.getItem("stationElevation") + " ft";
  
    
    // Store three URL's for stationId's, forecast and hourly forecast
    // The URL's are in the returned location data object
    window.sessionStorage.setItem("hourlyURL", data.properties.forecastHourly);
    window.sessionStorage.setItem("forecastURL", data.properties.forecast);
    let stationsURL = data.properties.observationStations;
    window.sessionStorage.setItem("stationsURL", stationsURL); 
 
    // Call the function to get the list of weather stations
    // using the URL for the weather station list
    getStationId(stationsURL); 
   }) 
  .catch(error => console.log('There was a getLocation error: ', error)) 
 } // end getLocation function





 //Start of getSationId
 // Gets weather station list and the nearest weather station ID from the NWS API
function getStationId(stationsURL) { 
// NWS User-Agent header (built above) will be the second parameter 
fetch(stationsURL, idHeader) 
.then(function(response){
  if(response.ok){ 
   return response.json(); 
  } 
  throw new ERROR('Response not OK.');
})
.then(function (data) { 
  // Let's see what we got back
  console.log('From getStationId function:'); 
  console.log(data);

  // Store station ID and elevation (in meters - will need to be converted to feet) 
  let stationId = data.features[0].properties.stationIdentifier; 
  let stationElevation = metersToFeet(data.features[0].properties.elevation.value); 
  console.log('Station and Elevation are: ' + stationId, stationElevation); 
  // You may want to convert the elevation to feet before storing the value
  // Store data to sessionStorage 
  window.sessionStorage.setItem("stationId", stationId); 
  window.sessionStorage.setItem("stationElevation", stationElevation); 

  // Request the Current Weather for this station 
  getWeather(stationId);
 }) 
.catch(error => console.log('There was a getStationId error: ', error)) 
} // end getStationId function





//Get weather function
// Gets current weather information for a specific weather station from the NWS API
function getWeather(stationId) { 
// This is the URL for current observation data 
const URL = 'https://api.weather.gov/stations/' + stationId + '/observations/latest';
fetch(URL, idHeader) 
.then(function(response){
  if(response.ok){ 
   return response.json(); 
  } 
  throw new ERROR('Response not OK.');
})
.then(function (data) { 
  // Let's see what we got back
  console.log('From getWeather function:'); 
  console.log(data);

  // Store current weather information to sessionStorage 
  let currTemp = convertCelcius(data.properties.temperature.value);
  window.sessionStorage.setItem("temperature", currTemp);
  let windSpeed = mpsToMph(data.properties.windSpeed.value);
  window.sessionStorage.setItem("windSpeed", windSpeed);
  window.sessionStorage.setItem("windGust", data.properties.windGust.value);
  window.sessionStorage.setItem("feelsLike", buildWC(windSpeed, currTemp));
  window.sessionStorage.setItem("condition", data.properties.textDescription);


  // Call the getForecast function
  getForecast(sessStore.getItem("forecastURL"));
  // Call the getHourly function
  getHourly(sessStore.getItem("forecastHourlyURL"));
 }) 
.catch(error => console.log('There was a getWeather error: ', error)) 
} // end getWeather function


function getForecast(URL) {
  fetch(URL, idHeader)
  .then(function(response){
    if(response.ok){
      return response.json();
    }
    throw new ERROR("Response was not OK.")
  })
  .then(function (data) {
    console.log("getForecast(): From getForecast function:");
    console.log(data); // log data returned from NWS API

    // Extract & store highTemp
    let highTemp = data.properties.periods[0].temperature;
    console.log(`getForecast(): Value of highTemp is: ${highTemp}`);
    sessStore.setItem("highTemp", highTemp);

    // Extract & store lowTemp
    let lowTemp = data.properties.periods[1].temperature;
    console.log(`getForecast(): Value of lowTemp is: ${lowTemp}`);
    sessStore.setItem("lowTemp", lowTemp);
    //Extract & store feels like temp.
    let feels = $("#chill");
    feels.innerHTML =(sessStore.getItem("feelsLike"));

    //Extract & store windspeed.
    let windsp= $(".wind");
    windsp.innerHTML = "Wind Speed: " + sessStore.getItem("windSpeed") + "mph";

    //Extract & store gusts
    let windGust = $(".gusts");
    windGust.innerHTML = "Gusts: " + sessStore.getItem("windGust") + "mph";



  })
 }


// convert celsius to fahrenheit
function convertCelcius(celsTemp) {
  return ((celsTemp * 9/5) + 32).toFixed(0);
}


// convert meters/sec to miles/hour
function mpsToMph (speed) {
  return (speed / 2.237).toFixed(1);
}

// convert meters to feet
function metersToFeet(meters) {
  return (meters * 3.281).toFixed(0);
}









// Change the status of the containers
// contentContainer.setAttribute('class', ''); // removes the hide class from main
contentContainer.classList.remove("hide");
statusContainer.setAttribute('class', 'hide'); // hides the status container

