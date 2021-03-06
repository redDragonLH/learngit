/**
 * 150. 逆波兰表达式求值
 * 
 * 根据 逆波兰表示法，求表达式的值。
 * 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 
 * 说明：
 *      整数除法只保留整数部分。
 *      给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 */

/**
 * 应该有个栈，从表达式开头往里插，遇到字符串就提出来两个计算完再放回去
 * 
 * 用栈即可解决
 * 
 * 逆波兰表达式就是把数字放前边，运算符放后边，也就是栈里面必定有两个相邻的数字，等待运算
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function (tokens) {
    const stack = [];
    while (tokens.length) {
        let item = tokens.shift();
        if (!Number.isNaN(item/1)) stack.unshift(item)
        else {
            let num1 = stack.shift()
            let num2 = stack.shift()
            let num = 0;
            switch (item) {
                case "+":
                    num = num1 / 1 + num2 / 1;
                    break;
                case "-":
                    num = num2- num1;
                    break;
                case "*":
                    num = num2 * num1;
                    break;
                case "/":
                    num = ~~(num2 / num1);
                    break;
            }
            stack.unshift(num)
        }
    }
    return stack[0]
};
/**
 * 我这还是都是从left 处理数据
 * 执行用时：104 ms, 在所有 JavaScript 提交中击败了38.97%的用户
 * 内存消耗：39.7 MB, 在所有 JavaScript 提交中击败了82.33%的用户
 */



/**
 * 第三方优秀题解
 * 
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    if(!tokens || !tokens.length) return 0;
    let sign = ['+','-','*','/']; 
    let stack = [];
    for(let i = 0; i<tokens.length; i++){
        let cur = tokens[i];
        // 优化，但是也得轮询把， object会不会好一点，但是初始化也是坑
        if( sign.indexOf(cur) != -1){
            let a = stack.pop();
            // 减少了一次 pop 事件
            stack[stack.length - 1]  = handleComputed(stack[stack.length - 1],a,cur);
        }else{
            stack.push(cur);
        }
    }
    return stack[0];
};

function handleComputed(a, b, sign){
    let res = 0;
    switch(sign){
        case '+':
            res = Number(a) + Number(b);
            break;
        case '-':
            res = a - b;
            break;
        case '*':
            res = a * b;
            break;
        case '/':
            res = parseInt(a / b);
            break;
    }
    return res;
}