/**
 * 696. 计数二进制子串
 * 
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，
 * 并且这些子字符串中的所有0和所有1都是组合在一起的。
 * 重复出现的子串要计算它们出现的次数。
 */

/**
 * 题解： 按照字符分组
 * 
 * 将字符串 s 按照 0 1 的连续段分组，存在counts数组中，，例如 s = 00111011，可以得到这样的 counts 数组：counts={2,3,1,2}。
 * 
 * 这里的数组中两个相邻的数一定代表的是两种不同的字符。假设 counts 数组中两个相邻的数字为 u 或者 v，
 * 它们对应着 u 个 0 和 v 个 1，或者 u 个 1 和 v 个 0。
 * 它们能组成的满足条件的子串数目为 min{u,v}，即一对相邻的数字对答案的贡献。
 */
var countBinarySubstrings = function (s) {
    const counts = [];
    let ptr = 0, n = s.length;
    while (ptr < n) {
        const c = s.charAt(ptr);
        let count = 0;
        while (ptr < n && s.charAt(ptr) === c) {
            ++ptr;
            ++count;
        }
        counts.push(count);
    }
    let ans = 0;
    for (let i = 1; i < counts.length; ++i) {
        ans += Math.min(counts[i], counts[i - 1]);
    }
    return ans;
};