function setZeroes(matrix) {
  let colFlag = false;
  let row = matrix.length;
  let col = matrix[0].length;

  // 第一次遍历：标记需要置零的行和列
  for (let i = 0; i < row; i++) {
    // 检查第一列是否有0
    if (matrix[i][0] === 0) colFlag = true;
    for (let j = 1; j < col; j++) {
      // 如果某个元素为0，将该行的第一个元素和该列的第一个元素置为0作为标记
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // 第二次遍历：根据标记置零
  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j > 0; j--) {
      // 如果该行或该列的标记为0，则将该元素置为0
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    // 如果第一列有零，将该列也置零
    if (colFlag) {
      matrix[i][0] = 0;
    }
  }
}
