/**
 * 1. 两数之和
 * 
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // i+j = target，那么 target - i = j
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let dif = target - nums[i]
        if (map.has(dif)) {
            return [map.get(dif), i]
        }else {
            map.set(nums[i], i);
        }
    }
    
};
console.log(twoSum([2, 7, 11, 15],9));
/**
 * 执行用时 :72 ms, 在所有 JavaScript 提交中击败了79.51%的用户
 * 内存消耗 :36.7 MB, 在所有 JavaScript 提交中击败了6.78%的用户
 */
