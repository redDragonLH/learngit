/**
 * 
 * 1431. 拥有最多糖果的孩子
 * 
 * 给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。
 * 对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。
 */

 /**
  * 解决方案就是先轮询在比对，
  * 
  * 本来还以为有只轮询一次的解的，但是如果在比对大小时进行比对，就无可避免的要对已经对比的数据进行回溯，再赋值，
  * 所以还不如分两次循环
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = candies.reduce((ac,cu)=> ac > cu ?ac : cu)
    return candies.map((e)=> {e+extraCandies >= max});
};

console.log(kidsWithCandies([2,3,5,1,3],3));
/**
 * 执行用时 :72 ms, 在所有 JavaScript 提交中击败了60.09%的用户
 * 内存消耗 :33.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */