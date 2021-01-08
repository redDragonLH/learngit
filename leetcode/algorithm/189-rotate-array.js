/**
 * 189. 旋转数组
 * 
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 */

/**
 * 基于内部函数处理数据
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length;
    if(len< 2) return nums;
    const splitA = nums.splice(k,len-1);
    nums.unshift(...splitA);
    nums.length = len;
    return nums
};
/**
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了82.30%的用户
 * 内存消耗：39.7 MB, 在所有 JavaScript 提交中击败了33.53%的用户
 */

/**
 * 反转数组,昨天刚在编程珠玑上看到
 */
const reverse = (nums, start, end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start += 1;
        end -= 1;
    }
}

var rotate = function(nums, k) {
    k %= nums.length;
    // 自建方法要比语言自带的方法快很多
    reverse(nums, 0, nums.length - 1);
    // nums.reverse()
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了96.22%的用户
 * 内存消耗：38.5 MB, 在所有 JavaScript 提交中击败了91.54%的用户
 */