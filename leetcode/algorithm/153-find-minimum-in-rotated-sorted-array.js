/**
 * 153. 寻找旋转排序数组中的最小值
 *
 * 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
 *      若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
 *      若旋转 4 次，则可以得到 [0,1,2,4,5,6,7]
 * 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。
 *
 * 给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。
 */
/**
 * ...
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  return Math.min(...nums);
};
/**
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了82.00%的用户
 * 内存消耗：38.6 MB, 在所有 JavaScript 提交中击败了25.97%的用户
 */

/**
 * 二分法
 * 
 * 思路: 数组中的最后一个元素x:在最小值右侧的元素(不包括最后一个元素本身),它们的值一定都严格小于x;而在最小值左侧的元素,它们的值一定都严格大于x
 * 那么,在二分查找中,左边界为low,右边界为high,区间的中点为 pivot,最小值就在该区间内,将中间点与右边界进行比较,有三种情况:
 * 
 *  1. pivot < high ,说明pivot 是最小值右侧的元素,因此可以忽略二分查找区间的右半部分
 *  2. pivot > high ,说明pivot 是最小值左侧的元素,因此我们可以忽略二分查找区间的左半部分
 *  3. 由于数组不包含重复元素,并且只要当前的区间长度不为1,pivot 就不会与high重合;而如果当前的区间长度为1,这说明已经可以结束二分查找
 *      因此不会存在pivot === high的情况
 */
 var findMin = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    // 常用的判断条件,右节点小于左节点
    // 左右节点位置相等
    // 不同的问题用哪种我也不知道呀
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2);
        if (nums[pivot] < nums[high]) {
            high = pivot;
        } else {
            low = pivot + 1;
        }
    }
    return nums[low];
};

/**
 * 题解参考:
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/er-fen-cha-zhao-wei-shi-yao-zuo-you-bu-dui-cheng-z/
 */