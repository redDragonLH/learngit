/**
 * 561. 数组拆分 I
 * 
 * 给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。
 * 返回该 最大总和 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let sortNum = nums.sort((a,b)=>a-b);
    let min = 0
    for (let i = 0; i < nums.length; i+=2) {
        min+=nums[i];
    }
    return min;
};
/**
 * 
 * 执行用时：156 ms, 在所有 JavaScript 提交中击败了38.22%的用户
 * 内存消耗：43.5 MB, 在所有 JavaScript 提交中击败了34.77%的用户
 */

 /**
  * 第三方优秀题解
  */
 /**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    const arr = new Int32Array(20001);
    const lim = 10000;
    for (const num of nums)
        arr[num + lim]++;
    let d = 0;
    let sum = 0;
    for (let i = -10000; i <= 10000; i++) {
        sum += ((arr[i + lim] + 1 - d) >> 1) * i;
        d = (2 + arr[i + lim] - d) % 2;
    }
    return sum;
};