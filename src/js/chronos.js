/**
 * collection of mathematical function for calculation of date/time
 * information
 * */


/**
 * checks if a year is a leap years.
 *
 * @return {boolean}
 * */
export function isLeapYear(year) {
    let leapYear = (year % 4 === 0);

    leapYear = leapYear && (year % 100 !== 0);

    leapYear = leapYear || (year % 400 === 0);

    return leapYear;
}

/**
 * finds a weekday of a given date by a tuple of (day, month, year)
 *
 * @param {number} day of month (first day in a month is always 1)
 * @param {number} month (1 for January any 12 for December)
 * @param {number} year (a year in Gregorian calendar)
 *
 * @return {number} a number from 0 (Sunday) to 6 (Saturday)
 *
 * */
// This code exports a function that calculates the day of the week for a given date

export function weekDayOfDate(year, month, day) {
  let y0 = year - Math.floor((14-month)/12);

  let x = y0 + Math.floor(y0/4) - Math.floor(y0/100) + Math.floor(y0/400);

  let m0 = month + 12 * Math.floor((14-month)/12) - 2;

  return (day + x + Math.floor((31*m0)/12)) % 7;
}

/**
 * counts how many days in a month of a year.
 * @param {number} month a number between 1 (for January) and 12 (for December)
 * @param {number} year a valid year respected Gregorian calendar system.
 *
 * @return {number} number of day in the given month of the year (28|29|30|31).
 *
 * */
export function countDaysOfMonth(month, year) {
    const daysInMonth = [undefined,
        31, 28, 31, 30,
        31, 30, 31, 31,
        30, 31, 30, 31];

    if (month === 2 && isLeapYear(year)) {
        return 29;
    }

    return daysInMonth[month];
}
