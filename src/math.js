/**
 * Round a number with a given precision (number of decimal places).
 *
 * @param {Number} x number to round
 * @param {Number} p wanted precision
 */
export function round(x, p = 0) {
  const n = Math.pow(10, p);
  return Math.round( x * n ) / n;
}

export {
  round,
};
