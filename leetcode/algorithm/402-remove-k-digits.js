/**
 * 402. 移掉K位数字
 * 
 * 给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。
 * 
 * 注意:
 * num 的长度小于 10002 且 ≥ k。
 * num 不会包含任何前导零。
 */

/**
 * 
 * 删除必须有规则，比如必须尽量靠近左侧
 * 数字必须尽量大
 * 
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let count = num.length;
    const tag = new Array(count).fill(1)
    let pos = 0;
    for (let i = 1; i < count; i++) {
        if(pos<k) {
            if(num[i]>num[i-1]) {
                tag[i] &&(tag[i]=0,pos++)
            }else {
                tag[i-1] &&(tag[i-1]=0,pos++)
            }
        }
        
    }
    let result = '';
    for (let i = 0; i < tag.length; i++) {
        if(tag[i])result+=num[i]
    }
    console.log(result)
    return result.length>1 ? result.replace(/^0/,''):result;
};
/**
 * 自题解 失败
 */