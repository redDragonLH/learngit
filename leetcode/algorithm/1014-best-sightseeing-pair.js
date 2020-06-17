/**
 * 1014. 最佳观光组合
 * 
 * 给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。
 * 一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。
 * 返回一对观光景点能取得的最高分。
 */

/**
 * 没啥思路，难道要前缀和，好像达成不了目标
 * 
 * 思路2: 计算当前元素之前的最大值，然后与当前的元素计算
 *  步骤1 计算最大值：就是当前元素+i 每次比对就好
 * 
 * 思路2 的优化还是不够，虽然速度提升巨大但是还在最差速度徘徊
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let maxb = 0;
    let max = 0;
    for (let i = 1; i < A.length; i++) {
        let bef = i-1
        maxb = Math.max(maxb,A[bef]+bef);
        max = Math.max(max,maxb + A[i]-i)
    }
    return max
};
console.log(maxScoreSightseeingPair([8,1,5,2,6]));
/**
 * 计算元素最大值的方案
 * 
 * 执行用时 :120 ms, 在所有 JavaScript 提交中击败了26.97%的用户
 * 内存消耗 :40.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */