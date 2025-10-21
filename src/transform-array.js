const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const controlSequences = ['--discard-prev','--discard-next','--double-prev','--double-next'];
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
      switch (arr[index]) {
        case '--discard-prev':
          index !== 0 ? newArr.pop() : newArr;
          break;
        case '--discard-next':
          index !== arr.length - 1 ? newArr.push(arr[index + 2]) : newArr;
          index += 2;
          break;
        case '--double-prev':
          index !== 0 ? newArr.push(arr[index - 1]) : newArr;
          break;
        case '--double-next':
          index !== arr.length - 1 ? newArr.push(arr[index + 1], arr[index + 1]) : newArr;
          index += 1;
          break;
        default:
          newArr.push(arr[index]);
      }
  };
  return newArr.filter(element => !controlSequences.includes(element))
}

module.exports = {
  transform
};
