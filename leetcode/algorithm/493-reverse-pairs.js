/**
 * 493. 翻转对
 * 
 * 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。
 * 你需要返回给定数组中的重要翻转对的数量。
 */

/**
 * 超时
 * 
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let result = 0;
    let num = nums.length;
    const double = nums.map(a=>a*2);
    for (let i = 0; i < num; i++) {
        for (let j = i+1; j < num; j++) {
            if(nums[i]>double[j]) result+=1
        }
    }
    return result;
};

console.log(reversePairs([1,3,2,3,1]));