function singleNumber(nums: number[]): number {
    return nums.reduce((prev, cur) => prev ^ cur);
}
