const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if (new Set(...matrix).size === 1) {
    return matrix.map(col => matrix[0].map( row => row = 0));
  }
  let newArr = [];
  newArr = matrix.map((col, colIndex) => matrix.map( (row, rowIndex) => {
    switch (col[rowIndex]) {
      case false:
        if (col[rowIndex - 1] === true) col[rowIndex] += 1;
        if (col[rowIndex + 1] === true) col[rowIndex] += 1;
        if (row[colIndex - 1] === true) col[rowIndex] += 1;
        if (row[colIndex + 1] === true) col[rowIndex] += 1;
        break;
    }
   return col[rowIndex]
  }));
  newArr = newArr.map((col, colIndex) => newArr.map( (row, rowIndex) => {
    switch (col[rowIndex]) {
      case false:
        col[rowIndex] = 1;
        break;
      case true:
        col[rowIndex] = 1;
        break;
    }
   return col[rowIndex]
  }));

  return newArr
}

module.exports = {
  minesweeper
};
