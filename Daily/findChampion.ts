function findChampion(grid: number[][]): number {
    const n = grid.length;
    const res = new Array(n).fill('').map((_) => 0);
    let maxIndex = 0;
    for (let i = 0; i < n; i++) {
        res[i] = 0;
        for (let j = 0; j < n; j++) {
            res[i] = res[i] + grid[i][j];
        }
        maxIndex = res[maxIndex] > res[i] ? maxIndex : i;
    }
    return maxIndex;
}

function findChampion2(grid: number[][]): number {
    const n = grid.length;
    let champion = 0;
    for (let i = 0; i < n; i++) {
        if (grid[i][champion]) {
            champion = i;
        }
    }
    return champion;
}
