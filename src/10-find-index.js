/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let arrBeginning = 0;
  let arrEnd = array.length;
  let arrMiddle = Math.floor((arrBeginning + arrEnd) / 2);
  for (let i = 0; i < array.length; i++) {
    if (array[arrMiddle] !== value) {
      if (array[arrMiddle] > value) arrEnd = arrMiddle;
      else arrBeginning = arrMiddle;
      arrMiddle = Math.floor((arrBeginning + arrEnd) / 2);
    } else return arrMiddle;
  }
  return 'Value not found!!!';
}
// throw new Error('Not implemented');

module.exports = findIndex;
