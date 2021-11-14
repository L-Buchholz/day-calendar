//*Variables for the following functions

//Sets current date for header
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

//Establishes current time by hour
var hour = moment().hour();
console.log(hour);

//FUNCTIONS
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
  //Follows functions defined below; here calendarHour points at the item stored by hourId
  var textArea = $(currentHour).find("textarea");
  var savedValue = localStorage.getItem(calendarHour);
  $(textArea).val(savedValue);
}

//EVENT LISTENERS (Allows "save" button to save items to localStorage)
$(".row").on("click", saveHandler);
//Function designates click event by row (instead of applying to all of them)
function saveHandler(event) {
  //Selects a specific row element (not yet defined)
  var calendarRow = event.currentTarget;
  //Selects "id" element to dictate what hour the event handler applies to (i.e., which row)
  var hourId = calendarRow.getAttribute("id");
  //Selects the associated button for a given calendar row
  var saveButton = $(calendarRow).find("button");
  //Selects the associated text area for a given calendar row
  var textArea = $(calendarRow).find("textarea");
  var taskText = textArea.val().trim();
  if (saveButton.is(event.target)) {
    //Save text to localStorage by row (hourId)
    localStorage.setItem(hourId, taskText);
  }
}
