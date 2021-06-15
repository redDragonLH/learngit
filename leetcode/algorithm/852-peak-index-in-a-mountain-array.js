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
  //当 中点大于左点,峰顶可能在中点的右边,也可能是在中点的左边
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

/**
 * 官方题解: 二分查找
 */
 var peakIndexInMountainArray = function(arr) {
    const n = arr.length;
    let left = 1, right = n - 2, ans = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) /2 );
        // 巧妙的跳过了中点和两边点的复杂判断~~
        // 直接判断相邻元素就完全知道走向了嘛~~~~~
        if (arr[mid] > arr[mid + 1]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};