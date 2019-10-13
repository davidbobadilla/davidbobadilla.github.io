function current() {
    var todaysDate = new Date();
    const longDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayName = longDayNames[todaysDate.getDay()];
    const longMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = longMonthNames[todaysDate.getMonth()];
    document.getElementById("current").innerHTML = dayName + ", " + todaysDate.getDate() + " " + monthName + " " + todaysDate.getFullYear();
}

function copyright() {
    var todaysDate = new Date();
    var current = todaysDate.getFullYear();
    document.getElementById('copyright').innerHTML = "&copy; " + current;
}


window.onload = current();
window.onload = copyright();

/*function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

    html
    <button onclick="toggleMenu()">☰ Menu</button>

    css
    nav {
  background-color: #06090F;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
}

nav button {
  color: white;
  background: #06090F;
  border: none;
  width: 100%;
  padding: 2em 0 2em 0;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

nav ul a {
  color: white;
  display: block;
  text-align: center;
  padding: 1rem;
}

}*/