/**
 * 724. 寻找数组的中心索引
 * 
 * 给定一个整数类型的数组 nums，请编写一个能够返回数组 “中心索引” 的方法。
 * 我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
 */

/**
 * 官方题解 前缀和
 * 思路很简单,就是先获取所有的和(但是大数字可能会有超过最大可表示数的隐患),然后从头循环相加,如果在某个位置,这个位置之前的数字和的2倍加上当前数字等于总数,那么这个位置就是中心索引
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (2 * sum + nums[i] === total) {
            return i;
        }
        sum += nums[i];
    }
    return -1;
};