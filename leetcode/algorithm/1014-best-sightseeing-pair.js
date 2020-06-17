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
 * 
 * 最优代码的基本思路和我一样，那么为啥速率差了那么多～～继续进行简单重构
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let len = A.length;
    if(len === 0) return 0 
    let maxb = A[0]; // 初始化左侧最大值
    let max = 0;
    for (let i = 1; i < len; i++) {
        max = Math.max(max,maxb + A[i]-i); //因为不是从0 开始计算所以可以先进行最高分的计算（不先计算也不行，要不然可能会出现i+i的情况）
        maxb = Math.max(maxb,A[i]+i); // 然后获取当前元素及之前重的最大值
    }
    return max
};
console.log(maxScoreSightseeingPair([8,1,5,2,6]));
/**
 * 计算元素最大值的方案（简单重构后）
 * 
 * 执行用时 :84 ms, 在所有 JavaScript 提交中击败了52.81%的用户
 * 内存消耗 :40.3 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */