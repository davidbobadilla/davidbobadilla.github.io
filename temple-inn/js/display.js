var sessStore = window.sessionStorage;
var $ = document.querySelector.bind(document);

buildReservationConfirmation();
function buildReservationConfirmation() {
    console.log("Reading");
  $('#fname').innerHTML = "Name: " + sessStore.getItem('firstName: ') + " " + sessStore.getItem('lastName: ');
  $('#Email').innerHTML = "Email Address: " + sessStore.getItem('emailAddress: ');
  $('#phone').innerHTML = "Phone Number: " + sessStore.getItem('phoneNumber: ');
  $('#city').innerHTML = "City and State: " + sessStore.getItem('location: ');
  $('#guests').innerHTML = "# of Guest: " + sessStore.getItem('guest: ');
  $('#resDate').innerHTML = "Check-in Date: " + sessStore.getItem('checkInDate: ');
  $('#resDate1').innerHTML = "Check-out Date: " + sessStore.getItem('checkOutDate: ');
  $('#subject1').innerHTML = "Additional Comments: " + sessStore.getItem('additionalComments: ');

}