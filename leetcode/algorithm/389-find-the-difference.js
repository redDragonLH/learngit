/**
 * 389. 找不同
 * 
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 请找出在 t 中被添加的字母。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const AcharCodeAt = 97

    // 两个字母表喽
    const sArr = new Array(26).fill(0);
    const tArr = new Array(26).fill(0);

    let forLen = s.length>t.length?s.length:t.length;
    for (let i = 0; i < forLen; i++) {
        s[i] && sArr[s[i].charCodeAt()-AcharCodeAt]++
        t[i] && tArr[t[i].charCodeAt()-AcharCodeAt]++
    }

    for (let i = 0; i < 26; i++) {
        if(sArr[i] !== tArr[i]) return String.fromCharCode(AcharCodeAt+i)
        
    }
};
console.log(findTheDifference('abcd','abcde'));
/**
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了99.09%的用户
 * 内存消耗：39.5 MB, 在所有 JavaScript 提交中击败了50.19%的用户
 */
/**
 *  求和方案
 * 把每个字符串的元素转成码点相加,然后得到两个数字,这两个数字相减得到的数字就是多余的那个字母
 */


/**
 * 位运算方案
 * 
 * 如果把两个字符串合并,那么这个问题就是查找这个字符串中的奇数元素,因为只有一个元素是不同的嘛,可以使用异或运算
 */