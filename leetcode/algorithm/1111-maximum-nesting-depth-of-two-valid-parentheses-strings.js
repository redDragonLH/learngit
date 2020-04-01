/**
 * 1111. 有效括号的嵌套深度
 * 
 * 未理解题意
 */
/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(str) {
 let deep = [];
 let stack = [];
 let flag = 0;
 for (let i = 0; i < str.length; i++) {
  if( stack.length === 0 || stack[stack.length - 1] === str[i]) {
   stack.push(str[i]);
   deep.push(flag++);
  } else if(stack[stack.length - 1] !== str[i]){
    stack.pop(str[stack.length - 1]);
    deep.push(--flag);
  }
 }
 console.log(stack,deep);
 
};
let str = "(()(()))";
maxDepthAfterSplit(str);