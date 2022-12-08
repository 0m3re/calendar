/* use function style */
/**
 *  create a calendar view as ASCII-String, suitable for console program
 *  or for debug.
 *
 *  @param {object} calendar an object with structure like
 *  ```{
 *  (TODO: Doc)
 *  }```
 *  @param {object} locationCode
 *
 *  @return {string} ASCII-String represents a month in a calendar.
 * */

// This function generates an ASCII art representation of a calendar
export function asciiCalendar(calendar, locationCode) {
  // Get the names of the days of the week from the location code object
  let dayNames = locationCode["weekDays"];

  // Get the month and year from the calendar and location code objects
  const month = locationCode["months"][calendar["month"]],
        year = calendar["year"];

  // Start the string that will hold the ASCII art representation of the calendar
  let view = "\n\n";

  // Loop through the days of the week in the calendar object
  for (let day of calendar["weekDays"]) {
    // Add the name of each day of the week to the view string
    view += dayNames[day] + ' ';
  }

  // Add a new line to the view string
  view += "\n";

  // Create a string for the month and year
  let title = `${month} ${year}`;

  // Calculate the width of the calendar
  let width = view.length - 4;

  // Calculate the number of spaces to add on each side of the month and year string
  let padWidth = (width - title.length)/2|0; // only integer part

  // Add the spaces to the month and year string
  title = ' '.repeat(padWidth)+title;

  // Add the month and year string and the days of the week to the view string
  view = `${title}${view}`

  // Create a string to hold the dates of the current week
  let week = ""; 

  // Get the width of the day names
  let dayWidth = `${dayNames[0]}`.length;

  // Loop through the weeks in the calendar object
  for(let w of calendar["weeks"]) {
    // Loop through the days in the current week
    for(let d of w) {
      // Convert the day number to a string
      let day = `${d}`;

      // If the day is empty, add spaces to the string
      if (day.length === 0) {
        day = ' '.repeat(dayWidth);
      } 
      // If the day is only one digit, add a space before it
      else if (day.length === 1) {
        day = ` ${day}`;
      }

      day = ' '.repeat(dayWidth - day.length) + day;

      week += (day + ' ');
    }

    week += "\n";
  }

  return view + week;
}

export function domCalendar(calendar, location) {
  const month = location.months[calendar.month], 
    year = calendar.year;
  let htmlSegment = `<table>
    <caption>${month} ${year}</caption>
    <thead><tr>`;

  const dayNames = location["weekDays"];   

  for(let d of calendar.weekDays) {
    htmlSegment += `<td>${dayNames[d]}</td>`
  }

  htmlSegment += "</tr>\n</thead>\n";

  for(let w of calendar.weeks) {
    htmlSegment += "<tr>";

    for(let d of w) {
      htmlSegment += `<td>${d}</td>`;
    }   

    htmlSegment += "</tr>\n";
  }

  htmlSegment += "</table>";

  return htmlSegment;
}
