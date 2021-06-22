/**
 * 剑指 Offer 38. 字符串的排列
 * 
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    const data = {};
    const result = []
    deep(s, '', 0, data);
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            result.push(key);

        }
    }
    return result;
};
const deep = (s, subString, pos, data) => {
    if (subString.length === s.length) {
        !data[subString] && (data[subString] = true);
        return null;
    }
    for (let i = 0; i < s.length; i++) {
        if (!(pos >> i & 1)) {
            deep(s, subString + s[i], pos | 1 << i, data)
        }
    }
}
/**
 * 理论上不需要这么长时间的啊，难道是include 方法的问题，改为object么
 * 执行用时：204  ms, 在所有 JavaScript 提交中击败了34.33%的用户
 * 内存消耗：50.1 MB, 在所有 JavaScript 提交中击败了13.72%的用户
 */