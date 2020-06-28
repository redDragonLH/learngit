/**
 * 209. 长度最小的子数组
 * 
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0。
 */

/**
 * 思路 双指针
 * 维护两个指针，在指针内的元素小于 s 时 右指针向前移动，大于s 时左指针向前移动
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let len = nums.length;
    if(!len) return 0
    let left = 0;right = 1;
    let flag = len+1; // 因为是求最小值，所以初始不能为0，可以直接用 Number.MAX_SAFE_INTEGER 最大安全整数
    let con = nums[0];
    while (left < len) {
        if(flag === 1) return flag; // 是1 就不可能再小了，直接返回就行
        if(con < s && right < len) { // 右指针向右走的判断
            con += nums[right] || 0;
            right++;
        } else  { // 左指针向右走，但是因为右指针到头的问题，需要再加一层判断，
            if (con >= s) {
                flag = Math.min(right - left,flag)
                con -= nums[left];
            }
            left++; // 不论因为什么原因来的这个判断 左指针都必须向右走
        }
    }
    return flag === len+1 ? 0: flag; // 初始不能为0 的问题，就得加判断
};
console.log(minSubArrayLen(11,[1,2,3,4,5]))
console.log(minSubArrayLen(7,[1,2,3,4,5]))
console.log(minSubArrayLen(15,[1,2,3,4,5]))

/**
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了82.39%的用户
 * 内存消耗：36.1 MB, 在所有 JavaScript 提交中击败了50.00%的用户
 */