function createReservation(passenger, flight, saver) {
  var reservation = {
    passengerInformation: passenger,
    flightInformation: flight
  };

  saver.saveReservation(reservation);
  return reservation;
}

function ReservationSaver() {
  this.saveReservation = function(reservation) {

  };
}