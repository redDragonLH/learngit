/**
 * 面试题46. 把数字翻译成字符串
 * 
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
 * 
 */
/**
 * 动态规划遍历，最高只到25，这样的话只要当前判断的第一个数字大于1，第二个数字大于5，那么只有一种表示类型，
 * 
 * 边界条件有两个，如果等于第一个数小于等于2，第二个数小于等于5，则有两个情况，反之则只有一个
 * 也可以说，边界条件就是所有的数都轮询完毕
 * @param {number} num
 * @return {number}
 * 动态规划并不能回退，只是在所有可能的路线中选择一条最好的
 */
var translateNum = function(num) {
    if(num<10) return 1;
    let array = [];
    while(num >9){
        array.unshift(num%10)
        num = parseInt(num/10)
    }
    array.unshift(num)
    return dp(array);
};
const dp = (arr,i=0) => {
    if(arr.length-1 <= i) return 1;
    // 0 需要单独判断
    if(arr[i]=== 0 || arr[i] > 2 || (arr[i] === 2 && arr[i+1]>5) ) {
        return dp(arr,i+1)
    }else {
        return dp(arr,i+1) + dp(arr,i+2);
    }
}
console.log(translateNum(506));
/**
 * 执行用时 :76 ms, 在所有 JavaScript 提交中击败了21.41%的用户
 * 内存消耗 :32.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */