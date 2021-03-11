/**
 * 227. 基本计算器 II
 * 
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 * 整数除法仅保留整数部分。
 */

/**
 * 栈 方法
 * 
 * 由于乘除优先级最高,所以最好在入栈时现行计算,然后把计算结果代替上一个数入栈,随后在对整个栈进行处理
 * 
 * 用变量保存运算符,根据变量的值来决定计算方式
 *  * 加号: 将数字压入栈
 *  * 减号: 将数字的相反数压入栈 (重点)
 *  * 乘除号: 计算数字与栈顶的元素,并将计算结果替换为计算结果
 * 
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.trim();
    const stack = new Array();
    let preSign = '+';
    let num = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        // 可能是多位数,所以要先把num进一位然后加上当前数字
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            // charCodeAt 这种方式要比 Number 显式转换 效率高吗
            num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
        }
        if (isNaN(Number(s[i])) || i === n - 1) {
            switch (preSign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                default:
                    stack.push(stack.pop() / num | 0);
            }   
            preSign = s[i];
            num = 0;
        }
    }
    let ans = 0;
    while (stack.length) {
        ans += stack.pop();
    }
    return ans;
};
