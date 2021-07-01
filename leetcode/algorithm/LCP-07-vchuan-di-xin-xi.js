/**
 * LCP 07. 传递信息
 *
 * 小朋友 A 在和 ta 的小伙伴们玩传信息游戏，游戏规则如下：
 *  1. 有 n 名玩家，所有玩家编号分别为 0 ～ n-1，其中小朋友 A 的编号为 0
 *  2. 每个玩家都有固定的若干个可传信息的其他玩家（也可能没有）。传信息的关系是单向的（比如 A 可以向 B 传信息，但 B 不能向 A 传信息）。
 *  3. 每轮信息必须需要传递给另一个人，且信息可重复经过同一个人
 * 给定总玩家数 n，以及按 [玩家编号,对应可传递玩家编号] 关系组成的二维数组 relation。返回信息从小 A (编号 0 ) 经过 k 轮传递到编号为 n-1 的小伙伴处的方案数；若不能到达，返回 0。
 */

/**
 * // 逻辑较简单
 * 首先查询已0起始的元素,收拢完毕后
 * 进入广度优先搜索状态,
 * 步骤倒计时,
 * 终止状态检查
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  let result = 0;
  let queue = relation.filter((e) => !e[0]);
  while (queue.length) {
    if (!k) return result;
    k--;
    let len = queue.length;
    while (len) {
      len--;
      let node = queue.shift();
      if (!k && node[1] === n - 1) {
        result++;
      } else {
        queue.push(...relation.filter((e) => e[0] === node[1]));
      }
    }
  }
  return result;
};

console.log(
  numWays(
    3,
    [
      [0, 2],
      [2, 1],
    ],
    2
  )
);
/**
 * 存在可优化点
 * 执行用时：6904 ms, 在所有 JavaScript 提交中击败了6.67%的用户
 * 内存消耗：57.3 MB, 在所有 JavaScript 提交中击败了16.67%的用户
 */