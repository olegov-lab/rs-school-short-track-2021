/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // let n = 152;

  let str = String(n);

  str = str.split('');

  let arr = str.slice();

  // alert(arr);

  const item = Math.min(...arr);

  // alert (item);

  const index = arr.indexOf(String(item));

  // alert (index);

  arr.splice(index, 1);

  arr = arr.join('');

  // alert(arr);

  return Number(arr);
  // throw new Error('Not implemented');
}

module.exports = deleteDigit;
