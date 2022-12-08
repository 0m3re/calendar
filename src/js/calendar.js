import {domCalendar} from './calendar-view.js';
import {getWeekday} from './weekdays.js';
function showCalendar(){
  let thisnow = new Date();
  let thisyear = thisnow.getFullYear();
  let thismonth = thisnow.getMonth() + 1; // Add 1 to the month number
  let calendar = { 
    month: thismonth,
    year: thisyear, 
    weekDays: [1, 2, 3, 4, 5, 6, 0], // Day from Monday to Sonday, EU-Common
    weeks: getWeekday(thisyear, thismonth)
  };

  let place = {
    weekDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    months: [undefined,
      "Januar",    "Februar", "Mär",      "April",
      "Mai",       "Juni",    "July",     "August",
      "September", "Oktober", "November", "Dezember"],
    firstDayOfWeek: 1
  };
  let container = document.getElementById("div1");

  let div = document.createElement('div')
  let htmltable = domCalendar(calendar, place);
  div.innerHTML = htmltable;

  container.appendChild(div)

  let buttonPrevious = document.getElementById('button-previous');
  let buttonNext = document.getElementById('button-next');

  // Define the callback function
  function KeyButtonPressPrevious() {
    // Handle the click and key press events
    let newMonth = calendar.month - 1;
    if (newMonth == 0) {
      calendar.month = 12;
      calendar.year = calendar.year - 1;
    } else {
      calendar["month"] = newMonth;
    }
    calendar.weeks = getWeekday(calendar.year, calendar.month);
    let newDiv = document.createElement('div');
    htmltable = domCalendar(calendar, place);
    newDiv.innerHTML = htmltable;

    container.replaceChild(newDiv, div)

    div = newDiv;
  }

  function KeyButtonPressNext() {
    // Handle the click and key press events
    let newMonth = calendar.month + 1;
    if (newMonth == 13) {
      calendar.month = 1;
      calendar.year = calendar.year + 1;
    } else {
      calendar["month"] = newMonth;
    }
    calendar.weeks = getWeekday(calendar.year, calendar.month);
    let newDiv = document.createElement('div');
    htmltable = domCalendar(calendar, place);
    newDiv.innerHTML = htmltable;

    container.replaceChild(newDiv, div)

    div = newDiv;
  }

  // Attach the callback function to the button's click event
  buttonPrevious.addEventListener("click", KeyButtonPressPrevious);
  buttonNext.addEventListener("click", KeyButtonPressNext);
  // Attach the callback function to the document's keydown event
  document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
      // If the Enter key was pressed, call the callback function
      KeyButtonPressPrevious();
    } else if (event.key === "ArrowRight") {
      KeyButtonPressNext();

    }
  });

}
showCalendar();
