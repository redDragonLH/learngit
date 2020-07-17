/**
 * 35. 搜索插入位置
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let len = nums.length;
  if (!len) return 0;
  let pos = parseInt(nums.length / 2);
  let left = 0;
  let right = len - 1;
  while (right >= left) {
    if (nums[pos] !== target) {
      if (nums[pos] > target) {
        right = pos - 1;
        pos = left + parseInt((right - left) / 2);
      } else {
        left = pos + 1;
        pos = left + parseInt((right - left) / 2);
      }
    } else {
      return pos;
    }
  }
  return pos;
};
console.log(searchInsert([1, 3, 5, 6], 8));

/**
 * 二分法这么差么
 *
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了13.03%的用户
 * 内存消耗：38.1 MB, 在所有 JavaScript 提交中击败了8.70%的用户
 */

/**
 * 官方题解 二分法
 * 简洁写法范例
 */
var searchInsert = function (nums, target) {
  // 定义变量,没啥好说的
  const n = nums.length;
  let left = 0,
    right = n - 1,
    ans = n; // 赋值为n也是和在循环中的语句相辅相成,理论上如果一直target一直大于 中间节点,那么ans就是初赋之值,无需重新赋值
    // 判断条件一样
  while (left <= right) {
    // 在处理内部逻辑时减少了一层判断,并且不是在循环中直接返回数据,难道是因为这个循环条件会导致大部分都要循环到结尾吗,或者说是因为此题的特殊性所以在考虑时就把返回逻辑压缩成一个
    // 在获取中间节点时使用了位运算,不过把获取节点上提到开头确实是简化代码的一个方法,这样的话提前获取也就没有意义了
    let mid = ((right - left) >> 1) + left;
    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
/**
 * 简洁之处:
 *  1. 在循环中上提计算逻辑,或者说统一计算逻辑,把计算提出到判断逻辑之外
 *  2. 初始赋值 考虑&配合 计算逻辑,可以减少赋值次数,如上ans,如果target是在数组最大元素之前,那么无须重新赋值,
 *      另外循环没有在内部直接返回,感觉也是和整体的计算逻辑相配合,这样的话就去掉了一部分ans赋值逻辑和一层判断相等并返回的逻辑
 */

/**
 * 思考题,
 *  1. 怎么样组织算是好的代码
 *  2. 组织代码时应该怎样考虑
 * 
 * 1. 简洁: 尽量减少相同代码,可以对相同代码进行位置改变,上提或者延后
 *    合并: 在组织代码时应该考虑一些类似逻辑的代码能否合并,比如上题的返回逻辑
 *    清晰: 对于代码的运行逻辑应该直观
 * 
 * 2. 整体,一段代码应该按照一个整体去考虑,按照一个整体去考虑就可以最大限度的利用有限的代码作出更多的逻辑
 *      初始赋值对整个代码有什么影响,
 *      数据返回的时机对于整个逻辑有什么影响
 *      每段代码都可能会有更好的写法,更好的初始值
 *    在初始进行变量赋值时就应考虑初始值对运行逻辑的影响
 *    
 * 结语: 多问几个是否可以吧
 */