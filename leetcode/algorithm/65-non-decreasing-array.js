/**
 * 665. 非递减数列
 * 
 * 给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
 * 我们是这样定义一个非递减数列的： 对于数组中所有的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
 */

/**
 * 如遇失调跳过,但只跳一次
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    
    let flag = true;
    for (let i = 0; i < nums.length-1; i++) {
        if(nums[i]>nums[i+1]){
            if(flag) flag = false;
            else return false
        }
        
    }
    return true;
};

/**
 * 官方题解
 * 
 * 这就复杂多了~~
 * @param {*} nums 
 */
var checkPossibility = function(nums) {
    const n = nums.length;
    for (let i = 0; i < n - 1; ++i) {
        const x = nums[i], y = nums[i + 1];
        if (x > y) {
            nums[i] = y;
            if (isSorted(nums)) {
                return true;
            }
            nums[i] = x; // 复原
            nums[i + 1] = x;
            return isSorted(nums);
        }
    }
    return true;
};

const isSorted = (nums) => {
    const n = nums.length;
    for (let i = 1; i < n; ++i) {
        if (nums[i - 1] > nums[i]) {
            return false;
        }
    }
    return true;
}