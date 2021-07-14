/**
 * 1818. 绝对差值和
 *
 * 给你两个正整数数组 nums1 和 nums2 ，数组的长度都是 n 。
 *
 * 数组 nums1 和 nums2 的 绝对差值和 定义为所有 |nums1[i] - nums2[i]|（0 <= i < n）的 总和（下标从 0 开始）。
 *
 * 你可以选用 nums1 中的 任意一个 元素来替换 nums1 中的 至多 一个元素，以 最小化 绝对差值和。
 *
 * 在替换数组 nums1 中最多一个元素 之后 ，返回最小绝对差值和。因为答案可能很大，所以需要对 10^9 + 7 取余 后返回。
 *
 * |x| 定义为：
 *
 *  * 如果 x >= 0 ，值为 x ，或者
 *  * 如果 x <= 0 ，值为 -x
 */

/**
 *
 * 替换的话应该是找到绝对值最大的位置,替换元素让当前位置的绝对值最小
 * 
 * 寻找绝对值最大位置不对,应该找替换后差距最大的位置,~~那遍历逻辑可就是 n^2了
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
  let maxData = [0 /* max value */, 0 /* max value index */];
  let result = 0;
  // 查找问题位置
  // 应该可以先把其他的绝对差值和缓存下来
  nums1.forEach((e, i) => {
    if (maxData[0] < Math.abs(e - nums2[i])) {
      result += maxData[0];
      maxData[0] = Math.abs(e - nums2[i]);
      maxData[1] = i;
    } else {
      result += Math.abs(e - nums2[i]);
    }
  });
  if (!maxData[0]) return 0;
  // nums2 数据不能动,轮训nums1获取最小的值
  let min = Number.MAX_SAFE_INTEGER;
  nums1.forEach((e) => {
    if (Math.abs(nums2[maxData[1]] - e) < min) {
      min = Math.abs(nums2[maxData[1]] - e);
    }
  });
//   console.log(min,result);
  return (min+result) % 1e9+7
};
console.log(minAbsoluteSumDiff([1, 7, 5], [2, 3, 5]));
console.log(minAbsoluteSumDiff([1, 7, 5], [1, 7, 5]));
console.log(minAbsoluteSumDiff([1,10,4,4,2,7], [9,3,5,1,7,4]));
