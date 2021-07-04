/**
 * 645. 错误的集合
 * 
 * 集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字 并且 有一个数字重复 。
 * 
 * 给定一个数组 nums 代表了集合 S 发生错误后的结果。
 * 请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let arr = new Array(nums.length + 1).fill(0);
    let result = []
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]]++;
    }
    arr.forEach((e, i) => {
        if (e === 2) result[0] = i;
        else if (!e) result[1] = i;
    })
    return result;
};
console.log(findErrorNums([1, 2, 2, 4]));

/**
 * 
 * 执行用时：108 ms, 在所有 JavaScript 提交中击败了53.87%的用户
 * 内存消耗：41.1 MB, 在所有 JavaScript 提交中击败了57.31%的用户
 */

/**
 * 官方题解： 排序版
 * 先对数据排序，然后对比相邻的两个数，如果相邻两个相等则是重复数据，如果两数相差大于1则中间是丢失的数
 */
