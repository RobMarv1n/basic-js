const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (arr.filter(el => el === -1).length === 0) return arr.sort( (a, b) => a - b);
  let newArr = arr.filter(el => el !== -1).sort((a, b) => a - b);
  let result = [];
  let count = 0;
  result = arr.map( el => {
      if (el !== -1) {
        el = newArr[count];
        count += 1
        return el
      } else {
        return el = -1
      }
  });
  return result
}

module.exports = {
  sortByHeight
};
