// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6

function trap(height: number[]): number {
    // 必须 > 2
    if (height.length <= 2) {
        return 0;
    }
    const stack = [0];
    let sum = 0;
    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const popIndex = stack.pop();
            if (stack.length) {
                const h =
                    Math.min(height[i], height[stack[stack.length - 1]]) -
                    height[popIndex ?? -1];
                const w = i - stack[stack.length - 1] - 1;
                sum += w * h;
            }
        }
        stack.push(i);
    }
    return sum;
}
