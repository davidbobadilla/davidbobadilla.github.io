var sessStore = window.sessionStorage;

buildReservationConfirmation();
function buildReservationConfirmation() {
    console.log("Im being read");
  $("#fname").innerHTML = "Name: " + sessStore.getItem('firstName') + " " + sessStore.getItem('lastName');
//   $("#Email").innerHTML = "Email Address: " + reservation.emailAddress;
//   $("#phone").innerHTML = "Phone Number: " + reservation.phoneNumber;
//   $("#city").innerHTML = "City and State: " + reservation.location ;
//   $("#guests").innerHTML = "# of Guest: " + reservation.guest;
//   $("#resDate").innerHTML = "Check-in Date: " + reservation.checkInDate;
//   $("#resDate1").innerHTML ="Check-out Date: " + reservation.checkOutDate;
//   $("#subject1").innerHTML = "Additional Comments: " + reservation.additionalComments;



}