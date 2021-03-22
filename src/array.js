/**
 * Add an element to an array.
 *
 * @param {Array<*>} array
 * @param {*} element
 * @returns {Array<*>}
 */
function addArrayElement(array, element) {
  return array.concat(element);
}

/**
 * Update an element in an array.
 * Elements are matched using the `key` parameter ('id' by default).
 *
 * @param {Array<*>} array
 * @param {*} element
 * @param {String} key
 * @returns {Array<*>}
 */
function updateArrayElement(array, element, key = 'id') {
  const i = array.findIndex(x => x[key] === element[key]);
  return [ ...array.slice(0, i), element, ...array.slice(i + 1) ];
}

/**
 * Update several elements in an array.
 * Elements are matched using the `key` parameter ('id' by default).
 *
 * @param {Array<*>} array
 * @param {*} elements
 * @param {String} key
 * @returns {Array<*>}
 */
function updateArrayElements(array, elements, key = 'id') {
  const obj = mapArrayToObject(elements, key);
  return array.map(
    e => !!obj[e[key]] ? { ...obj[e[key]] } : e
  );
}

/**
 * Remove an element from an array.
 * Elements are matched using the `key` parameter ('id' by default).
 *
 * @param {Array<*>} array
 * @param {*} element
 * @param {String} key
 * @returns {Array<*>}
 */
function removeArrayElement(array, element, key = 'id') {
  const i = array.findIndex(x => x[key] === element[key]);
  return [ ...array.slice(0, i), ...array.slice(i + 1) ];
}

/**
 * Map an array to an object on which elements can be accessed by a given key ('id' by default).
 * For example:
 * 
 * ```
 * mapArrayToObject([                                      |   {
 *   { name: 'Jane', age: 25, hobby: 'Playing guitar' },   |     Jane: { name: 'Jane', age: 25, hobby: 'Playing guitar' },
 *   { name: 'John', age: 30, hobby: 'Basketball' },      ==>    John: { name: 'John', age: 30, hobby: 'Basketball' },
 *   { name: 'Hans', age: 22, hobby: 'Write poetry' }      |     Hans: { name: 'Hans', age: 22, hobby: 'Write poetry' } 
 * ], 'name')                                              |   }
 * ```
 *
 * @param {Array<*>} array
 * @param {String} key
 * @returns {Object}
 */
function mapArrayToObject(array, key = 'id') {
  return array.map(x => ({ [x[key]]: x })).reduce(
    (obj, x) => Object.assign(obj, x), {}
  );
}

export {
  addArrayElement,
  mapArrayToObject,
  removeArrayElement,
  updateArrayElement,
  updateArrayElements,
};
