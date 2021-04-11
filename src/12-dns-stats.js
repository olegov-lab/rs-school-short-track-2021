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
  const result = {};

  domains.forEach((domain) => {
    const domainParts = domain.split('.').reverse();
    const combinations = [];
    let combination = '';

    domainParts.forEach((part) => {
      combination += `.${part}`;
      combinations.push(combination);
    });

    combinations.forEach((element) => {
      if (element in result) {
        result[element]++;
      } else {
        result[element] = 1;
      }
    });
  });
  return result;
  // throw new Error('Not implemented');
}

module.exports = getDNSStats;
