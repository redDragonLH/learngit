/**
 * 1365. 有多少小于当前数字的数字
 * 
 * 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。
 * 换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。
 * 以数组形式返回答案。
 */

/**
 * 最笨的办法
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    if(!nums.length) return nums;
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if(nums[i]>nums[j]) count++
            
        }
        result[i] = count;
    }
    return result;
};

/**
 * 最直观也是最差的算法,但是还击败了77%的用户,这是多少人帮倒忙
 * 
 * 执行用时：104 ms, 在所有 JavaScript 提交中击败了77.29%的用户
 * 内存消耗：39.9 MB, 在所有 JavaScript 提交中击败了18.99%的用户
 */

/**
 * 官方题解
 * 
 * 使用二维数组保存排序后的顺序
 * 
 * 这样数组元素和位置就能很好的结合在一起
 */
var smallerNumbersThanCurrent = function(nums) {
    const n = nums.length;
    const data = new Array(n).fill(0).map(v => new Array(2).fill(0)); // 二维数组?
    for (let i = 0; i < n; ++i) {
        data[i][0] = nums[i]; // 数字
        data[i][1] = i; // 位置
    }
    data.sort((a, b) => a[0] - b[0]); //排序

    const ret = new Array(n); // 结果数组
    let prev = -1; // ???
    for (let i = 0; i < n; ++i) {
        if (prev == -1 || data[i][0] !== data[i - 1][0]) { // 应该是考虑元素重复的问题
            prev = i;
        }
        ret[data[i][1]] = prev;
    }
    return ret;
};