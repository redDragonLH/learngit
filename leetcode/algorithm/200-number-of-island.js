/**
 * 200 岛屿数量
 * 
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 理解： 相邻的1就算是一个岛屿，不相邻的算第二个
 */
/**
 * 理解错误，代码也对不了
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '0') continue;
            
            let num = (grid[i][j-1]|| 0) + (0+ grid[i][j+1] || 0) + (0 + grid[i-1]? grid[i-1][j] : 0) + (0 + grid[i+1]?grid[i+1][j] : 0);
            typeof num === 'string' && num.replace(/0/g,"").length < 2 && count++;
            typeof num === 'number' && num === 0 && count++;
            
        }
        
    }
    return count;
};
// let nums = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
let nums = [["1"]]
console.log(numIslands(nums));
