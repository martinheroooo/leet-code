function maxSubArray(nums: number[]): number {
    let max = -Infinity;
    let sum = 0;

    nums.forEach((num) => {
        sum = sum < 0 ? num : sum + num;
        max = Math.max(sum, max);
    });

    return max;
}
