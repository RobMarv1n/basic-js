const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let filteredArr = arr.filter(el => Array.isArray(el));
    let count = 1;
    if (filteredArr.length === 0) {
      return count;
    } else {
      count += this.calculateDepth([].concat(...filteredArr));
      return count;
    }
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
