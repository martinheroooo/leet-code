/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let i = nums.length - 2;
  let j = nums.length - 1;
  let k = nums.length - 1;

  /**
   * 找到相邻的，nums[i] < nums[j]
   */
  while (i >= 0 && nums[i] >= nums[j]) {
    i--;
    j--;
  }

  if (i < 0) {
    nums.reverse();
    return;
  }

  /**
   * 找第一个大于nums[i]的值
   */

  while (nums[k] <= nums[i]) {
    k--;
  }

  [nums[k], nums[i]] = [nums[i], nums[k]];
  /**
   * 从j开始到最后，倒排
   */
  for (let right = nums.length - 1; right > j; right--, j++) {
    [nums[right], nums[j]] = [nums[j], nums[right]];
  }
}
