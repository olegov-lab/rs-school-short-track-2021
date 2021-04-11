/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const finalArr = [];
  for (let i = 0; i < names.length; i++) {
    let counter = 1;
    let name = finalArr.includes(names[i]) ? `${names[i]}(${counter})` : names[i];

    while (finalArr.includes(name)) {
      const numberLength = counter.toString().length;
      let newName = name.split('').splice(0, name.length - numberLength - 2).join('');

      counter++;
      newName = `${newName}(${counter})`;
      name = newName;
    }
    finalArr.push(name);
  }
  return finalArr;
}
// throw new Error('Not implemented');

module.exports = renameFiles;
