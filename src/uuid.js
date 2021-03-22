// Available UUID versions
const uuidVersions = Object.freeze({
  V4: 'v4'
});

/**
 * Generate an UUID using Web Crypto API.
 *
 * @param {String} version
 * @returns {String}
 */
function generateUUID(version = uuidVersions.V4) {
  const uuid = null;
  switch (version) {
    case uuidVersions.V4:
    default:
      // see : https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/2117523#2117523
      uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,
        c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
  }
  return uuid;
}

/**
 * Generate a RFC4122 v4 compliant UUID (using Web Crypto API).
 *
 * @returns {String}
 */
function generateUUIDv4() {
  return generateUUID(uuidVersions.V4);
}

export {
  // Constants
  uuidVersions,
  // Functions
  generateUUID,
  generateUUIDv4,
};
