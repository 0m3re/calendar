import {weekDayOfDate} from './chronos.js';
import {countDaysOfMonth} from './chronos.js';
import { isLeapYear } from './chronos.js';
let weeks = [];

export function getWeekday(thisyear, thismonth) {
  // Loop through the weeks in the current month
  let firstDay = weekDayOfDate(thisyear, thismonth, 1) - 1;
  let daysInMonth = countDaysOfMonth(thismonth, thisyear) + 1;
  let j = 0;
  let day = 1;
  for (let i = 0; i < 5; i++) {
    week = [];
    if (i === 0){
      for (let y = 0; y < firstDay; y++) {
        week.push("");
      }
      j = firstDay;
    }
    // Loop through the days in the current week
    for (j; j < 7; j++) {
      // Add the day to the 'weeks' array
      if (day === daysInMonth){
        week.push("");
      } else {
        week.push(day);
        day++;
      }
    }
    j = 0;
    weeks.push(week);
  }
  return weeks;
}
