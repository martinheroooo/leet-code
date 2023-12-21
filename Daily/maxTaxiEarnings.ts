const searchLowEnd = (
    arr: number[][],
    high: number,
    target: number
): number => {
    let low = 0;
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid][1] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};

function maxTaxiEarnings(n: number, rides: number[][]): number {
    rides.sort((a, b) => a[1] - b[1]);
    const m = rides.length;
    const dp = new Array(m + 1).fill(0);

    for (let i = 0; i < m; i++) {
        let j = searchLowEnd(rides, i, rides[i][0]);
        dp[i + 1] = Math.max(
            dp[i],
            dp[j] + rides[i][1] - rides[i][0] + rides[i][2]
        );
    }
    return dp[m];
}
