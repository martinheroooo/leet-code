function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const remain = target - num;
        if (numMap[remain]) {
            return [numMap[remain] - 1, i];
        }
        numMap[num] = i + 1;
    }
    return [];
}
