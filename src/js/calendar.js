import {domCalendar} from './calendar-view.js';
import {getWeekday} from './weekdays.js';
function showCalendar(){
  let thisnow = new Date();
  let thisyear = thisnow.getFullYear();
  let thismonth = thisnow.getMonth() + 1; // Add 1 to the month number
  let calendar = { 
     month: '11',
     year: thisyear, 
     weekDays: [1, 2, 3, 4, 5, 6, 0], // Day from Monday to Sonday, EU-Common
     weeks: getWeekday(thisyear, 11)
  };

  let place = {
    weekDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    months: [undefined,
      "Januar",    "Februar", "Mär",      "April",
      "Mai",       "Juni",    "July",     "August",
      "September", "Oktober", "November", "Dezember"],
    firstDayOfWeek: 1
  };
  let div =document.createElement('div')
  let htmltable = domCalendar(calendar, place);
  div.innerHTML = htmltable;
  
  document.body.appendChild(div)
}
showCalendar();
