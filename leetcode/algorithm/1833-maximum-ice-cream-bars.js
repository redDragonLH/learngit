/**
 * 1833. 雪糕的最大数量
 *
 * 夏日炎炎，小男孩 Tony 想买一些雪糕消消暑。
 * 商店中新到 n 支雪糕，用长度为 n 的数组 costs 表示雪糕的定价，其中 costs[i] 表示第 i 支雪糕的现金价格。Tony 一共有 coins 现金可以用于消费，他想要买尽可能多的雪糕。
 * 给你价格数组 costs 和现金量 coins ，请你计算并返回 Tony 用 coins 现金能够买到的雪糕的 最大数量 。
 * 注意：Tony 可以按任意顺序购买雪糕。
 */

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  let result = 0;
  costs.sort((a, b) => a - b);
  for (let i = 0; i < costs.length; i++) {
    coins -= costs[i];
    if (coins > -1) result++;
    else return result; // 及时返回
  }
  return result;
};
console.log(maxIceCream([1, 3, 2, 4, 1], 7));
/**
 * 改变数据内部元素结构的动作耗能确实大
 * 
 * 执行用时：288 ms, 在所有 JavaScript 提交中击败了54.63%的用户
 * 内存消耗：51.3 MB, 在所有 JavaScript 提交中击败了64.65%的用户

 */
