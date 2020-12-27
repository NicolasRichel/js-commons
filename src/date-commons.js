// CONSTANTS

export const monthNamesFR = Object.freeze([
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

export const weekDayNamesFR = Object.freeze([
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
 * @returns {string}
 */
export function getLocalDate() {
  const date = new Date();
  const locale = 'fr-FR';
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return date.toLocaleDateString(locale, options).split('/').reverse().join('-');
}

/**
 * Get the year string (YYYY) of the given date.
 *
 * @param {string} date a date string in ISO 8601 format
 * @returns {string}
 */
export function getYear(date) {
  return date.substring(0, 4);
}

/**
 * Get the month string (MM) of the given date.
 *
 * @param {string} date a date string in ISO 8601 format
 * @returns {string}
 */
export function getMonth(date) {
  return date.substring(5, 7);
}

/**
 * Get the day string (DD) of the given date.
 *
 * @param {string} date a date string in ISO 8601 format
 * @returns {string}
 */
export function getDay(date) {
  return date.slice(-2);
}

/**
 * Get the number of days in a given month for the given year.
 *
 * @param {number} y year number
 * @param {number} m month number starting from 0
 * @returns {number}
 */
export function getNumberOfDaysInMonth(y, m) {
  // See : https://stackoverflow.com/questions/1810984/number-of-days-in-any-month
  // And : https://stackoverflow.com/questions/222309/calculate-last-day-of-month-in-javascript
  return /3|5|8|10/.test(m) ? 30 : m==1 ? (!(y%4)&&y%100) || !(y%400) ? 29 : 28 : 31;
}

/**
 * Get the date string that represent the first day of the given date month.
 *
 * @param {string} date a date string in ISO 8601 format
 * @returns {string}
 */
export function getFirstDayOfMonth(date) {
  return date.slice(0, -2) + '01';
}

/**
 * Get the date string that represent the last day of the given date month.
 *
 * @param {string} date a date string in ISO 8601 format
 * @returns {string}
 */
export function getLastDayOfMonth(date) {
  const [ year, month ] = date.split('-');
  const y = +year, m = +month - 1;
  return date.slice(0, -2) + getNumberOfDaysInMonth(y, m);
}

/**
 * Get the list of days (as string) of the given date month.
 *
 * @param {string} date a date string in ISO 8601 format
 * @returns {Array<string>}
 */
export function getMonthDays(date) {
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
 * @param {string} date a date string in ISO 8601 format
 */
export function getMonthDates(date) {
  const [ year, month ] = date.split('-');
  return getMonthDays(date).map(day => `${year}-${month}-${day}`);
}

/**
 * Get the (french) name of the given date month.
 *
 * @param {string} date a date string in ISO 8601 format
 */
export function getMonthName(date) {
  return monthNamesFR[ +getMonth(date) - 1 ];
}
