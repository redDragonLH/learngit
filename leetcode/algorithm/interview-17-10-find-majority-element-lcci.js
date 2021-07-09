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

/**
 * 官方题解: Boyer-Moore 投票算法
 *
 * 会改变数据内容
 * 基本思想: 在每一轮投票过程中,从数组删除两个不同的元素,直到投票过程无法继续,此时数组为空或者数组中剩下的元素都相等
 *  * 如果数组为空,则数组不存在主要元素
 *  * 如果数组中剩下的元素都相等,则数组中剩下的元素可能为主要元素
 *
 * 步骤:
 *  1. 维护一个候选主要元素 和候选主要元素的出现次数,初始时 候选主要元素为任意值,出现次数为0
 *  2. 遍历数组中的所有元素,遍历到元素x的时候:
 *      1. 如果出现次数为 0 ,则将x的值赋给候选主要元素,否则不更新
 *      2. 如果 x 等于候选主要元素,则将 次数 +1,否则减1
 *  3. 遍历结束之后,如果数组中存在主要元素,则候选主要元素即为主要元素,否则候选主要元素可能为数组中的任意一个元素
 *
 * 由于不一定存在主要元素,所以要第二次遍历数组,验证 候选主要元素是否为主要元素,第二次遍历时,统计出现次数即可
 */

var majorityElement = function (nums) {
  let candidate = -1;
  let count = 0;
  for (const num of nums) {
    if (count === 0) {
      // 重置 候选主要元素
      // count 减为0就换新的,也可能是换成以前有的,但是无所谓
      candidate = num;
    }
    // 计数
    //  这样计数下去几乎肯定是只要有超过半数的元素那就肯定会剩下,因为减到最后也必会剩下它
    // 没有负数,到零就换,这样就算当前攒的数被杂元素对冲抹平,但是因为主要元素超过半数,计算到最后还是抹不平
    // 但是因为可能不存在主要元素那么还得考虑不存在的情况,所以要对数据进行二次遍历进行判断
    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }
  count = 0;
  const length = nums.length;
  for (const num of nums) {
    if (num === candidate) {
      count++;
    }
  }
  return count * 2 > length ? candidate : -1;
};
