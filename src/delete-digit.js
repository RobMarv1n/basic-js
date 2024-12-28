const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  let count = [];
  count = arr.map((el, index) => (arr.slice(0, index) + arr.slice(index + 1)).replace(/,/gi, ''));
  count = count.map(Number).sort((a, b) => b - a);
  return count[0];
}

module.exports = {
  deleteDigit
};
