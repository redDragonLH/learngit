/**
 * 1370. 上升下降字符串
 * 
 * 给你一个字符串 s ，请你根据下面的算法重新构造字符串：

 * 从 s 中选出 最小 的字符，将它 接在 结果字符串的后面。
 * 从 s 剩余字符中选出 最小 的字符，且该字符比上一个添加的字符大，将它 接在 结果字符串后面。
 * 重复步骤 2 ，直到你没法从 s 中选择字符。
 * 从 s 中选出 最大 的字符，将它 接在 结果字符串的后面。
 * 从 s 剩余字符中选出 最大 的字符，且该字符比上一个添加的字符小，将它 接在 结果字符串后面。
 * 重复步骤 5 ，直到你没法从 s 中选择字符。
 * 重复步骤 1 到 6 ，直到 s 中所有字符都已经被选过。
 * 在任何一步中，如果最小或者最大字符不止一个 ，你可以选择其中任意一个，并将其添加到结果字符串。

 * 请你返回将 s 中字符重新排序后的 结果字符串 。
 */

/**
 * 想明白了之后也挺简单,就是在26个字母中正反轮询,最好是用一维数组作为数据,来回轮询
 * 
 * 用对象作为数据结构要麻烦的多,而且顺序也不能保证
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let len = s.length;
    if(!len) return '';
    const arr = new Array(26).fill(0);
    for (let i = 0; i < len; i++) {
        let pos = s[i].charCodeAt()-'a'.charCodeAt();
        arr[pos]++
    }
    let result = '';
    //  直观~~~
    while (result.length < len) {
        for (let i = 0; i < 26; i++) {
            if (arr[i]) {
                result += String.fromCharCode(i + 'a'.charCodeAt());
                arr[i]--;
            }
        }
        for (let i = 25; i >= 0; i--) {
            if (arr[i]) {
                result += String.fromCharCode(i + 'a'.charCodeAt());
                arr[i]--;
            }
        }
    }
    return result;
};
sortString('aaaabbbbcccc')

/**
 * 我还以为最后的拼接过程官方题解会有点奇技淫巧~~~
 * 
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了90.95%的用户
 * 内存消耗：40.4 MB, 在所有 JavaScript 提交中击败了82.73%的用户
 */

/**
 * 第三方最快题解
 * 
 * 第三方题解去掉了 a 的转码
 * 以及简化了循环的判断条件
 * 整体逻辑并没有改变
 */
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let bucket = new Array(26).fill(0);
   
    let str = "";
    for (let i = 0; i < s.length; i++) {
        bucket[s[i].charCodeAt() - 97]++
    }
    let len = s.length;
    while (len) {
        for (let i = 0; i < 26; i++) {
            if (bucket[i]) {
                str += String.fromCharCode(i + 97)
                bucket[i]--
                len -- 
            }
        }
        for (let i = 25; i >= 0; i--) {
            if (bucket[i]) {
                str += String.fromCharCode(i + 97)
                bucket[i]--
                len -- 
            }
        }
    }

    return str
};