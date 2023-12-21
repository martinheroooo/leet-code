/**
 Do not return anything, modify nums in-place instead.
 */

/**
 * 示例 1:
 * 输入: nums = [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 示例 2:
 * 输入: nums = [0]
 * 输出: [0]
 */
function moveZeroes(nums: number[]): void {
    let f = 0;
    let s = 0;
    while (f < nums.length) {
        if (nums[f] !== 0) {
            [nums[s], nums[f]] = [nums[f], nums[s]];
            s++;
        }
        f++;
    }
}
