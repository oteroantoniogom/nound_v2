// Set the date we're counting down to
var countDownDate1 = new Date("Dec 6, 2022 14:00:00").getTime();
var countDownDate2 = new Date("Nov 11, 2022 00:00:00").getTime();
var countDownDate3 = new Date("Jan 1, 2023 20:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance1 = countDownDate1 - now;
  var distance2 = countDownDate2 - now;
  var distance3 = countDownDate3 - now;

  // Time calculations for days, hours, minutes and seconds
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("maneskin_countdown").innerHTML = days1 + ":" + hours1 + ":"
  + minutes1 + ":" + seconds1;
  document.getElementById("pablopatodo_countdown").innerHTML = days2 + ":" + hours2 + ":"
  + minutes2 + ":" + seconds2;
  document.getElementById("connor_countdown").innerHTML = days3 + ":" + hours3 + ":"
  + minutes3 + ":" + seconds3;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("maneskin_countdown").innerHTML = "EXPIRED";
  }
}, 1000);