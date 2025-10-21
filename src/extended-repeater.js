const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'} = options;
  str = String(str);
  addition !== undefined ? addition = String(addition) : addition;

  if (repeatTimes === undefined || repeatTimes < 1) {
    return str + addition;
  }

  let additionArr = []
  for (let i = 1; i <= additionRepeatTimes; i += 1) {
      additionArr.push(addition);
  }
  additionRepeatTimes ? addition = additionArr.join(additionSeparator) : addition;

  let strArr = [];
  for (let i = 1; i <= repeatTimes; i += 1) {
    addition ? strArr.push(str + addition) : strArr.push(str);
  }
  str = strArr.join(separator);

  return str;
}

module.exports = {
  repeater
};
