const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0;
  let newArr = [];
  newArr = matrix[0].map((el, index) => matrix.map(row => row[index]));
  newArr.forEach(row => {
    row.forEach((num) => {
      if (num === 0) {
        row.length = 0;
      } else {
        count += num;
      }
    })
  })
  return count
}

module.exports = {
  getMatrixElementsSum
};
