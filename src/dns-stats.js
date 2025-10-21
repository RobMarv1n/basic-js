const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let arr = [];
  domains.forEach( el => {
    arr.push(el.match(/\w+(?!\.$)/gi));
  });
  let arr2 = [];
  let arr3 = [];
  arr.forEach( el => {
    arr2.push(el[el.length - 1]);
    arr3.push(el[el.length - 2]);
    if (el[el.length - 1] !== undefined) {
      obj['.' + el[el.length - 1]] = arr2.length;
    }
    if (el[el.length - 2] !== undefined) {
      obj['.' + el[el.length - 1] + '.' + el[el.length - 2]] = arr3.length;
    }
    if (el[el.length - 3] !== undefined) {
      obj['.' + el[el.length - 1] + '.' + el[el.length - 2] + '.' + el[el.length - 3]] = 1;
    }
  });
  return obj;
}

module.exports = {
  getDNSStats
};
