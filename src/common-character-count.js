const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const regExp = new RegExp(`[${s2}]`, 'gi');
  if (!s1 || !s2 || s1.match(regExp) === null) return 0;
  let strArr = s1.split('');
  let strArr2 = s2.split('');
  let count = [];
  strArr.forEach( el => {
     if (strArr2.includes(el)) {
      count.push(el);
      strArr2.splice(strArr2.indexOf(el), 1);
     }
  });
  return count.length;
}

module.exports = {
  getCommonCharacterCount
};
