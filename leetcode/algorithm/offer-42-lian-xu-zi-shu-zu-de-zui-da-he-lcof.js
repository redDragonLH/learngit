/**
 * 剑指 Offer 42. 连续子数组的最大和
 * 
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 * 要求时间复杂度为O(n)。
 */

/**
 * 这样计算不会出现子数组的值永远比单个的大么，而且为啥要+x，不是连续数组么，隔了元素怎么连续
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};