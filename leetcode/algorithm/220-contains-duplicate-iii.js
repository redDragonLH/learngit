/**
 * 220. 存在重复元素 III
 * 
 * 给你一个整数数组 nums 和两个整数 k 和 t 。
 * 请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，
 * 同时又满足 abs(i - j) <= k 。
 * 
 * 如果存在则返回 true，不存在返回 false。
 */

/**
 * 因为是绝对值，所以原来的剪枝可能无法实现，
 * 
 * 先使用最直接的解法，对逻辑进行梳理
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function (nums, k, t) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            if(Math.abs(i-j) <= k && Math.abs(nums[i] - nums[j]) <= t){
                return true
            }
        }

    }
    return false
};
/**
 * 无剪枝，直观逻辑
 * 执行用时：1496 ms, 在所有 JavaScript 提交中击败了8.17%的用户
 * 内存消耗：39.4 MB, 在所有 JavaScript 提交中击败了26.76%的用户
 */