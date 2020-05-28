/**
 * 394. 字符串解码
 * 
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 */

 /**
 * 栈方法
 * 
 * 流程逻辑
 * 1. 定义一个栈数据结构
 * 2. 如果当前数据为左括号或字母先进栈
 * 3. 如果是右括号则出栈，直到左括号，再入栈么
 * 
 * @param {string} s
 * @return {string}
 * 有递归～～
 */
var decodeString = function(s) {
    let len = s.length -1;
    if(len < 1) return s; // 小于1 说明字符串不够，无法成为最小编码 1[].  (小于2也可以判断吧，最小编码至少有3个字符)
    let stack = [];
    for (let i = 0; i <= len; i++) {
        if(s[i] !== ']') { //不是右边界则只是插入到栈内
            stack.unshift(s[i]) // 使用 unshift 好判断，只要判断第一个数据就可以了，不需要获取当前数据长度
            if(i === len){ // 到头了返回栈内数据
                return stack.reverse().join('')
            }
        }else {
            let num = 0;
            let repeat = '';
            while(stack[0] !== '['){
                repeat = stack.shift() + repeat;
            }
            stack.shift(); // 这个字符串是 [,没用，直接弹出
            num = stack.shift();
            while (Number.parseInt(stack[0]) > -1) {// 可能是多位数～～，翻倍的数字不可能为负数，所以可以这样判断
                num = stack.shift() + num;
            }
            num = Number.parseInt(num) // 单数的时候没有这步也可以正常运算，应该是有隐式转换，是不是可以考虑去掉
            repeat = repeat.repeat(num);

            if(i === len){
                return stack.reverse().join('') + repeat;
            }
            for(let char of repeat){ // 没到头就先把已重复的数据推到栈里，所以空间复杂度比较难算
                stack.unshift(char)
            }
        }
        
    }
};
console.log(decodeString('"100[leetcode]"'));
console.log(decodeString('3[a2[c]]'));
/**
 * 根据题解提供的思路进行的编码
 * 
 * 时间复杂度：
 * 空间复杂度：
 * 
 * 执行用时 :68 ms, 在所有 JavaScript 提交中击败了45.60%的用户
 * 内存消耗 :32.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */