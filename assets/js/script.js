//*Variables for the following functions

//Sets current date for header
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

//Establishes current time by hour
var hour = moment().hour();
console.log(hour);

//Adds past, present, or future classes based on current time
//Starts at 8, goes until less than 18, add +1 every time the "for loop" loops (which is continous)
for (var calendarHour = 8; calendarHour < 18; calendarHour++) {
  var currentHour = $("#" + calendarHour);
  if (hour == calendarHour) {
    currentHour.addClass("present");
  } else if (hour > calendarHour) {
    currentHour.addClass("past");
  } else {
    currentHour.addClass("future");
  }
}
