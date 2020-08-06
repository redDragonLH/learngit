/**
 * 336. 回文对
 *
 * 给定一组唯一的单词， 找出所有不同 的索引对(i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。
 */

/**
 * 不知道双循环+ hash表可以解决问题不~
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
    const map = new Map();
    const array = []
    // 元素的前后+元素 判断是否为回文
    for (let i = 0; i < words.length; i++) {
        for (let j = i; j < words.length; j++) {
            if(j === i) continue;
            if(isPalindrome(words[i] + words[j])) {
                array.push([i,j])
            }
            if(isPalindrome(words[j] + words[i])) {
                array.push([j,i])
            }
        }
    }
    return array;
};

const isPalindrome = (str)=> {
    console.log(str);
    let start = 0,end = str.length-1;
    while(start < end) {
        if(str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}
console.log(palindromePairs(["abcd","dcba","lls","s","sssll"]))
console.log(palindromePairs(["bat","tab","cat"]))

/**
 * 暴力法竟然能通过,我是没想到的~~
 * 
 * 执行用时：3836 ms, 在所有 JavaScript 提交中击败了15.49%的用户
 * 内存消耗：49.6 MB, 在所有 JavaScript 提交中击败了33.33%的用户
 */