/**
 * 647. 回文子串
 * 
 * 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
 */

/**
 * n^2的逻辑,嵌套轮询是否有
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = len =  s.length;
    for (let i = 0; i < len; i++) {
        let s=s[i];
        for (let j = i+1; j < len; j++) {
            count += isPalindromic(s += s[j]);

        }
        
    }
    return count;
};
const isPalindromic = (s) =>{
    let start = 0;
    let end = s.length-1

    while(start>end) {
        if(s[start] !== s[end]) return 0;
        start++;
        end--;
    }
    return 1;
}
/**
 * 暴力不可取~~
 * 执行用时：744 ms, 在所有 JavaScript 提交中击败了8.51%的用户
 * 内存消耗：43.8 MB, 在所有 JavaScript 提交中击败了64.52%的用户
 */