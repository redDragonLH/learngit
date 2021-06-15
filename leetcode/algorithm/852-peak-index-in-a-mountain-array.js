/**
 * 852. 山脉数组的峰顶索引
 *
 * 符合下列属性的数组 arr 称为 山脉数组 ：
 *  * arr.length >= 3
 *  * 存在 i（0 < i < arr.length - 1）使得：
 *       * arr[0] < arr[1] < ... arr[i-1] < arr[i]
 *       * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 * 给你由整数组成的山脉数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i 。
 */

/**
 * 二分法可以解决
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  //当 中点小于左点(low 点),,说明峰顶在中点的左边,
  //当 中点大于左点,可能在中点的右边,也可能是在中点的左边
};


/**
 * 原生方法
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let max = Math.max(...arr);
  return arr.findIndex((e) => e === max);
};
/**
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了93.87%的用户
 * 内存消耗：39.6 MB, 在所有 JavaScript 提交中击败了19.77%的用户
 */