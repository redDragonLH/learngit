/**
 * 121 买卖股票的最佳时机
 * 
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
 * 注意：你不能在买入股票前卖出股票。
 */

/**
 * 各种情况：
 * * 大 中 小 ，小数 之后没有了，所以返回 0
 * * 中 大 小 ，小后边没了，小 数会刷新数据，这样导致flag 更新之后 到头了或者更小，最后返回0
 * * 
 * 必须考虑各种情况，不能再有了小数之后立即清空，可能前部分的差更大
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]; // 初始化 最小数为 第一天数据，否则判断出问题
    // max 变量有点多余
    let max = 0;
    let cha = 0; // 最大差数据，因为可能有山峰状数据，所以差值必须滞后，不能最后计算
    prices.map((e, i) => {
        if(i !== 0) { // 第一条忽略，因为已经初始化了
            if(min > e) { // 如果当前值比已知的最小值小，则替换，但是 差值不更新，以防以后的数据比当前差值小
                min = max = e;
            } else if(max < e && cha < e - min) { // 当前值比最大值大，并且减去当前最小值后比差值大，则更新差值与最大值
                cha = (max = e)- min;
            }
        }
    })
    return cha;
};
/**
 * 执行用时 :64 ms, 在所有 JavaScript 提交中击败了92.75%的用户
 * 内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 * 
 * 时间复杂度 O(n) ,n为数组数量
 * 空间复杂度 O(1), 只多了三个变量
 */
// let nums = [7,1,5,3,6,4];
// let nums = [3,3]
// let nums = [7,6,4,3,1];
let nums = [3,2,6,5,0,3];
console.log(maxProfit(nums));
