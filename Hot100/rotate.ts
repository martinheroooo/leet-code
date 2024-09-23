/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const row = matrix.length;
  const col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = i; j < col; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < row; i++) {
    matrix[i].reverse();
  }
}
