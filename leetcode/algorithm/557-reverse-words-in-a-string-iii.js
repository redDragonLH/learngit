/**
 * 557. 反转字符串中的单词 III
 * 
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 */


/**
 * 
 * 使用内部代码
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if(!s) return s;
    let array = s.split(' ');
    return array.map((e)=> e.split('').reverse().join('')).join(' ');
};
/**
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了58.07%的用户
 * 内存消耗：44.4 MB, 在所有 JavaScript 提交中击败了68.83%的用户
 */

/**
 * 
 * 基础代码实现功能
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if(!s) return s;
    let reversed ='';
    let temp = '';
    let len = s.length-1;
    for (let i = 0; i <= len; i++) {
        if(s[i] === ' ') {
            reversed += (temp + s[i]);
            temp = '';
            continue;
        }
        temp = s[i] + temp;

    }

    return reversed + temp;
};

/**
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了37.11%的用户
 * 内存消耗：45 MB, 在所有 JavaScript 提交中击败了16.94%的用户
 */