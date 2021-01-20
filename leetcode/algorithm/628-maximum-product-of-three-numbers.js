/**
 * 628. 三个数的最大乘积
 * 
 * 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 */

/**
 * 简单粗暴,先排序
 * 
 * 如果数组中全是非负数则排序后的最后三个数就是最大乘积需要的,如果全是非正数,那么最后三个数的乘积仍然是最大的
 * 
 * 如果数组中有正数和负数,则最大乘积可能是个最大正数的乘积,也可能是两个最小负数与最大正数的乘积
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    //              两个负数,一个最大正数               三个最大正数
    return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
};


/**
 * 线性扫描法
 * @param {*} nums 
 */
var maximumProduct = function(nums) {
    // 最小的和第二小的
    let min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER;
    // 最大的、第二大的和第三大的
    let max1 = -Number.MAX_SAFE_INTEGER, max2 = -Number.MAX_SAFE_INTEGER, max3 = -Number.MAX_SAFE_INTEGER;

    for (const x of nums) {
        if (x < min1) {
            min2 = min1;
            min1 = x;
        } else if (x < min2) {
            min2 = x;
        }

        if (x > max1) {
            max3 = max2;
            max2 = max1;
            max1 = x;
        } else if (x > max2) {
            max3 = max2;
            max2 = x;
        } else if (x > max3) {
            max3 = x;
        }
    }

    return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};