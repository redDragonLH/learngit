/**
 * 174. 地下城游戏
 * 
 * 一些恶魔抓住了公主（P）并将她关在了地下城的右下角。地下城是由 M x N 个房间组成的二维网格。我们英勇的骑士（K）最初被安置在左上角的房间里，他必须穿过地下城并通过对抗恶魔来拯救公主。
 * 骑士的初始健康点数为一个正整数。如果他的健康点数在某一时刻降至 0 或以下，他会立即死亡。
 * 有些房间由恶魔守卫，因此骑士在进入这些房间时会失去健康点数（若房间里的值为负整数，则表示骑士将损失健康点数）；其他房间要么是空的（房间里的值为 0），要么包含增加骑士健康点数的魔法球（若房间里的值为正整数，则表示骑士将增加健康点数）。
 * 为了尽快到达公主，骑士决定每次只向右或向下移动一步。
 * 编写一个函数来计算确保骑士能够拯救到公主所需的最低初始健康点数。
 * 
 * 说明:
 * 骑士的健康点数没有上限。
 * 任何房间都可能对骑士的健康点数造成威胁，也可能增加骑士的健康点数，包括骑士进入的左上角房间以及公主被监禁的右下角房间。
 */

/**
 * 动态规划问题
 * 1. dp二维数组里面保存着到这个路径的需要血量，必须保证每个格子最少是1
 * 2. 元素中的状态转移式有一点点复杂，必须保证走完整条路的时候数字是正的
 *      如果最后得出的数为负，那么需要用1减去这个数字得到一个正数
 *      如果最后得出的数为正，那么是不是就是血量为1就可以
 *      状态转移式就是
 *          dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]) - dungeon[i][j]
 *          dp[i][j] < 0? 
 * 
 *  3. 初始数据为  dp[0][0] = dungeon[0][0]
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {

    let row = dungeon.length;
    if(!row) return 0;
    let col = dungeon[0].length;
    let dp = new Array(row);

    for (let i = 0; i < row; i++) {
        dp[i] = new Array(col).fill(0)
        // dp[i][0] = dungeon[i][0]
    }
    // for (let i = 0; i < col; i++) {
    //     dp[0][i] = dungeon[0][1]
    // }
    console.log(dp);
    dp[0][0] = dungeon[0][1] > 0?1 : Math.abs(dungeon[0][1])
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if(i ===0 && j===0)continue;
            if(i===0) {
                dp[i][j] += dungeon[i][j-1] > 0?1 : Math.abs(dungeon[i][j-1])
                continue;
            }
            console.log(i,j);
            if(j===col-1) dp[i][j] +=dungeon[i-1][j] > 0?1 : Math.abs(dungeon[i-1][j])
        }        
    }
    console.log(dp);
};

calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]])