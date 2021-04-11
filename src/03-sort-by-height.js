/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // const arr1 = [];
  // const arr2 = [];
  // let arr3 = [];
  // let arr = [1, 23, -1, 202, -1 , 67, -1];

  let result = arr.filter((item) => item !== -1);
  result = result.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.splice(i, 0, arr[i]);
    }
  }

  // arr3 = arr2.concat(arr1, result);

  return result;
  // throw new Error('Not implemented');
}

module.exports = sortByHeight;
