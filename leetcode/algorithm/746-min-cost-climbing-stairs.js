/**
 * 746. 使用最小花费爬楼梯
 * 
 * 数组的每个索引作为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。
 * 每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。
 * 您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。
 */

/**
 * 一步,两步
 * 超时~~~
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const len = cost.length
    return deep(cost,-1,0,len);
};
const deep = (cost,i,count,len)=> {
    if(i>= len )return count;
    let num = cost[i] || 0
    const l1 = deep(cost,i+1,count+num,len)
    const l2 = deep(cost,i+2,count+num,len)
    return l1<l2?l1:l2
}


/**
 * 
 * 1. 确定元素组成: 当前消耗最小体力
 * 2. 关系式: dp[i] = min(dp[i-1]+cost[i],dp[i-1]+cost[i+1])
 * 3. 初始数据,当2<= i<=cost.len,时才能在1,2步直接选择,所以前两个数据必须为0 ,dp[0] = dp[1] = 0;
 * 
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    const dp = new Array(n + 1);
    dp[0] = dp[1] = 0;
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[n];
};