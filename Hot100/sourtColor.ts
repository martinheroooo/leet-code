/**
 Do not return anything, modify nums in-place instead.
 */
enum Color {
  Red,
  White,
  Blue,
}

const swap = (nums, a, b) => {
  [nums[a], nums[b]] = [nums[b], nums[a]];
};
function sortColors(nums: number[]): void {
  let left = 0;
  let cur = 0;
  let right = nums.length - 1;

  if (nums.length < 2) {
    return;
  }

  while (cur <= right) {
    if (nums[cur] === Color.Red) {
      swap(nums, cur, left);
      cur++;
      left++;
    } else if (nums[cur] === Color.Blue) {
      swap(nums, cur, right);
      right--;
    } else {
      cur++;
    }
  }
}
