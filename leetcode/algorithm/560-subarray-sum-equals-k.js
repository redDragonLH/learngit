/**
 * 560. 和为K的子数组
 * 
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 */

/**
 * 枚举 双循环判断是否相加等于目标值
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    for (let start = 0; start < nums.length; ++start) {
        let sum = 0;
        for (let end = start; end >= 0; --end) {
            sum += nums[end];
            if (sum == k) {
                count++;
            }
        }
    }
    return count;
};
/**
 * O(n^2)的时间复杂度
 */


/**
 * 前缀和 + 哈希表优化
 * 
 * 
 */

var subarraySum = function(nums, k) {
    const mp = new Map();
    mp.set(0, 1);
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        if (mp.has(pre - k)) count += mp.get(pre - k);
        if (mp.has(pre)) mp.set(pre, mp.get(pre) + 1);
        else mp.set(pre, 1);
    }
    return count;
};