/**
 * 643. 子数组最大平均数 I
 * 
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 */

/**
 * 找到k个最大的和
 * 
 * 测试用例未通过,118 / 123 个通过测试用例
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let len = nums.length;
    if(!len) return 0;
    if(len<=k) return nums.reduce((a,c)=>a+=c,0) / len;

    let max = 0;
    let left = 0;
    let temp = 0;
    for (let i = 0; i < k; i++) {
        temp+=nums[i];
    }
    max = Math.max(max,temp)
    for (let i = k; i < len; i++) {
        temp+=(nums[i]-nums[left++]);
        max = Math.max(max,temp);
    }
    return max /k;
};