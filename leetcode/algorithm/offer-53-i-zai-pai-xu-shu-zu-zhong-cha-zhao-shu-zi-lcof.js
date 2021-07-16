/**
 * 剑指 Offer 53 - I. 在排序数组中查找数字 I
 *
 * 统计一个数字在排序数组中出现的次数。
 */
/**
 * 使用排序啥的效率也比O(n)高吧
 * 还有其他小于O(n)的解法么
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let result = 0;
  nums.forEach((e) => {
    if (e === target) result++;
  });
  return result;
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了98.97%的用户
 * 内存消耗：38.9 MB, 在所有 JavaScript 提交中击败了58.05%的用户
 */

/**
 * 哦,排序数组,那就直接二分
 * 二分到后还要遍历有多少个
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let result = 0;
  let targetStartIndx = binarySearch(nums, target);
  if (targetStartIndx === undefined) return result;
  for (let i = targetStartIndx; i <= nums.length && nums[i] === target; i++) {
    result++;
  }
  // 可能需要向左遍历
  for (let i = targetStartIndx - 1; i >= 0 && nums[i] === target; i--) {
    result++;
  }
  return result;
};

const binarySearch = (arr, target) => {
  let right = arr.length,
    left = 0;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};
console.log(search([5, 7, 7, 8, 8, 10], 8));
/**
 * 为啥还不如遍历
 *
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了64.90%的用户
 * 内存消耗：40.4 MB, 在所有 JavaScript 提交中击败了5.04%的用户
 */

/**
 * 暴力法也有优化空间,当前元素大于target之后可以直接中断遍历,立即返回
 *
 * 不过也增加了一条判断语句,具体是否能减少时间还得看元素靠近左侧还是右侧
 */
var search = function (nums, target) {
  let result = 0;
  let len = nums.length;
  for (i = 0; i < len; i++) {
    if (nums[i] === target) result++;
    if (nums[i] > target) return result;
  }
  return result;
};
/**
 * 改为Java 就是 0 毫秒~~
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了98.97%的用户
 * 内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了36.90%的用户
 */

/**
 * 也可以使用数组结构自带的方法,findIndex啥的,然后向后遍历检查有多少个
 */
var search = function (nums, target) {
  let result = 0;
  let len = nums.length;
  let index = nums.findIndex((e) => e === target);
  for (i = index; i < len && nums[i] === target; i++) {
    result++;
  }
  return result;
};
/**
 * 64毫秒就到头了????
 * 
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了98.97%的用户
 * 内存消耗：39 MB, 在所有 JavaScript 提交中击败了53.88%的用户
 */