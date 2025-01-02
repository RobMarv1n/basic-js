const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = String(n).split('').map(Number);
  let sum = arr.reduce((acc, val) => {
    acc += val;
    if (acc >= 10) {
      arr = String(acc).split('').map(Number);
      arr = arr.reduce((a, b) => a += b);
      return arr;
    }
    return acc;
  })

  return sum
}

module.exports = {
  getSumOfDigits
};
