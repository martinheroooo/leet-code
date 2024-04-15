function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let res = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            res = Math.max(height[left] * (right - left), res);
            left += 1;
        } else {
            res = Math.max(height[right] * (right - left), res);
            right -= 1;
        }
    }
    return res;
}
