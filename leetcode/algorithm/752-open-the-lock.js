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


/**
 * 官方题解 广度优先
 */
var openLock = function (deadends, target) {
  if (target === "0000") {
    return 0;
  }
  // 题解在死亡数字内,无解
  const dead = new Set(deadends);
  if (dead.has("0000")) {
    return -1;
  }
  // 广度优先搜索初始化数据
  let step = 0;
  const queue = [];
  queue.push("0000");
  // 已处理数据保存
  const seen = new Set();
  seen.add("0000");

  while (queue.length) {
    // 单步,只不过这个单步有好多落脚点~~,
    ++step;
    // 每次处理队列所有数据,应该也就最多8个
    const size = queue.length;
    for (let i = 0; i < size; ++i) {
        // 当前status 在上一个循环已经判断过了
        // 初始数据已在循环开始前判断过
      const status = queue.shift();
      for (const nextStatus of get(status)) {
          // 没遍历,也不是死亡数
        if (!seen.has(nextStatus) && !dead.has(nextStatus)) {
          if (nextStatus === target) {
            return step;
          }
          queue.push(nextStatus);
          seen.add(nextStatus);
        }
      }
    }
  }

  return -1;
};
// 处理数据边界
const numPrev = (x) => {
  return x === "0" ? "9" : parseInt(x) - 1 + "";
};
// 处理数据边界
const numSucc = (x) => {
  return x === "9" ? "0" : parseInt(x) + 1 + "";
};

// 枚举 status 通过一次旋转得到的数字
const get = (status) => {
  const ret = [];
  const array = Array.from(status);
  // 四个转盘,每个转盘实际只能有两个移动方向
  for (let i = 0; i < 4; ++i) {
    const num = array[i];
    array[i] = numPrev(num);
    ret.push(array.join(""));
    array[i] = numSucc(num);
    ret.push(array.join(""));
    // 在当前没有意义,但是在整个循环中是有意义的
    // 恢复原来的数据,使当前四个转盘每次只移动一个数字
    array[i] = num;
  }

  return ret;
};

/**
 * 笔记: 
 *  * 对于这种四位一体,多位一体的数据处理,尽量不要分开处理,作为一个整体处理
 * 
 *  * 在广度优先搜索中步骤可以是处理每一个数据的量,也可以是处理当前整个队列的次数
 * 
 *  * 判断数据是否在数组之内,除了显式为对象,还可以用 Set ,Map
 */