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
 * 应该还是可以优化的,因为如果有一个比对的不相等,那么这个字符串肯定就不相等, 短路判断
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr=s.split("");
    let temp=[];
    for(let item of arr){
        if(item=="(")
            temp.push(item)
        else if(item=="{")
            temp.push(item)
        else if(item=="[")
            temp.push(item)
        else if(item=="]"){
            if(temp[temp.length-1]!="[")
                return false;
            temp.pop()
        }
        else if(item=="}"){
            if(temp[temp.length-1]!="{")
                return false;
            temp.pop()
        }
        else if(item==")"){
            if(temp[temp.length-1]!="(")
                return false;
            temp.pop()
        }
    }
    return !temp.length;

};
console.log(isValid("()[]{}"));

/**
 * 和第一次逻辑基本是一样的,为啥运行时间还慢了
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了48.93%的用户
 * 内存消耗：38.2 MB, 在所有 JavaScript 提交中击败了28.60%的用户
 */
