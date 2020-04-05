/**
 * 122. 买卖股票的最佳时机 II
 * 
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */

/**
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]; // 初始化 最小数为 第一天数据，否则判断出问题
    let cha = 0; // 最大差数据，可以多次计算，所以在min值改变时就必须更新此值
    prices.map((e, i) => {
        
        if(i !== 0) { // 第一条忽略，因为已经初始化了
            if(min > e) { // 如果当前值比已知的最小值小，则替换
                if(prices[i-1] - min > 0) { // 如果此值的上一个数与min值计算为大于0，则可以卖出，
                    cha += prices[i-1] - min;
                } //不大于0则说明min值刚更新或者上一个值比min值更小，无法卖出
                min = e;
            } else if( min < e){ // 当前值比最小值大，则可以卖出，不必等待更高峰值
                cha += e - min;
                min = prices[i];
            }
        }
    })
    return cha;
};
/**
 * 执行用时 :80 ms, 在所有 JavaScript 提交中击败了29.22%的用户
 * 内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了99.44%的用户
 * 
 *  * 时间复杂度 O(n) ,n为数组数量
 * 空间复杂度 O(1), 只多了二个变量
 */
let nums = [7,1,5,3,6,4];
// let nums = [1,2,3,4,5];
console.log(maxProfit(nums));
