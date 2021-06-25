/**
 * 752. 打开转盘锁
 *
 * 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。
 * 每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
 *
 * 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
 *
 * 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
 *
 * 字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。
 */

/**
 * 每次每个转盘只能转动一位数,并且不能与死亡数字相同,如果遇到死亡数字必须移动一个无关位置,多两个步骤
 *
 * 搜索每个转盘,但是四个还是联动的~~,每次需要检查死亡数字
 *
 * 广度优先搜索: 从当前节点搜索它下一级的所有节点,一层一层检查
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let result = 0;
  if (target === 0000) return -1;
  // 搜索一个转盘
  let deadendsSet = new Set(deadends);
  let queue = [0];
  let step = 0;
  let processed = new Set();
  let currentStr = "000";
  while (queue.length) {
    step++; // 不能保存所有,应该保存当前路径的数量
    let next = queue.shift();

    processed.add(next);
    currentStr += next;
    if (!deadendsSet.has(currentStr) && "" + next === target[0]) {
      result += step;
      break;
    } else {
      next + 1 < 10 && !processed.has(next + 1) && queue.push(next + 1);
      if (next - 1 < 0) {
        !processed.has(9) && queue.push(9);
      } else {
        !processed.has(next - 1) && queue.push(next - 1);
      }
    }
  }
  console.log(result);
};

openLock(["8888"], "6000");
