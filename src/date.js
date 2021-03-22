// CONSTANTS

const monthNames = Object.freeze([
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre'
]);

const weekDayNames = Object.freeze([
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
  'Dimanche'
]);


// FUNCTIONS

/**
 * Get the current date string in ISO 8601 format (YYYY-MM-DD).
 *
 * @returns {String}
 */
function getLocalDate() {
  const date = new Date();
  const locale = 'fr-FR';
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return date.toLocaleDateString(locale, options).split('/').reverse().join('-');
}

/**
 * Get the year string (YYYY) of the given date.
 *
 * @param {String} date a date string in ISO 8601 format
 * @returns {String}
 */
function getYear(date) {
  return date.substring(0, 4);
}

/**
 * Get the month string (MM) of the given date.
 *
 * @param {String} date a date string in ISO 8601 format
 * @returns {String}
 */
function getMonth(date) {
  return date.substring(5, 7);
}

/**
 * Get the day string (DD) of the given date.
 *
 * @param {String} date a date string in ISO 8601 format
 * @returns {String}
 */
function getDay(date) {
  return date.slice(-2);
}

/**
 * Get the number of days in a given month for the given year.
 *
 * @param {Number} y year number
 * @param {Number} m month number starting from 0
 * @returns {Number}
 */
function getNumberOfDaysInMonth(y, m) {
  // See : https://stackoverflow.com/questions/1810984/number-of-days-in-any-month
  // And : https://stackoverflow.com/questions/222309/calculate-last-day-of-month-in-javascript
  return /3|5|8|10/.test(m) ? 30 : m==1 ? (!(y%4)&&y%100) || !(y%400) ? 29 : 28 : 31;
}

/**
 * Get the date string that represent the first day of the given date month.
 *
 * @param {String} date a date string in ISO 8601 format
 * @returns {String}
 */
function getFirstDayOfMonth(date) {
  return date.slice(0, -2) + '01';
}

/**
 * Get the date string that represent the last day of the given date month.
 *
 * @param {String} date a date string in ISO 8601 format
 * @returns {String}
 */
function getLastDayOfMonth(date) {
  const [ year, month ] = date.split('-');
  const y = +year, m = +month - 1;
  return date.slice(0, -2) + getNumberOfDaysInMonth(y, m);
}

/**
 * Get the list of days (as string) of the given date month.
 *
 * @param {String} date a date string in ISO 8601 format
 * @returns {Array<string>}
 */
function getMonthDays(date) {
  const [ year, month ] = date.split('-');
  const y = +year, m = +month - 1;
  return ['01','02','03','04','05','06','07','08','09'].concat(
    Array.from(
      { length: getNumberOfDaysInMonth(y, m) - 9 },
      (x, i) => `${(i + 10)}`
    )
  );
}

/**
 * Get the date strings of each day of the given date month.
 *
 * @param {String} date a date string in ISO 8601 format
 */
function getMonthDates(date) {
  const [ year, month ] = date.split('-');
  return getMonthDays(date).map(day => `${year}-${month}-${day}`);
}

/**
 * Get the (french) name of the given date month.
 *
 * @param {String} date a date string in ISO 8601 format
 */
function getMonthName(date) {
  return monthNamesFR[ +getMonth(date) - 1 ];
}

export {
  // Constants
  monthNames,
  weekDayNames,
  // Functions
  getDay,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getLocalDate,
  getMonth,
  getMonthDates,
  getMonthDays,
  getMonthName,
  getNumberOfDaysInMonth,
  getYear,
};
