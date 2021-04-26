/**
 * 1011. 在 D 天内送达包裹的能力
 *
 * 传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。
 * 传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。
 * 返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。
 */

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
  // 确定二分查找左右边界
  let left = Math.max(...weights), // 左边界,不能小于最大的包裹
    right = weights.reduce((a, b) => a + b); // 右边界,不能大于包裹重量之和
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    //  need 为需要运送的天数
    // cur 为当前这一天已经运送的包裹重量之和
    let need = 1,
      cur = 0;
    // 循环所有重量
    // 确认当前左右边界情况下需要多少次船
    for (const weight of weights) {
      // 当前已经上船的包裹重量加上准备上船的重量大于中位数 // mid 是什么数量

      // 天数+一天,当前总重量清零
      if (cur + weight > mid) {
        need++;
        cur = 0;
      }
      cur += weight;
    }
    // 重新计算左右边界
    if (need <= D) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
