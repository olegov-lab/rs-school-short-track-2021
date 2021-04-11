/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mineBoard = [];
  const boardH = matrix.length;
  const boardW = matrix[0].length;
  for (let i = 0; i < boardH; i++) {
    const mineBoardLine = [];
    for (let j = 0; j < boardW; j++) {
      let mines = 0;
      if (j !== 0 && i !== 0 && matrix[i - 1][j - 1] === true) mines++;
      if (j !== 0 && matrix[i][j - 1] === true) mines++;
      if (j !== 0 && i !== (boardH - 1) && matrix[i + 1][j - 1] === true) mines++;
      if (i !== 0 && matrix[i - 1][j] === true) mines++;
      if (i !== (boardH - 1) && matrix[i + 1][j] === true) mines++;
      if (j !== (boardW - 1) && i !== 0 && matrix[i - 1][j + 1] === true) mines++;
      if (j !== (boardW - 1) && matrix[i][j + 1] === true) mines++;
      if (j !== (boardW - 1) && i !== (boardH - 1) && matrix[i + 1][j + 1] === true) mines++;
      mineBoardLine.push(mines);
    }
    mineBoard.push(mineBoardLine);
  }
  return mineBoard;

  // throw new Error('Not implemented');
}

module.exports = minesweeper;
