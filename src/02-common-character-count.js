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
  const arr = [];
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  let position = 0;

  for (let i = 0; i < arr1.length; i++) {
    position = arr2.indexOf(arr1[i]);

    if (position !== -1) {
      arr.push(position);
      arr2.splice(position, 1);
    }
  }

  return arr.length;
  // throw new Error('Not implemented');
}

module.exports = getCommonCharacterCount;
