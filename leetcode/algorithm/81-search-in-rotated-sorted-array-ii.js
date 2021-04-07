/**
 * 81. 搜索旋转排序数组 II
 *
 * 已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
 * 例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。
 *
 * 给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。
 */

/**
 *
 * 变异二分查找~
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let len = nums.length;
    if(!len) return false;
    if(len === 1) return nums[0] === target;

    for (let i = 0; i < len; i++) {
        if(nums[i] === target) return true;
    }
    return false;
};
/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了79.59%的用户
 * 内存消耗：39 MB, 在所有 JavaScript 提交中击败了89.69%的用户
 */

/**
 * 官方题解
 */
 var search = function(nums, target) {
    const n = nums.length;
    if (n === 0) {
        return false;
    }
    if (n === 1) {
        return nums[0] === target;
    }
    let l = 0, r = n - 1;
    // 判断条件 右大于左节点
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return true;
        }
        //  如果三个节点元素相等,这是什么情况下嘞
        // 重复数据情况下无法判断区间,所以缩小边界,重新查找(去掉重复项)
        if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
            ++l;
            --r;
            // 左侧节点小于 中间节点
        } else if (nums[l] <= nums[mid]) {
            // 目标节点比左节点大并且比中间节点小
            // 说明目标值在左侧,反之在右侧
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            //
            if (nums[mid] < target && target <= nums[n - 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return false;
};