const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === undefined) return 0;
  let duplicateArr = str.match(/(\w)\1+/gi);
  if (duplicateArr !== null) {
    duplicateArr.forEach(el => str = str.replace(el, el.length + el[0]));
  }
  return str;
}

module.exports = {
  encodeLine
};
