/**
 * 20. 有效的括号
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */

/**
 * 栈的应用嘛
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s.length) return true;
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if(!stack.length) {
            stack.unshift(s[i])
        }else {
            if(stack[0] === map[s[i]]) {
                stack.shift();
            }else {
                stack.unshift(s[i])
            }
        }
    }
    return !stack.length; // 这里比上次的三元好不少
};
console.log(isValid('([)]'));

/**
 * 和第一次逻辑基本是一样的,为啥运行时间还慢了
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了73.99%的用户
 * 内存消耗：38 MB, 在所有 JavaScript 提交中击败了45.97%的用户
 */