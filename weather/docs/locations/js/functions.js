'use strict';

// Listen for the DOM to finish building
document.addEventListener("DOMContentLoaded", function(){
    // buildModDate();
    // const menuButton = document.querySelector("#menuBtn");
    // menuButton.addEventListener('click', mobileMenu);

    // Values for buildWindChill()
let temp = 31;
let speed = 5;
buildWC(speed, temp); // calculates and displays feels like temperature

// Values for Ball
let hour = "10";
timeIndicator(hour);
//weather background photo
let weather = "clear";
console.log(weather);
// Change backgorund image
changeSummaryImage(weather);

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
    
}
