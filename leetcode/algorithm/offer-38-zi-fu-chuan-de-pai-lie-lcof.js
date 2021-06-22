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
    const data = [];
    deep(s, '',0, data);
    return data;
};
const deep = (s, subString,pos, data) => {
    console.log(data);
    if (subString.length === s.length) {
        data.push(subString);
        return data
    }
    for (let i = 0; i < s.length; i++) {
        console.log(pos>>i & 0);
        if (!subString.includes(s[i])) {
            permutation(s, subString + s[i], data)
        }
    }
}