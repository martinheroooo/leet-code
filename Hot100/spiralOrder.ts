function spiralOrder(matrix: number[][]): number[] {
  if (!matrix.length) {
    return [];
  }
  const res: number[] = [];
  const row = matrix.length;
  const col = matrix[0].length;

  let top = 0,
    left = 0,
    bottom = row - 1,
    right = col - 1;

  while (true) {
    // 从左到右
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }

    if (++top > bottom) {
      break;
    }
    // 从上到下
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }

    if (--right < left) {
      break;
    }
    // 从右到左
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }

    if (--bottom < top) {
      break;
    }
    // 从下到上
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    if (++left > right) {
      break;
    }
  }
  return res;
}
