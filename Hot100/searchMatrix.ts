function searchMatrix(matrix: number[][], target: number): boolean {
  const row = matrix.length;
  const col = matrix[0].length;

  let i = 0,
    j = col - 1;

  while (i < row && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }

    if (matrix[i][j] < target) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}
