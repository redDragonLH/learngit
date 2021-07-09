/**
 * 面试题 17.10. 主要元素
 *
 * 数组中占比超过一半的元素称之为主要元素。给你一个 整数 数组，找出其中的主要元素。若没有，返回 -1 。请设计时间复杂度为 O(N) 、空间复杂度为 O(1) 的解决方案。
 */

/**
 * 空间复杂度为1,那就是不能用哈希表啥的保存了,用异或吗
 * 时间复杂度为O(n) 好说~~
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  len = nums.length;
  let map = {};
  let max = 0;
  let num = -1;
  nums.forEach((e) => {
    map[e] ? map[e]++ : (map[e] = 1);
    if (max < map[e] && map[e] > len / 2) {
      max = map[e];
      num = e;
    }
  });
  return num;
};
/**
 * 空间复杂度为 O(N)
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了98.04%的用户
 * 内存消耗：41.7 MB, 在所有 JavaScript 提交中击败了25.88%的用户
 */