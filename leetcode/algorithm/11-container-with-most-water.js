/**
 * 11. 盛最多水的容器
 * 
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 */
/**
 * 
 * 双指针法 从两头遍历法
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let max = 0;
    // 从两头遍历，判断那边的高度低，就那边进一
    // 原理我还没明白~~~
    while (end !== start) {
        
        max = Math.max(max, (end - start) * Math.min(height[end], height[start]));
        height[end]< height[start] ? end-- : start++
    }
    return max;
};
// let nums = [1,8,6,2,5,4,8,3,7];
let nums = [2,3,4,5,18,17,6];
console.log(maxArea(nums));
/**
 *
 * 执行用时 :72 ms, 在所有 JavaScript 提交中击败了72.01%的用户
 * 内存消耗 :35.2 MB, 在所有 JavaScript 提交中击败了94.12%的用户
 */