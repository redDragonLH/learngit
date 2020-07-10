/**
 * 32. 最长有效括号
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 */

/**
 * 如果右括号不能匹配，那肯定就是有问题
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let map = {'(':')',')':'('}
    let stack = [];
    let pos = 0;
    let len = s.length;
    let count= 0;
    let ls = 0;
    while(pos < len) {
        if(s[pos] ===')' &&stack[0] === map[s[pos]]) {
            stack.shift();
            ls+=2;
            count = Math.max(count,ls)
        }else if(s[pos] ===')' ){
            stack.unshift(s[pos])
            ls=0;
        }else if(s[pos] ==='(') {
            stack.unshift(s[pos])

        }
        pos++;
    }
    return count;
};

console.log(longestValidParentheses('()(())'));
