function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res: number[][] = [];
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        // 提前结束
        if (nums[i] > 0) {
            return res;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[++left]) {}
                while (nums[right] === nums[--right]) {}
            } else if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            }
        }
    }
    return res;
}
