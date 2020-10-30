/**
 * 463. 岛屿的周长
 * 
 * 给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。
 * 网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
 * 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。
 */

/**
 * 找到一个线头~~
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let result = 0;
    let resultArr = [];
    const row = grid.length;
    const line = grid[0].length
    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < line.length; j++) {
            if(grid[i][j] === 1){
                resultArr.push([i,j]);
                return false
            }
        }
    }
    
    while(resultArr.length){
        let [a,b] = resultArr.shift();
        let bian = 4;
        if(a+1<row && grid[a+1,b] === 1) {
            bian--;
            resultArr.push([a+1,b])
        }
        if(a-1>-1 && grid[a-1,b] === 1) {
            bian--;
            resultArr.push([a-1,b])
        }
        if(b+1< line && grid[a,b+1] === 1) {
            bian--;
            resultArr.push([a,b+1])
        }
        if(b-1> -1 && grid[a,b-1] === 1) {
            bian--;
            resultArr.push([a,b-1])
        }
        result += bian;
    }
    return bian;
};

/**
 * 官方题解
 * @param {*} grid 
 */
var islandPerimeter = function (grid) {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const n = grid.length, m = grid[0].length;

    const dfs = (x, y) => {
        if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === 0) {
            return 1;
        }
        if (grid[x][y] === 2) {
            return 0;
        }
        grid[x][y] = 2;
        let res = 0;
        for (let i = 0; i < 4; ++i) {
            const tx = x + dx[i];
            const ty = y + dy[i];
            res += dfs(tx, ty);
        }
        return res;
    }

    let ans = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (grid[i][j] === 1) {
                ans += dfs(i, j);
            }
        }
    }
    return ans;
};