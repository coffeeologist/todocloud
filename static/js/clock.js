  var sheet = window.document.styleSheets[0];
  sheet.insertRule('a:hover a { color: #FFFFFF; }', sheet.cssRules.length);

  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var month = today.getMonth();
    var day = today.getDay();
    var weekday = ""
    switch (today.getDay()) {
      case 0:
        weekday = "Sunday";
        break;
      case 1:
        weekday = "Monday";
        break;
      case 2:
        weekday = "Tuesday";
        break;
      case 3:
        weekday = "Wednesday";
        break;
      case 4:
        weekday = "Thursday";
        break;
      case 5:
        weekday = "Friday";
        break;
      case 6:
        weekday = "Saturday";
    }
    m = checkTime(m);
    document.getElementById('clock').innerHTML =
    "It is " + "\n" + h % 12 + ":" + m + " on " + weekday + " " + (month+1) + "/" + (day+1);
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }