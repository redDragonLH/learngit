/**
 * 714. 买卖股票的最佳时机含手续费
 * 
 * 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。
 * 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
 * 返回获得利润的最大值。
 * 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
 */

/**
 * 因为有手续费,以前的贪心就没法使用,因为贪心是把长线的交易化为短线,每个相邻的数据进行对比交易,这样交易次数越多手续费就越多
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {

    let count = 0;
    let current = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] < current) {
            current = prices[i]
        }else if(prices[i] > current+fee) {
            count += prices[i] - current-fee
            current = prices[i]
        }
    }
    return count;
};

/**
 * 动态规划法:
 * 定义数组元素含义:dp[i][0]表示第i天交易完手里没有股票饿最大利润,dp[i][1]表示第i天交易完后手里持有一支股票的最大利润
 * 状态转移方程:
 *      dp[i][0]=max{dp[i−1][0],dp[i−1][1]+prices[i]−fee}
 *      dp[i][1]=max{dp[i−1][1],dp[i−1][0]−prices[i]}
 * 
 * 初始状态:第 0 天交易结束的时候有 dp[0][0]=0 以及 dp[0][1]=−prices[0]
 * 
 */
/**
 *  去掉数组,使用变量代替
 */
var maxProfit = function(prices, fee) {
    const n = prices.length;
    let [sell, buy] = [0, -prices[0]];
    for (let i = 1; i < n; i++) {
        [sell, buy] = [Math.max(sell, buy + prices[i] - fee), Math.max(buy, sell - prices[i])]
    }
    return sell;
};