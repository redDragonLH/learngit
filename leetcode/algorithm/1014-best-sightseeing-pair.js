/**
 * 1014. 最佳观光组合
 * 
 * 给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。
 * 一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。
 * 返回一对观光景点能取得的最高分。
 */

/**
 * 没啥思路，难道要前缀和，好像达成不了目标
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let max = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = i+1; j < A.length; j++) {
            let count = A[i] + A[j] + i -j;
            if(count > max) max = count;
            
        }        
    }
    return max
};
console.log(maxScoreSightseeingPair([8,1,5,2,6]));
/**
 * 未优化效率
 * 
 * 执行用时 :8972 ms, 在所有 JavaScript 提交中击败了7.86%的用户
 * 内存消耗 :40.3 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */