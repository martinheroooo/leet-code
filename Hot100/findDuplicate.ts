function findDuplicate(nums: number[]): number {
  let l = 1;
  let r = nums.length - 1;

  while (l < r) {
    const mid = (l + r) >> 1;
    let count = 0;

    nums.forEach((num) => {
      if (num <= mid) {
        count++;
      }
    });

    if (count > mid) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}
