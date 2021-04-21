/**
 * 91. 解码方法
 *
 * 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：
 * "AAJF" ，将消息分组为 (1 1 10 6)
 * "KJF" ，将消息分组为 (11 10 6)
 * 注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。
 * 给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。
 * 题目数据保证答案肯定是一个 32 位 的整数。
 */

/**
 * 26之前都能映射,而且可能有多个,
 *
 * 0不能在前,0在后就不能拆了,超过6不是一个映射数
 *
 * 感觉动态规划比较适合,因为最多就两个数,所以可以类似为上台阶问题
 *
 * 1. 定义数组元素的含义
 *     数组每个元素应该是到当前元素为止的映射方法总数(能想出,但是没法想出关系式)
 * 2. 找出数组元素之间的关系式
 *     一个元素一个元素的处理肯定会出问题把,毕竟是有两个数字组合的,和前一个、后一个进行对比吗,那这样是不是得考虑跳过后一个数字
 * 3. 找出初始值
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let len = s.length;
  if (len < 2) return len;
  let arr = 0;
  for (let i = 1; i < len; i++) {
    if (s[i - 1] === "0" || s[i] === "0") {
      arr += s[i - 1] < 3 ? 1 : 0;
    }else if(s[i - 1] < "3" || s[i] < "7") {
        arr+=2
    }
  }
  console.log(arr);
};
