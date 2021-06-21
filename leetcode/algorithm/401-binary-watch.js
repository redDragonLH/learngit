/**
 * 401. 二进制手表
 *
 * 二进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。每个 LED 代表一个 0 或 1，最低位在右侧。
 *
 * 给你一个整数 turnedOn ，表示当前亮着的 LED 的数量，返回二进制手表可以表示的所有可能时间。你可以 按任意顺序 返回答案。
 *
 * 小时不会以零开头：
 *  * 例如，"01:00" 是无效的时间，正确的写法应该是 "1:00" 。
 *
 * 分钟必须由两位数组成，可能会以零开头：
 *  * 例如，"10:2" 是无效的时间，正确的写法应该是 "10:02" 。
 */

/**
 * 传入1的个数,也就是亮的个数,然后计算有多少亮的排序
 *
 *
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  if (turnedOn > 9) return [];
  const list = new Array(10).fill(0);
  const dataArr = [];
  const result = [];
  deep(turnedOn, list, dataArr);
  dataArr.forEach((e, i) => {
    let temp = binary2Date(e);
    temp && result.push(temp);
  });
  return result;
};

const deep = (count, list, data) => {
  if (!count) {
    let str = list.join("");
    data.findIndex((e) => e === str) === -1 && data.push(str);
  } else {
    for (let i = 0; i < 10; i++) {
      let temp = [...list];

      if (!temp[i]) {
        temp[i] = 1;
        deep(count - 1, temp, data);
      }
    }
  }
};
const binary2Date = (binary) => {
  let hour = parseInt(binary.substring(0, 4).toString(10), 2);
  let minute = parseInt(binary.substring(4, 10).toString(10), 2);
  if (hour > 11 || minute > 59) return false;
  return hour + ":" + (minute < 10 ? "0" + minute : minute);
};

/**
 * 没有进行剪枝,把数组和字符串改为二进制数字应该能再次减少数据类型转换的时间
 * 执行用时：4200 ms, 在所有 JavaScript 提交中击败了5.04%的用户
 * 内存消耗：44.3 MB, 在所有 JavaScript 提交中击败了5.04%的用户
 */

/**
 * 官方题解: 枚举
 * 
 * 这个角度没想到
 */

var readBinaryWatch = function (turnedOn) {
  const ans = [];
  for (let h = 0; h < 12; ++h) {
    for (let m = 0; m < 60; ++m) {
      if (
        h.toString(2).split("0").join("").length +
          m.toString(2).split("0").join("").length ===
        turnedOn
      ) {
        ans.push(h + ":" + (m < 10 ? "0" : "") + m);
      }
    }
  }
  return ans;
};
