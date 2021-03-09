/**
 * 1047. 删除字符串中的所有相邻重复项
 * 
 * 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
 * 在 S 上反复执行重复项删除操作，直到无法继续删除。
 * 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 */

/**
 * 递归处理么,或者拆开,感觉拆效率会比较慢~~~
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    const slen= S.length
    recursion(S)
};
const recursion = (S)=> {
    for (let i = 0; i < S.length;) {
        
    }
}

/**
 * 官方题解 栈
 */
var removeDuplicates = function(S) {
    const stk = [];
    for (const ch of S) {
        if (stk.length && stk[stk.length - 1] === ch) {
            stk.pop();
        } else {
            stk.push(ch);
        }
    }
    return stk.join('');
};

/**
 * 第三方题解
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    if(S === ''){
        return '';
    }
    let stack = [];
    for(let i = 0; i < S.length; i++){
        let code = S.charAt(i);
        if(stack.length == 0){
            stack.push(code);
        }else{
            if(stack[stack.length - 1] === code){
                stack.pop();
            }else{
                stack.push(code);
            }
        }
    }
    return stack.join('');
};